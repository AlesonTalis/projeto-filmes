
import React from 'react'

import { useParams } from 'react-router-dom'
import { Header } from '../../Modules'

import StarRatings from 'react-star-ratings'

const link = 'https://m.media-amazon.com/images/M/MV5BNjE4NzJkMmUtNzkwYy00YmI1LTg2ZDgtNWI3ZWQyNmZmNWQwXkEyXkFqcGdeQXVyMTA4Nzk5ODAy._V1_SX300.jpg'

export default function Detail() {
  let params = useParams()
  return (
    <div className="page">
      <Header/>
      <div className="content">
        <div className="filmiss detail">
          <div className="background">
            <img src={link} alt={link} />
          </div>
          <div className="content-area">
            <div className="top-gradient"></div>
            <div className="background-color"></div>
          </div>
          <div className="detail-area flex-col">
            <div className="flex-row bottom">
              <img src={link} alt={link} />
              <div className="flex-col pl">
                <h1>TiluloFilme</h1>
                <div className="flex-row flex-center">
                  <h2 className="pr">2000</h2>
                  <StarRatings
                    numberOfStars={5}
                    rating={6.6/2}
                    starRatedColor={'gold'}
                    starDimension={'1.2em'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}