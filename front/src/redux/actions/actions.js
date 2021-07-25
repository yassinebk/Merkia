/* eslint-disable camelcase */
import axios from 'axios'
let id = 0;

const url =
  process.env.NODE_ENV === 'production'
    ? '`/api/'
    : 'http://localhost:3001/api/'

/* Article */
export function loadArticles() {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}articles`)
      const articles = res.data
      return dispatch({ type: 'LOAD_ARTICLES', articles })
    } catch (error) {
      //console.log('error occured while loading Articles', error)
    }
  }
}

export function getArticle(articleId) {
  //console.log('getting article')
  return (dispatch) => {
    axios
      .get(`${url}/article/${articleId}`)
      .then((res) => {
        const article = res.data
        dispatch({ type: 'VIEW_ARTICLE', article })
      })
      .catch((err) => dispatch(setNotif(err,"error")))
  }
}

export function comment(articleId, author, comment) {
  return (dispatch) => {
    axios
      .patch(`${url}/article/comment`, {
        articleId,
        authorId: author._id,
        comment,
      })
      .then((res) => {
        const newDate= new Date()
        const newComment = {
          text:comment,
            author,
          articleId,
          date: newDate.toString()
        }
        dispatch({ type: 'COMMENT_ARTICLE', newComment })
      })
  }
}

export function like(user_id,articleId) {
  return (dispatch) => {
    axios
      .patch(`${url}article/like`, {user_id ,id: articleId })
      .then((res) => {
        dispatch({ type: 'LIKE_ARTICLE' })
      })
      .catch((err) => dispatch(setNotif(err,"error")))
  }
}

export function getUser(_id) {
  return axios
    .get(`${url}user/${_id}`)
    .then((res) => {
      //console.log('user',res) ;
      return res.data
    })
    .catch((err) =>console.error(err))
}

export function addArticle(article) {
  return (dispatch) => {
    //console.log(article)
    axios
      .post(`${url}article`, article)
      .then((res) => {
        const article = res.data
        dispatch({
          type: 'ADD_ARTICLE',
          data: {
            article,
          },
        })
      })
      .catch((error) => {
        dispatch(setNotif(error,"error"))
      })
  }
}

export function getUserProfile(_id) {
  //console.log('getting user profile')
  return (dispatch) => {
    axios
      .get(`${url}/user/${_id}`)
      .then((res) => {
        const profile = res.data
        dispatch({ type: 'SET_PROFILE', profile })
      })
      .catch((err) => dispatch(setNotif(err,"error")))
  }
}
export function follow(operation,id, user_id) {
  return (dispatch) => {
    if (operation === "follow") {
      axios
        .patch(`${url}user/follow`, { operation, id, user_id })
        .then((res) => {
          return dispatch({ type: 'FOLLOW_USER', user_id })
        })
        .catch((err) => dispatch(setNotif(err,"error")))
    }
    else {
      axios
        .patch(`${url}user/follow`, { operation, id, user_id })
        .then((res) => {
          return dispatch({ type: 'UNFOLLOW_USER', user_id })
        })
        .catch((err) => dispatch(setNotif(err,"error")))
    }
  }
    
  }


export function googleAuth(user_data) {
  //console.log('here')
  return (dispatch) => {
    //console.log('google auth sending data', user_data)
    axios
      .post(`${url}google/auth`, user_data)
      .then((res) => {
        const user = res.data;
        //console.log('googleAuth',user)
        localStorage.setItem('Auth', JSON.stringify(user))
        //console.log(user)
        dispatch({ type: 'SET_USER', user })
        //console.log('here')
      })
      .catch((err) => dispatch(setNotif(err,"error")))
  }
}
export function bookmark(operation, id, articleId) {
  return (dispatch) => {
    axios
      .patch(`${url}user/bookmark`, { operation, id, articleId })
      .then((res) => {
        if (operation === "bookmark")
          dispatch({ type: 'BOOKMARK_ARTICLE', articleId })
        else dispatch({ type: 'UNBOOKMARK_ARTICLE', articleId })
      }).catch(error => (dispatch(setNotif(error,"error")))
      )
  }
}

export function signUp(newUser) {
  return (dispatch) => {
    //console.log('user to sign',newUser.values)

    axios.post(`${url}user`,  newUser ).then((res) => {
     const resUser = {
        ...res.data.user,
        token:res.data.token
      }
      localStorage.setItem('Auth', JSON.stringify(resUser))
      dispatch({ type: 'SET_USER', user:resUser })
    })
  }
}

export function login(user) {
  return (dispatch) => {
    //console.log(user)
    axios.post(`${url}login`, user).then((res) => {
      const resUser = {
        ...res.data.user,
        token:res.data.token
      }
      localStorage.setItem('Auth', JSON.stringify(resUser))
      dispatch({ type: 'SET_USER', user:resUser } )
    })
  }
}

export function toggleClose() {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: false })
  }
}

export function toggleOpen() {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: true })
  }
}

export function logout() {
    return({type:"CLEAR_USER"})
}

export function setNotif(message, type) {
  return dispatch => {

    dispatch({ type:type.toUpperCase(), message})
    clearTimeout(id)
    id = setTimeout(() => {
      dispatch({ type: "CLEAR" })
    },6000)
  }
}