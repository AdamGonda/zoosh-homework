import React from 'react'
import { connect } from 'react-redux'
import { open, fetchMovieDetails } from '../redux/actions/movieDetailPanel'
import { Typography, Paper } from '@material-ui/core'
import Genres from './Genres'

function MovieListItem({
  movie,
  allGenres,
  fetchMovieDetails,
  openMovieDetailPanel,
}) {
  return (
    <Paper
      elevation={3}
      className="movie-list-item"
      onClick={() => {
        fetchMovieDetails(movie)
        openMovieDetailPanel(movie)
      }}
    >
      <Typography variant="h6">{movie.title}</Typography>
      <Typography variant="subtitle1" component="p">
        Rating: {movie.vote_average}
      </Typography>
      <Genres {...{ genreIds: movie.genre_ids, allGenres }} />
    </Paper>
  )
}

export default connect(
  state => ({ allGenres: state.genres }),
  dispatch => ({
    openMovieDetailPanel: movie => dispatch(open(movie)),
    fetchMovieDetails: movie => dispatch(fetchMovieDetails(movie)),
  }),
)(MovieListItem)
