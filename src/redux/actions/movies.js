import config from '../../config'
import { showNotification } from './notification'

// action types
export const SET_MOVIES = 'SET_MOVIES'
export const SET_ARE_MOVIES_LOADING = 'SET_ARE_MOVIES_LOADING'

// action creators
export const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies,
})

export const setAreMoviesLoading = areLoading => ({
  type: SET_ARE_MOVIES_LOADING,
  payload: areLoading,
})

export const fetchMovies = title => dispatch => {
  dispatch(setAreMoviesLoading(true))
  dispatch(setMovies([]))

  fetch(getUrl(title))
    .then(resp => resp.json())
    .then(data => {
      dispatch(setMovies(data.results))
      dispatch(setAreMoviesLoading(false))
    })
    .catch(() => {
      dispatch(setAreMoviesLoading(false))
      dispatch(
        showNotification({
          show: true,
          message: 'Unexpected error happened during fetching movies',
          type: 'error',
          duration: 2000,
        }),
      )
    })
}

function getUrl(title) {
  const { BASE_URL, API_KEY } = config.THE_MOVIE_DB
  return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${title}`
}
