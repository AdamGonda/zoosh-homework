export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

export const showNotification = ({ message, type, duration }) => ({
  type: SHOW_NOTIFICATION,
  payload: { show: true, message, type, duration },
})

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
  payload: {},
})
