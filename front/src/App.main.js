/* eslint-disable react/prop-types */
import { Route } from 'react-router'
import React from 'react'
import Feed from './components/Feed'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'
import Profile from './components/Profile'
import Authenticate from './components/utils/requireAuth'
import Header from './components/Header'
import { Switch } from 'react-router-dom'
import SignInWith from './components/SignInWith'
import { connect } from 'react-redux'
function App (props) {
  const pathname = window.location.pathname
  console.log('pathname', pathname)
  return (
    <div className="App">
     {!pathname.includes('editor') ? <Header/> : null}
      {!props.isAuth
        ? <SignInWith />
        : <Switch>
    <Route exact path="/" component={Feed}/>
    <Route exact path="/profile/:id" component={Profile}/>
    <Route path="/articleView/:id" component={ArticleView}/>
        <Route path="/editor" >
          <Authenticate Component={Editor}/>
          </Route>
    <Route path="**" component={Feed}/>
      </Switch>}
    </div>*/
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authUser.isAuth
  }
}
export default connect(mapStateToProps, null)(App)
