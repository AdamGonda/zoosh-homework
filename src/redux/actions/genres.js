import config from '../../config'
import { showNotification } from './notification'

// action types
export const SET_GENRES = 'SET_GENRES'

// action creators
export const setGenres = genres => ({
  type: SET_GENRES,
  payload: genres,
})

export const fetchGenres = () => dispatch => {
  fetch(getUrl())
    .then(resp => resp.json())
    .then(data => {
      dispatch(setGenres(data.genres))
    })
    .catch(() => {
      dispatch(
        showNotification({
          show: true,
          message: 'Unexpected error happened during fetching genres',
          type: 'error',
          duration: 2000,
        }),
      )
    })
}

function getUrl() {
  const { BASE_URL, API_KEY } = config.THE_MOVIE_DB
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
}
