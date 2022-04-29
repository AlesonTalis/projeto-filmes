import { useState } from 'react'

import {Routes, Route, Navigate} from 'react-router-dom'

import {
  Home,
  Search,
  Detail,
  Favorites,
} from './Pages'

function App() {

  return (
    <div className="main">
      <Routes>
        <Route element={<Home/>} path={'/'} />
        <Route element={<Search/>} path={'/search'} />
        <Route element={<Detail/>} path={'/detail/:id'} />
        <Route element={<Favorites/>} path={'/favorites'} />
        <Route element={<Navigate to={'/'}/>} path={'*'} />
      </Routes>
    </div>
  )
}

export default App
