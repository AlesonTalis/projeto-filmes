
import React, { useEffect, useState } from 'react'
import { Header, SearchBlock } from '../../Modules'

import { useParams, useSearchParams } from 'react-router-dom'
import { omdbapi } from '../../Include/variables'

export default function Search() {
  const [searchParams,setSearchParams] = useSearchParams()

  let search = searchParams.get('search')!
  let page = searchParams.get('page')

  return (
    <div className='page'>
      <Header/>
      <SearchBlock 
        search={searchParams.get('search')!} 
        page={searchParams.get('page')!}
      />
    </div>
  )
}