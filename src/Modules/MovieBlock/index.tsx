
import {useState, useEffect} from 'react'
import StarRatings from 'react-star-ratings'
import { addFavorite, isFavorite, removeFavorite } from '../../Include/Storage'

import { omdbapi } from "../../Include/variables"

export default function MovieBlock({
    imdbID = '', 
    Title = '', 
    Poster = '', 
    Year = '', 
    Rating = 10.0,
    type = 'block'
  })
{
  const getFavoriteValues = async() => {
    let response = fetch(omdbapi + "&i=" + imdbID)

  }

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

  useEffect(function () {
    if (type !== 'favorite' || imdbID === '') return

    var q = omdbapi + '&i=' + imdbID

    console.log(q)

    fetch(q)
      .then(res => res)
      .then(res => res.json())
      .then(json => {
        if (json.Error)
        {
          console.log(json.Error + ' ' + imdbID)
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
    },[imdbID])

  const returnType = () => {
    switch(type)
    {
      case 'favorite':
        return(<>
          {loading ? <h2>Loading...</h2> : (
            <div className="flex-row flex-center">
              <a href={'/detail/' + imdbID} className="flex-row flex-center">
                <img src={data.Poster} alt={data.Poster} className="filmiss-poster-small"/>
                <h2 className="title pl">{data.Title}</h2>
              </a>

              { data.imdbRating !== 'N/A' ? <div className="pl-2">
                <StarRatings rating={+data.imdbRating / 2} numberOfStars={5} starDimension={'2em'} starRatedColor={'gold'} />
              </div> : ''}
            </div>
          )}
        </>)

      case 'block':
      default:
        return (<>
          <img src={Poster} alt={Poster} className="img-bg" />
          <a href={'/detail/' + imdbID} className="description">
            <h2 className="title">
              {Title}
            </h2>
            <div className="flex-row">
              <div className="genre">{Year}</div>
              {/* <div className="duration">%duracao%</div> */}
            </div>
            {/* <div className="rating">
              <StarRatings
                rating={6.6/2}
                numberOfStars={5}
                starDimension={'1em'}
                starRatedColor={'gold'}
              />
            </div> */}
          </a>
      </>)
    }
  }

  return (
    <div key={imdbID} className="filmiss-block">{returnType()}</div>
  )
}