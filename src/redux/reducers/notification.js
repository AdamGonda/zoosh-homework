import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/notification'

const initialState = {
  show: false,
  message: '',
  type: '',
  duration: 0
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return action.payload

    case HIDE_NOTIFICATION:
      return {
        ...state,
        show: false,
      }

    default:
      return state
  }
}
