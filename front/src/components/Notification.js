import React from 'react'
import { connect } from 'react-redux'

const Type = ({ type }) => {
  switch (type) {
    case 'warning':
      return (
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        ></path>
      )
    case 'error':
      return (
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        ></path>
      )
    case 'success':
      return (
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        ></path>
      )
    default:
      return (
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      )
  }
}

const Notification = (props) => {
  console.log('notification', props.notification)
  if (props.notification.message === '') return null
  return (
    <div
      className={`alert alert-${props.notification.type}  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 link-fit p-8 shadow-xl blur-xl bg-opacity-40 `}
    >
      <div className="flex-1 link-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-6 h-6 md:w-12 md:h-12 lg:h-16 lg:w-16 mx-2 stroke-current"
        >
          <Type type={props.notification.type} />
        </svg>
        <label className="text-3xl font-sans md:text-5xl lg:text-6xl">
          {props.notification.message}
        </label>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

export default connect(mapStateToProps, null)(Notification)
