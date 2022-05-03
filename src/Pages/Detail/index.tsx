
import React from 'react'
import { useState, useEffect } from 'react'

import { FaUser, FaHeart } from 'react-icons/fa'
import { BiCrown, BiBook } from 'react-icons/bi'

import { useParams } from 'react-router-dom'
import { Header, MovieDescription } from '../../Modules'

import StarRatings from 'react-star-ratings'

import './style.css'

const link = 'https://m.media-amazon.com/images/M/MV5BNjE4NzJkMmUtNzkwYy00YmI1LTg2ZDgtNWI3ZWQyNmZmNWQwXkEyXkFqcGdeQXVyMTA4Nzk5ODAy._V1_SX300.jpg'

import { omdbapi, language } from '../../Include/variables'
import { addFavorite, favorites, favoritesList, isFavorite, removeFavorite } from '../../Include/Storage'

export default function Detail() {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState<any>(null)
  const [actors,setActors] = useState([])
  const [time,setTime] = useState<number>(0)
  const [favorite,setFavorite] = useState<boolean>(false)

  const addToFavorites = (index = '') => {
    if (isFavorite(index) === true)
      removeFavorite(index)
    else
      addFavorite(index)
    
    // console.log(favorites.toString())
    setFavorite(isFavorite(index))
  }

  let params = useParams()

  const imdbID = params.id;

  useEffect(function () {
      fetch(omdbapi + '&i=' + imdbID)
        .then(res => res)
        .then(res => res.json())
        .then(json => {
          if (json.Error)
          {
            console.log(json.Error + imdbID)
            console.log(imdbID + ' -')
            return
          }
          setData(json)
          setLoading(false)
          if (json.Actors) setActors(json.Actors.split(', '))
          var t = json.Runtime.split(' ')[0]
          setTime(t !== 'N/A' ? 0 : +t)

          setFavorite(isFavorite(json.imdbID))
        })
        // .catch(({Response}) => {
        //   console.log(Response)
        // })
    },[])

  return (
    <div className="page">
      <Header/>
      {loading?(
        <h1>Loading...</h1>
      ):(
        <div className="content">
          <div className="filmiss detail">
            <div className="background">
              <img src={data.Poster} alt={data.Poster} />
            </div>
            <div className="content-area">
              <div className="top-gradient"></div>
              <div className="background-color"></div>
            </div>
            <div className="detail-area flex-col">
              <div className="flex-row bottom">
                <img src={data.Poster} alt={data.Poster} />
                <div className="flex-col pl">
                  <div className="flex-row flex-center pb">
                    <h1 className="pr-1">{data.Title}</h1>
                    <a 
                      href={"#"}
                      onClick={(e) => {
                        e.preventDefault()

                        addToFavorites(data.imdbID)
                      }}
                    >
                      <FaHeart color={favorite ? 'red' : 'gray'} size={'2em'}/>
                    </a>
                  </div>
                  <div className="flex-row flex-center">
                    <h2 className="pr">{data.Year}</h2>
                    {data.imdbRating && data.imdbRating !== 'N/A' ? (
                    <StarRatings
                      numberOfStars={5}
                      rating={data.imdbRating /2}
                      starRatedColor={'gold'}
                      starDimension={'1.2em'}
                    />) : ''}
                    
                  </div>
                  <div className="flex-row">
                    {time >0 ? (<div className="movie-time">{time + " minutos"}</div>) : ''}
                    <div className={"movie-language" + (time > 0 ? " pl" : '')}>
                      {data.Language}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-area pt-3">
                {/* DIRETOR */}
                <div className="actors">
                  <div className="actor actor-title">Diretor:</div>
                  <div className="actor flex-row">
                    <div className="actor-img"><BiCrown color='gold'/></div>
                    <div className="actor-name pl">{data.Director}</div>
                  </div>

                  {/* ROTEIRISTA */}
                  <div className="actor actor-title">Roteirista:</div>
                  <div className="actor flex-row">
                    <div className="actor-img"><BiBook color='gold'/></div>
                    <div className="actor-name pl">{data.Writer}</div>
                  </div>

                  {/* ELENCO */}
                  <div className="actor actor-title">
                    Atores:
                  </div>
                  {actors.map((a,i) => {
                    return(
                      <div key={i} className="actor flex-row">
                        <div className="actor-img">
                          <FaUser/>
                        </div>
                        <div className="actor-name pl">{a}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="description pt-2">{data.Plot}</div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}