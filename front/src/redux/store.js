import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducer from './reducer'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
const browserHistory = createBrowserHistory()
export const history = syncHistoryWithStore(browserHistory, store)

//console.log(history)
