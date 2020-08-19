import { SET_MOVIES, SET_ARE_MOVIES_LOADING } from '../actions/movies'

const initState = {
  data: [],
  areLoading: false,
}

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        data: action.payload
      }
    
    case SET_ARE_MOVIES_LOADING:
      return {
        ...state,
        areLoading: action.payload
      }

    default:
      return state
  }
}
