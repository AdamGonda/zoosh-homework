import { SET_GENRES } from '../actions/genres'

const initState = []

export const genresReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload

    default:
      return state
  }
}
