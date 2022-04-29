
import React from 'react'
import './style.css'
import { HOME } from '../../Include/variables'
import {SearchInput} from '../index'

export default function Header() {
  return (
    <header className="flex-col">
      <div className="flex-row flex-center">
        <div className="logo">
          <a href={HOME}>FILMISS</a>
        </div>
        <ul className="menu flex-row">
          <li>
            <a href={'/home'}>Início</a>
          </li>
          <li>
            <a href={'/favorites'}>Favoritos</a>
          </li>
          <li>
            <a href={'/search?new'}>Novos Lançamentos</a>
          </li>
        </ul>
        
        <SearchInput/>

        <div className="theme">

        </div>
      </div>
    </header>
  )
}