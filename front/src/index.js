import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { getUser } from './redux/actions/actions'

if (localStorage.Auth) {
  // update local storage
  store.dispatch({ type: 'SET_USER', user: JSON.parse(localStorage.Auth) })
  const _id = JSON.parse(localStorage.Auth)._id
  getUser(_id).then((res) => store.dispatch({ type: 'SET_USER', user: res }))
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
