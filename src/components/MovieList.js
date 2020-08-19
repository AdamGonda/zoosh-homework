import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import MovieListItem from './MovieListItem'
import logo from '../zoosh_logo.jpg'

function MovieList({ movies, areMoviesLoading }) {
  function showMovies() {
    if (areMoviesLoading) {
      return <CircularProgress />
    }

    if (movies.length === 0) {
      return (
        <div className="logo-wrap">
          <img alt="logo" src={logo} />
        </div>
      )
    }

    return movies.map(movie => <MovieListItem key={movie.id} {...{ movie }} />)
  }

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      className="movie-list"
    >
      {showMovies()}
    </Grid>
  )
}

export default MovieList
