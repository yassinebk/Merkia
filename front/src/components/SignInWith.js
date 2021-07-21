/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { SignInUser, toggleClose, toggleOpen } from '../redux/actions/actions'

const SignInWith = (props) => {
  const responseGoogle = (res) => {
    console.log('google login data', res)
    const postData = {
      name: res.profileObj.name,
      provider: 'google',
      email: res.Ys.It,
      provider_id: res.googleId,
      token: res.access_token,
      provider_pic: res.profileObj.imageUrl
    }
    props.SignInUser(postData)
    props.toggleClose()
  }
  return (
    <div>
      <div
        data-behavior="overlay"
        className={
          props.modalMode === true
            ? 'overlay overlay-hugeinc open'
            : 'overlay overlay-hugeinc'
        }
      >
        <button
          onClick={props.toggleClose}
          data-behavior="close-overlay"
          type="button"
          className="overlay-close"
        >
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <nav>
          <h2 className="grayed-heading center">Sign In</h2>
          <ul className="omniauth-button-group">
            <li className="omniauth-button google">
              <GoogleLogin
                className="button google"
                clientId="239838042837-vjhc57hg4tjqdpr5hn45cobimbcfkdhc.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <i className="fa fa-google"></i>
                <span> SignIn with Google</span>
              </GoogleLogin>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modalMode: state.common.modalMode
  }
}

const dispatchToProps = {
  SignInUser,
  toggleClose,
  toggleOpen
}

export default connect(mapStateToProps, dispatchToProps)(SignInWith)
