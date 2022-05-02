
import './style.css'

export default function MovieDescription({description = '', actors = '', language = 'Portuguese'})
{
  const _actors = actors === '' ? [] : actors.split(', ')

  return (
    <div className="movie-description">
      <div className="plot">{description}</div>
    </div>
  )
}