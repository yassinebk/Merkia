const initialState = {
    type: 'info',
    message: ""
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  //console.log(action)
  switch (action.type) {
    case 'SUCCESS':
      return {
        type:'success',
        message:action.message
      }

      case 'ERROR':
          return {
              type: 'error',
              message:action.message
          }

    case `WARNING`:
      return ({
        type:'warning',
        message:action.message
      })
    
    case 'INFO':
      return {
        type:"info",
        message:action.message,
      }
      case 'CLEAR':
          return initialState
              
          
     default:
      return state
  }

}
