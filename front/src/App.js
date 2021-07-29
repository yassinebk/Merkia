/* eslint-disable react/prop-types */
import { Route } from 'react-router'
import React from 'react'
import Feed from './components/Feed'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor.new'
import Profile from './components/Profile.new'
import Authenticate from './components/utils/requireAuth'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import RegForm from './components/RegForm'
import Landing from './components/Landing'
import Login from './components/Login'
import Notification from './components/Notification'
function App(props) {
  const pathname = window.location.pathname
  //console.log('pathname', pathname)
  //console.log(RegForm)

  return (
    <React.Fragment>
      <Notification />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register">
          <RegForm />
        </Route>
        <Route path="/editor">
          <Authenticate Component={Editor} />
        </Route>
        <Route path="/about">
          {props.isAuth ? (
            <Landing />
          ) : (
            <a href="github.com" className="text-8xl">
              this page is not build yet
            </a>
          )}
        </Route>

        <Route path="/profile/:id">
          <Authenticate Component={Profile} />
        </Route>
        <Route path="/profile/">
          <Authenticate Component={Profile} />
        </Route>

        <Route path="/article/:id">
          <Authenticate Component={ArticleView} />
        </Route>
        <Route path="/">{props.isAuth ? <Feed /> : <Landing />}</Route>
      </Switch>
      )
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authUser.isAuth,
  }
}
export default connect(mapStateToProps, null)(App)
