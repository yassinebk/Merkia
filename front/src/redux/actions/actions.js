/* eslint-disable camelcase */
import axios from 'axios'

const url =
  process.env.NODE_ENV === 'production'
    ? '`/api/'
    : 'http://localhost:3001/api/'

export function loadArticles () {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}articles`)
      const articles = res.data
      return dispatch({ type: 'LOAD_ARTICLES', articles })
    } catch (error) {
      console.log('error occured while loading Articles', error)
    }
  }
}

export function getUser (_id) {
  console.log('getting user')
  return axios
    .get(`${url}user/${_id}`)
    .then((res) => res.data)
    .catch((err) => console.log('error occured while getting user', err))
}

export function getUserProfile (_id) {
  console.log('getting user profile')
  return (dispatch) => {
    axios
      .get(`${url}/user/profile/${_id}`)
      .then((res) => {
        const profile = res.data
        dispatch({ type: 'SET_PROFILE', profile })
      })
      .catch((err) => console.log(err))
  }
}

export function getArticle (articleId) {
  console.log('getting article')
  return (dispatch) => {
    axios
      .get(`${url}/article/${articleId}`)
      .then((res) => {
        const article = res.data
        dispatch({ type: 'VIEW_ARTICLE', article })
      })
      .catch((err) => console.log(err))
  }
}

export function comment () {
  return (dispatch) => {}
}

export function like (articleId) {
  return (dispatch) => {
    axios
      .post(`${url}article/like`,  articleId )
      .then((res) => {
        dispatch({ type: 'LIKE_ARTICLE' })
      })
      .catch((err) => console.log(err))
  }
}
export function follow (id, user_id) {
  return (dispatch) => {
    axios
      .post(`${url}user/follow`, { id, user_id })
      .then((res) => {
        dispatch({ type: 'FOLLOW_USER', user_id })
      })
      .catch((err) => console.log(err))
  }
}

export function goolgeSignUp (user_data) {
  return (dispatch) => {
    console.log(user_data)
    axios
      .post(`${url}google/auth`, user_data)
      .then((res) => {
        const user = res.data
        localStorage.setItem('Auth', JSON.stringify(user))
        dispatch({ type: 'SET_USER', user })
      })
      .catch((err) => console.log(err))
  }
}

export function SignUp(user) {
  return (dispatch) => [
    console.log(user);
    axios.post(`${url}/signup`).then(res => {
      const user = res.data;
      localStorage.setItem('Auth', JSON.stringify(user));
      dipsatch({type:'SET_USER',user})
    })
  ]
}

export function login(user) {
  return dispatch => {
    console.log(user)
    axios.post(`${url}login`, user).then(res => {
      const user = res.data;
      localStorage.setItem('Auth', JSON.stringify(user));
      dipsatch({type:'SET_USER',user})
    })
  }
}

export function toggleClose () {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: false })
  }
}

export function toggleOpen () {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: true })
  }
}
