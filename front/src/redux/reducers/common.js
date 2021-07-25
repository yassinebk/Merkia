const defaultState = {
  appName: '',
  modalMode: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      //console.log(`toggling modal : ${action.modalMode}`)
      return {
        ...defaultState,
        modalMode: action.modalMode
      }
    default:
      return state
  }
}
