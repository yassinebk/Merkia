/* eslint-disable react/prop-types */
import { Route } from 'react-router'
import React from 'react'
import Feed from './components/Feed'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor.new'
import Profile from './components/Profile.new'
import Authenticate from './components/utils/requireAuth'
import Header from './components/Header'
import { Switch } from 'react-router-dom'
//import { connect } from 'react-redux'
// import RegForm from './components/RegForm'
import Landing from './components/Landing'
import SignInWith from './components/SignInWith'
function App (props) {
  const pathname = window.location.pathname
  console.log('pathname', pathname)
  return (
    <React.Fragment className="App">
     {!pathname.includes('editor') ? <Header/> : null}
      {!props.isAuth
        ? <SignInWith/>
        : <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/profile/:id" component={Profile}/>
    <Route path="/articleView/:id" component={ArticleView}/>
        <Route path="/editor" >
          <Authenticate Component={Editor}/>
          </Route>
    <Route path="**" component={Feed}/>
      </Switch>}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authUser.isAuth
  }
}
export default connect(mapStateToProps, null)(App)
