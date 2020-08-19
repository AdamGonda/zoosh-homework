import React from 'react'
import { Typography } from '@material-ui/core'

function Genres({ genreIds, allGenres }) {
  const genres = allGenres
    .filter(genre => genreIds.includes(genre.id))
    .map(genre => genre.name)

  return (
    <div className="genres">
      {genres.map((genre, idx) => (
        <div key={idx}>
          <Typography
          key={idx}
          variant="subtitle2"
          component="p"
        >
          {genre}
        </Typography>
        </div>
      ))}
    </div>
  )
}

export default Genres
