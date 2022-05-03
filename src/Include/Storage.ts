
const FAV = 'favorites_storage'

// export const favorites: () => string = () =>
// {
//   return localStorage.getItem(FAV)!
// }

export const favorites: string = localStorage.getItem(FAV)!

type FavoritesList = () => string[]

export function favoritesList (): Array<string> {
  return localStorage.getItem(FAV)?.split(' ').filter((value) => value !== '')!
}

export function isFavorite(index = '')
{
  var l = favoritesList()

  if (l?.includes(index)) return true

  return false
}

export function removeFavorite(index = '')
{
  var l = favoritesList()

  l = l?.filter(function (value) {
    return value != index
  })

  var s = l?.join(' ')

  console.log(l)

  localStorage.setItem(FAV, s!)
}

export function addFavorite(index = '') {
  var s = favorites

  if (s === null) s = ""

  localStorage.setItem(FAV, s + " " + index)
  console.log(localStorage.getItem(FAV))
}