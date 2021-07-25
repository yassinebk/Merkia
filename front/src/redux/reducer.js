import { combineReducers } from 'redux'

import articles from './reducers/articles'
import authUser from './reducers/User'
import common from './reducers/common'
import notification from './reducers/notification'

import { routerReducer } from 'react-router-redux'

export default combineReducers({
  articles,
  authUser,
  common,
  routing: routerReducer,
  notification
})
