import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { omdbapi } from "../../Include/variables"

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
              <div key={d.imdbID} className="filmiss-block">
                <img src={d.Poster} alt={d.Poster} className="img-bg" />
                <a href={'/detail/' + d.imdbID} className="description">
                  <h2 className="title">
                    {d.Title}
                  </h2>
                  <div className="flex-row">
                    <div className="genre">{d.Year}</div>
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
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}