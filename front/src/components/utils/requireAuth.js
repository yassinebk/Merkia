import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {useHistory} from"react-router"


const Authenticate = (props) => {
const history =useHistory() 

  //console.log('props',props)
  useEffect(() => {
    if (!props.isAuth)  history.push('/')
  }, [])

  return <props.Component {...props} />
}

const mapStateToProps = (state) => {
  return { isAuth: state.authUser.isAuth }
}

export default connect(mapStateToProps, null)(Authenticate)
