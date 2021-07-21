import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Authenticate = (props) => {
  console.log(props)
  // eslint-disable-next-line react/prop-types
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!props.isAuth) history.push('/')
  }, [])

  return <props.Component {...props} />
}

const mapStateToProps = (state) => {
  return { isAuth: state.authUser.isAuth }
}

export default connect(mapStateToProps, null)(Authenticate)
