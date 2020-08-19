import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { moviesReducer } from './reducers/movies'
import { notificationReducer } from './reducers/notification'
import { genresReducer } from './reducers/genres'
import { movieDetailPanelReducer } from './reducers/movieDetailPanel'

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  notification: notificationReducer,
  movieDetailPanel: movieDetailPanelReducer,
})

const enhancer = compose(
  applyMiddleware(thunk),
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : null) || compose,
)

export default createStore(rootReducer, {}, enhancer)
