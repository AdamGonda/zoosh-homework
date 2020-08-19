import React from 'react'
import { Button } from '@material-ui/core'

function Links({ imdbId, wikiTitle }) {
  return (
    <div className="detail-panel-links">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={'https://imdb.com/title/' + imdbId}
      >
        <Button color="primary" variant="outlined">
          Imdb
        </Button>
      </a>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={'https://en.wikipedia.org/wiki/' + wikiTitle}
      >
        <Button color="primary" variant="outlined">
          Wikipedia
        </Button>
      </a>
    </div>
  )
}

export default Links
