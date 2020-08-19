import React from 'react'
import { connect } from 'react-redux'
import { hideNotification } from '../redux/actions/notification'
import { Snackbar, Slide } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

function Notification({ show, type, message, duration, hideNotification }) {
  return (
    <Snackbar
      TransitionComponent={Slide}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={show}
      autoHideDuration={duration}
      onClose={() => hideNotification()}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  )
}

export default connect(
  state => ({
    show: state.notification.show,
    message: state.notification.message,
    type: state.notification.type,
    duration: state.notification.duration,
  }),
  dispatch => ({
    hideNotification: () => dispatch(hideNotification()),
  }),
)(Notification)
