import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { omdbapi } from "../../Include/variables"
import MovieBlock from "../MovieBlock"

interface ISearch
{
  page: string | null,
  search: string
}

export default function SearchBlock({search = '', page = ''})
{

  const [data,setData] = useState<any>(null)
  const [loading,setLoading] = useState<boolean>(true)
  const [searchArray,setSearchArray] = useState<any[]>([])

  useEffect(function () {
    fetch(omdbapi + '&s=' + search + '&page=' + page + '&type=movie')
      .then(res => res)
      .then(res => res.json())
      .then(json => {
        if (json.Error)
        {
          console.log(json.Error)
          return
        }
        setData(json)
        setLoading(false)
        setSearchArray(json.Search)
        console.log(json)
      })
      // .catch(({Response}) => {
      //   console.log(Response)
      // })
  },[])

  return (
    <>
      {loading?(
        <h1>Loading...</h1>
      ):(
        <div className="filmiss grade-3">
          {searchArray.map((d,i) => {
            return(
              <MovieBlock key={d.imdbID} imdbID={d.imdbID} Title={d.Title} Poster={d.Poster} Year={d.Year} type={'block'}/>
            )
          })}
        </div>
      )}
    </>
  )
}