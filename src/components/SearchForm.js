import React from 'react'
import { Button, TextField } from '@material-ui/core'

const ERROR_MESSAGE = "Title can't be empty"
const LABEL = 'Movie title'

function SearchForm({ onSubmit, areMoviesLoading }) {
  const [state, setState] = React.useState({
    title: '',
    showError: false,
  })

  return (
    <form
      className="search-form"
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault()

        if (state.title === '') {
          setState({ ...state, showError: true })
        } else {
          onSubmit(state.title)
        }
      }}
    >
      <TextField
        autoFocus
        size="small"
        label={LABEL}
        variant="outlined"
        value={state.title}
        error={state.showError}
        helperText={state.showError && ERROR_MESSAGE}
        onChange={e => setState({ title: e.target.value, showError: false })}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={areMoviesLoading}
      >
        Search
      </Button>
    </form>
  )
}

export default SearchForm
