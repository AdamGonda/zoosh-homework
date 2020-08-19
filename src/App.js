import React from 'react'
import { connect } from 'react-redux'
import SearchForm from './components/SearchForm'
import { fetchMovies } from './redux/actions/movies'
import { fetchGenres } from './redux/actions/genres'
import MovieList from './components/MovieList'
import Notification from './components/Notification'
import MovieDetailPanel from './components/MovieDetailPanel/index'
import { Grid } from '@material-ui/core'
import './style/main.css'

function App({ movies, fetchMovies, areMoviesLoading, fetchGenres }) {
  React.useEffect(() => {
    fetchGenres()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Notification />
      <Grid container direction="column" alignItems="center">
        <SearchForm
          {...{ onSubmit: title => fetchMovies(title), areMoviesLoading }}
        />
        <MovieList {...{ movies, areMoviesLoading }} />
        <MovieDetailPanel/>
      </Grid>
    </>
  )
}

export default connect(
  state => ({
    movies: state.movies.data,
    areMoviesLoading: state.movies.areLoading,
  }),
  dispatch => ({
    fetchMovies: title => dispatch(fetchMovies(title)),
    fetchGenres: () => dispatch(fetchGenres()),
  }),
)(App)
