import config from '../../config'
import { showNotification } from './notification'

// action types
export const OPEN = 'OPEN'
export const CLOSE = 'CLOSE'
export const SET_WIKI = 'SET_WIKI'
export const SET_IMDB_ID = 'SET_IMDB_ID'
export const SET_IS_WIKI_LOADING = 'SET_IS_WIKI_LOADING'
export const SET_SEARCHABLE_TITLE = 'SET_SEARCHABLE_TITLE'

// action creators
export const open = movie => ({
  type: OPEN,
  payload: movie,
})

export const close = () => ({
  type: CLOSE,
  payload: {},
})

export const setImdbId = id => ({
  type: SET_IMDB_ID,
  payload: id,
})

export const setWiki = wiki => ({
  type: SET_WIKI,
  payload: wiki,
})

export const setSearchableTitle = title => ({
  type: SET_SEARCHABLE_TITLE,
  payload: title,
})

export const setIsWikiLoading = isLoading => ({
  type: SET_IS_WIKI_LOADING,
  payload: isLoading,
})

export const fetchMovieDetails = ({ id, title }) => async dispatch => {
  let isError = false
  dispatch(setIsWikiLoading(true))

  const imdbId = await fetch(getImdbIdUrl(id))
    .then(res => res.json())
    .then(data => data.imdb_id)
    .catch(() => (isError = true))

  const searchableTitle = await fetch(getTitleUrl(title))
    .then(res => res.json())
    .then(data => data.query.search[0].title)
    .catch(() => (isError = true))

  const wiki = await fetch(getWikiExtractUrl(searchableTitle))
    .then(res => res.json())
    .then(data => data.query.pages[0].extract)
    .catch(() => (isError = true))

  if (isError) {
    dispatch(
      showNotification({
        show: true,
        message: 'Unexpected error happened during loading movie details',
        type: 'error',
        duration: 2000,
      }),
    )
  } else {
    dispatch(setSearchableTitle(searchableTitle))
    dispatch(setIsWikiLoading(false))
    dispatch(setImdbId(imdbId))
    dispatch(setWiki(wiki))
  }
}

function getImdbIdUrl(id) {
  return (
    config.THE_MOVIE_DB.BASE_URL +
    `/movie/${id}/external_ids?api_key=${config.THE_MOVIE_DB.API_KEY}`
  )
}

function getTitleUrl(movieTitle) {
  return (
    config.WIKI_API.BASE_URL +
    `&list=search&prop=info&inprop=url&utf8=&srlimit=1&srsearch=${movieTitle}%20film`
  )
}

function getWikiExtractUrl(searchableTitle) {
  return (
    config.WIKI_API.BASE_URL +
    `&prop=extracts&exsentences=10&exlimit=1&explaintext=1&formatversion=2&titles=${searchableTitle}`
  )
}
