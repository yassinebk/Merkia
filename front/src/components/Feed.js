/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Footer from './Basic/Footer'
import NavbarLogin from './Basic/NavbarLogin'
import { Link, Route } from 'react-router-dom'
import Container from './Basic/Atomic/Container'
import Button from './Basic/Atomic/Button'
import MainCardFeed from './Basic/Atomic/MainCardFeed'
import ShadowedCardArticle from './Basic/Atomic/ShadowedCardArticle'
import { connect } from 'react-redux'
import { loadArticles } from '../redux/actions/actions'
import ArticleList from './ArticleList'
import Notification from './Notification'
import { Switch } from 'react-router-dom'

const Feed = (props) => {
  useEffect(() => {
    props.loadArticles()
  }, [])

  const whiteCard =
    'transition duration-500 transform hover:opacity-90 hover:scale-90 hover:text-primary_100 flex flex-col content-center items-center text-center bg-light newshadow text-secondary_200 text-3xl md:text-2xl  border-2 border-primary_300 rounded-lg p-4  m-3 w-auto h-auto'
  return (
    <Container>
      <Notification />
      <NavbarLogin />
      <div className=" flex flex-row justify-between text-4xl font-serif mt-36 px-8  sm:px-16 md:mt-36 xl:mt-48 2xl:met-64  ">
        <h1 className=" font-serif font-bold p-2">
          Welcome Again
          <span className="text-primary_100 font-black">{props.user.name}</span>
        </h1>
        <Link to="/editor">
          <Button variant="secondary" text="New blog" />
        </Link>
      </div>
      <div className="h-auto">
        <div className="flex flex-col items-center justify-evenly ">
          <MainCardFeed
            article={
              props.articles.articles[props.articles.articles.length - 1]
            }
            user={props.user}
          />
        </div>
      </div>
      (
      <Switch>
        <Route path="/list">
          <ArticleList />
        </Route>

        <Route path="/">
          <div>
            <Button
              variant="primary"
              classes=" hover:text-primary_100 hover:no-underline bg-fadedgray text-primary_300    h-auto w-auto text-2xl ml-66 mb-16 mt-8"
            >
              <Link
                to="/list"
                className="w-full h-full space-x-4 flex flex-row justify-end align-center "
              >
                More Articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-16 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2  border-fadedgray border-1 p-4 gap-x-4  rounded-lg border-1 mx-3 mb-8">
            <Link to="/profile" className=" col-start-1 col-end-2 m-auto w-5/6">
              <Button
                variant="primary"
                classes=" w-full  h-full"
                text="Check Profile"
              />
            </Link>
            <Link
              to="/bookmarks"
              className="col-start-2 col-end-3 m-auto w-5/6"
            >
              <Button
                variant="secondary"
                classes="w-full col-start-2 col-end-3 m-auto"
                text="Check Bookmarks"
              />
            </Link>
          </div>
          <div className="w-full  my-4 px-2">
            <h1 className="col-start-1 col-end-3 font-normal font-serif text-3xl mb-4 text-shadow ">
              Read Recently
            </h1>
            <div className="grid grid-cols-2  p-8 ">
              {props.articles.articles.map((article, index) => {
                return (
                  <div
                    key={index}
                    className={whiteCard + ' whiteCardsFeed truncate px-4'}
                  >
                    <Link
                      className="hover:no-underline"
                      to={`/article/${article._id}`}
                    >
                      {article.title}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full p-4 my-4">
            <h1 className="text-shadow font-normal font-serif text-3xl mb-4 ">
              New Articles
            </h1>

            <ShadowedCardArticle
              article={
                props.articles.articles[props.articles.articles.length - 1]
              }
            />
          </div>
        </Route>
      </Switch>
      )
      <Footer />
    </Container>
  )
}

const stateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.authUser.user,
  }
}
const dispatchToProps = {
  loadArticles,
}
export default connect(stateToProps, dispatchToProps)(Feed)
