
import React, { useState, useEffect } from 'react'
import { Header, MovieBlock } from '../../Modules'

import { favorites, favoritesList } from '../../Include/Storage'

export default function Favorites() {
  const [favorite,setFavorite] = useState([''])

  useEffect(() => {
    var s = favorites.split(' ').filter(value => value != '')
    var a:string[] = []

    s.forEach(n => {
      a.push(n)
    })

    setFavorite(a)
  },[])

  // console.log(favoritesList)
  return (
    <div className="page">
      <Header/>
      <div className="filmiss list favorites">
        {
          favorite.map((item,index) => {
            return(
              <MovieBlock key={index} type={'favorite'} imdbID={item} />
            )
          })
        }
      </div>
    </div>
  )
}