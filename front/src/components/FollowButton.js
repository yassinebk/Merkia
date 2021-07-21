/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { follow, toggleOpen } from '../redux/actions/actions'

const FollowButton = (props) => {
  const followUser = () => {
    if (Object.keys(props._user).length > 0) {
      if (props._user._id !== props.to_follow) {
        if (props.user.indexOf(props.to_follow) === -1) {
          props.follow(props._user._id, props.to_follow)
        }
      }
    } else {
      props.toggleOpen()
    }
  }
  const following = props.user
  const f = following.indexOf(props.to_follow)
  return (
    <div>
      <div>
        <div onClick={followUser} data-reactroot="">
          <a
            className={
              f === -1
                ? 'button green-border-button follow-button'
                : 'button green-inner-button follow-button'
            }
            href="javascript:void(0);"
          >
            {f === -1 ? 'Follow' : 'Following'}
          </a>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    _user: state.authUser.user
  }
}

const dispatchStateToProps = {
  follow,
  toggleOpen
}
export default connect(mapStateToProps, dispatchStateToProps)(FollowButton)
