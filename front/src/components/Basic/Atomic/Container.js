import React from 'react'

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  const className = 'page-container font-serif '
  return (
        <div className={className}>{children}</div>
  )
}

export default Container
