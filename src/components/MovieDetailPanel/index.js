import React from 'react'
import { connect } from 'react-redux'
import { close } from '../../redux/actions/movieDetailPanel'
import { Dialog, Grid, Typography, CircularProgress } from '@material-ui/core'
import Genres from '../Genres'
import Links from './Links'
import config from '../../config'

function MovieDetailPanel({
  close,
  isOpen,
  imdbId,
  wikiText,
  selected,
  allGenres,
  wikiTitle,
  isWikiLoading,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <Dialog open={isOpen} onBackdropClick={() => close()}>
      <Grid container direction="row" className="movie-detail-panel">
        <Grid container item xs={12} sm={4}>
          <img
            alt="poster"
            style={{ width: '100%' }}
            src={config.THE_MOVIE_DB.IMG_URL + selected.poster_path}
          />
        </Grid>
        <Grid container item direction="column" xs={12} sm={8} className="left">
          <Typography variant="h6">{selected.title}</Typography>
          <Typography variant="subtitle1" component="p">
            Rating: {selected.vote_average}
          </Typography>
          <Genres {...{ genreIds: selected.genre_ids, allGenres }} />
          <Links {...{ imdbId, wikiTitle }} />
        </Grid>
        <div className="overview">
          <Typography variant="subtitle1" component="p">
            {isWikiLoading ? <CircularProgress /> : wikiText}
          </Typography>
        </div>
      </Grid>
    </Dialog>
  )
}

export default connect(
  state => ({
    allGenres: state.genres,
    wikiText: state.movieDetailPanel.wiki,
    imdbId: state.movieDetailPanel.imdbId,
    isOpen: state.movieDetailPanel.isOpen,
    selected: state.movieDetailPanel.selected,
    wikiTitle: state.movieDetailPanel.searchableTitle,
    isWikiLoading: state.movieDetailPanel.isWikiLoading,
  }),
  dispatch => ({
    close: () => dispatch(close()),
  }),
)(MovieDetailPanel)
