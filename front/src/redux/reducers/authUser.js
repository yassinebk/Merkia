/* eslint-disable no-case-declarations */

const initialState = {
  user: {},
  isAuth: false,
  profile: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        isAuth: Object.keys(action.user).length > 0,
        user: action.user
      }
    case 'FOLLOW_USER':
      const user = Object.assign({}, state.user)
      user.following.push(action.user_id)
      return {
        ...state,
        user: user
      }
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'CLEAR_USER':
      return (initialState)

    default:
      return state
  }
}
