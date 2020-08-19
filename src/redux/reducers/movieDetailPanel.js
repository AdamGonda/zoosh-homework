import {
  OPEN,
  CLOSE,
  SET_IMDB_ID,
  SET_WIKI,
  SET_SEARCHABLE_TITLE,
  SET_IS_WIKI_LOADING
} from '../actions/movieDetailPanel'

const initState = {
  isWikiLoading: false,
  isOpen: false,
  selected: null,
  imdbId: null,
  wiki: null,
  searchableTitle: null,
}

export const movieDetailPanelReducer = (state = initState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpen: true,
        selected: action.payload,
      }

    case CLOSE:
      return {
        ...state,
        isOpen: false,
        selected: null,
        wiki: null
      }

    case SET_IMDB_ID:
      return {
        ...state,
        imdbId: action.payload,
      }

    case SET_WIKI:
      return {
        ...state,
        wiki: action.payload,
      }

    case SET_SEARCHABLE_TITLE:
      return {
        ...state,
        searchableTitle: action.payload,
      }
    
    case SET_IS_WIKI_LOADING:
      return {
        ...state,
        isWikiLoading: action.payload,
      }

    default:
      return state
  }
}
