
import React, {useState} from 'react'
import {
  Header, SearchBlock
} from '../../Modules'
import './style.css'
import StarRatings from 'react-star-ratings';

import { palavras } from '../../Include/variables';

export default function Home() {
  const [colors,setColors] = useState([])

  return (
    <div className="page">
      <Header/>
      <SearchBlock search={palavras[Math.ceil(Math.random() * palavras.length-1)]}/>
    </div>
  )
}