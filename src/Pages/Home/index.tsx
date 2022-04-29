
import React, {useState} from 'react'
import {
  Header
} from '../../Modules'
import './style.css'
import StarRatings from 'react-star-ratings';

const link = 'https://m.media-amazon.com/images/M/MV5BNjE4NzJkMmUtNzkwYy00YmI1LTg2ZDgtNWI3ZWQyNmZmNWQwXkEyXkFqcGdeQXVyMTA4Nzk5ODAy._V1_SX300.jpg'

export default function Home() {
  const [colors,setColors] = useState([])

  return (
    <div className="page">
      <Header/>
      <div className="content">
        <div className="filmiss grade-3">
          {[1,2,3,4,5,6].map((v,i) => {
            return (
              <div className="filmiss-block">
                <img src={link} alt={link} className="img-bg" />
                <div className="description">
                  <h2 className="title">%FilmeTitulo%</h2>
                  <div className="flex-row">
                    <div className="genre">%Genero%</div>
                    <div className="duration">%duracao%</div>
                  </div>
                  <div className="rating">
                    <StarRatings
                      rating={6.6/2}
                      numberOfStars={5}
                      starDimension={'1em'}
                      starRatedColor={'gold'}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}