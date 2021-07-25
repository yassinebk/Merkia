import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { bookmark,follow, comment, getArticle, like } from '../redux/actions/actions'
import Button from './Basic/Atomic/Button'
import Container from './Basic/Atomic/Container'
import Input from './Basic/Atomic/Input'
import Footer from './Basic/Footer'
import NavbarLogin from './Basic/NavbarLogin'
import { useInput } from './utils/useInput'

const ArticleView = (props) => {
  const checkFollow = () => {
    if (props.user?.following?.includes(props.article?.author?._id))
      return `unfollow`
    else return `follow`
  }
  const commentText = useInput('text')
  const toggleFollow = () => {
    props.follow(checkFollow(), props.user._id, props.article.author._id)
  }
  const checkBookmark = () => {
    //console.log(props.user?.bookmarks?.includes(props.article?._id))
    if (props.user?.bookmarks?.includes(props.article?._id))
      return `removeBookmark`
    else return `bookmark`
  }
  const toggleBookmark = (event) => {
    event.preventDefault()
    props.bookmark(checkBookmark(), props.user._id, props.article._id)
  }

  const history = useHistory()
  const { id } = useParams()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (id ? props.getArticle(id) : null), [])
  if (!id) {
    history.push('/')
  }
  const sendComment = (event) => {
    event.preventDefault()
    props.comment(props.article._id, props.user, commentText.value)
    commentText.reset()
  }
  const like = (event) => {
    event.preventDefault()

    props.like(props.user._id,props.article?._id)
  }
  //console.log('article', props.article)
  return (
    <Container>
      <NavbarLogin />
      <div class="flex flex-col items-center h-auto">
        <div className="self-start p-4 w-full">
          <div class="max-w-xl mb-5 md:mb-16  lg:max-w-2xl">
            <div className="grid grid-cols-4 mb-4 w-screen">
              <div class=" col-start-1 col-end-4 ">
                <p class="mb-2 text-xl font-semibold tracking-wide text-gray-600 uppercase ">
                  {props.article?.created?.substring(0, 10)}
                </p>
                <h1
                  aria-label="Article"
                  class="inline-block max-w-lg font-sans text-6xl font-extrabold leading-none tracking-tight  md:text-7xl lg:text-8xl"
                >
                  {props.article?.title}
                </h1>
              </div>
 <div className="  mr-20 col-start-4 col-end-5 self-center flex flex-col align-end w-auto">
 <Button
              variant="secondary"
              classes="flex w-full flex-row items-center justify-between md:w-auto h-28 mb-12 "

              onClick={toggleBookmark}
            >
              <p className="text-2xl">
                {checkBookmark(props.article._id)==='bookmark'
                  ? 'Bookmark'
                  : 'Remove bookmark'}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-16 md:w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </Button>

              <Button
                variant="primary"
                classes=" h-28 self-center w-full"
                text={checkFollow()}
                onClick={toggleFollow}
              />
</div>
            </div>
            <p class=" text-gray-700 text-4xl md:text-5xl lg:text-6xl">
              {props.article?.description}
            </p>
          </div>
          <div class="mb-10 sm:text-center border-2 border-primary_300 p-6 flex flex-col space-y-6 w-2/3  m-auto items-center">
            <Link
              to={`/profile/${props.article?.author?._id}`}
              aria-label="Author"
              class="inline-block mb-1 self-center hover:opacity-80 transition duration-300"
            >
              {props.article?.author?.provider_pic && <img
                alt="avatar"
                src={props.article?.author?.provider_pic}
                class="object-cover w-24 h-24 rounded-full shadow-sm"
              />}
            </Link>
            <div>
              <Link
                href="/"
                aria-label="Author"
                className="font-semibold link text-center text-gray-800 transition-colors duration-200 hover:text-primary_100 mb-4"
              >
                <Button variant="boldText" classes="text-center">
                  {props.article?.author?.name}
                </Button>
              </Link>
              <p className="text-lg text-center font-medium leading-4 text-gray-600 md:text-xl">
                {props?.article?.author?.email}
              </p>
            </div>
          </div>
        </div>

        {props.article?.feature_img && (
          <img
            src={props.article?.feature_img}
            alt="article-img"
            className="w-2/3 articleView-img h-max-2xl"
          />
        )}
        <p className="sm:text-left p-16  w-full text-3xl">
                 {props.article.content}
                 </p>
      </div>
      <div className="bg-gradient border-t-2 ">
        <form
          onSubmit={sendComment}
          className="flex flex-col space-y-8 sm:flex-row justify-evenly w-full px-4 md:px-8 my-16 items-center"
        >
          <div className="w-full sm:w-auto">
           
                      </div>
          <div className="flex flex-col items-center space-y-4">

            <Button
              variant={props.user.likes.includes(props.article._id)?"primary":"secondary"}
              disabled={props.user.likes.includes(props.article._id)}
              classes={`flex w-full flex-row items-center p-2 w-auto h-28 mr-8 justify-evenly no-wrap space-x-8 `}
              onClick={like}
            >

              <p className="text-3xl  font-bold m-auto text-left"> <span className="font-sans text-primary_400 text-4xl">{props.article.likes}</span>{ props.user.likes.includes(props.article._id)?"    Liked ":"  Like"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-12 md:w-12 text-primary_400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
</div>


          <div className=" flex space-x-8 justify-evenly mt-32 sm:mt-0 flex-row w-full flex-wrap">
            <Input {...commentText} containerClass="w-2/3" inputClass="w-full h-36 py-4 px-6 text-2xl truncate" />
            <Button
              variant="secondary"
              text="Comment"
              type="submit"
              classes="h-28"
            />
          </div>
        </form>
      </div>
     
      <div className="flex flex-col align-items-center space-y-6 p-4 text-3xl w-full">
      {props.article.comments?.map(comment =>
     <div className="card shadow w-fullj">
  <div className="card-body w-full">
            <h2 className="card-title text-3xl lg:text-5xl font-serif profile-username">### {comment.author.username} ###  {comment.date?comment.date.substring(3,15):null}</h2>
            <p className="text-2xl lg:text-3xl font-sans">{comment.text}</p>
  </div>
</div> 

      )}   
      </div>
      <Footer />
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    article: state.articles.article,
    user: state.authUser.user,
  }
}
const mapDispatchToProps = {
  getArticle,
  comment,
  like,
  follow,
  bookmark
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)
