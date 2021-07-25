/* eslint-disable no-case-declarations */

const initialState = {
  user: {},
  isAuth: false,
  profile: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  //console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return ({
        ...state,
        isAuth: Object.keys(action.user).length > 0,
        user: action.user
      })

    case 'FOLLOW_USER':
      const userNew = state.user.following
        userNew.push(action.user_id)
      const u = {
        ...state.user,
        userNew
        }

      return ({
        ...state,
        user:u
      })
      
    case 'UNFOLLOW_USER':
      const user2 = {
        ...state.user, following: state.user.following.filter(f => f !== action.user_id)
      }
      return ({
        ...state,
        user:user2
      })
    
    case 'SET_PROFILE':
      return( {
        ...state,
        profile: action.profile
      })
    case 'BOOKMARK_ARTICLE': 
      const newUser = {
        ...state.user, bookmarks: state.user.bookmarks.concat(action.articleId)
      };
      return ({
        ...state,
        user:newUser
      })
    case 'UNBOOKMARK_ARTICLE':
    //console.log('bookmarks',state.user.bookmarks)
      const newUser2= {
        ...state.user ,bookmarks: state.user.bookmarks.filter(b => b !== action.articleId)
      };
      //console.log('after filter',newUser2)
      return ({
        ...state,
        user:newUser2
      })
    
    case 'CLEAR_USER':
      return (initialState)

    default:
      return state
  }
}
