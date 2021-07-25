import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import {  BrowserRouter as Router } from 'react-router-dom'
import { getUser } from './redux/actions/actions'

//console.log('localStorage',localStorage)
if (localStorage.Auth) {
  // update local storage
//console.log('here')
  store.dispatch({ type: 'SET_USER', user: JSON.parse(localStorage.Auth) })
  const _id = JSON.parse(localStorage.Auth)._id

//console.log('here')
  getUser(_id).then((res) => store.dispatch({ type: 'SET_USER', user: res.data })).catch(error => { localStorage.clear(); })

}

ReactDOM.render(
  <Provider store={store}>

    <Router history={history}>
     < App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
