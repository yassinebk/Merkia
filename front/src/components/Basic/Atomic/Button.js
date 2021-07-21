import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({ children, type, variant, classes, onClick, text }) => {
  const transformScale = ' transform hover:scale-90'
  const responsiveness = ' text-xl p-4 sm:text-2xl md:p-6 md:text-3xl'
  const variants = {
    primary: 'text-primary_300 bg-secondary_100  rounded-lg font-semibold ' + transformScale + responsiveness,
    secondary: 'bg-bg text-secondary_200 border-2  font-bold  rounded-lg border-secondary_300   hover:opacity-80 ' + transformScale + responsiveness,
    outlined: 'bg-bg text-secondary_300 hover:text-secondary_300  ' + transformScale + responsiveness,
    boldText: ' text-2xl  font-sans  font-black  onHover: hover:font-normal ' +
        'hover:text-secondary_300 hover:underline text-secondary_100 sm:text-2xl md:text-4xl  ' + transformScale
  }
  return (
        <button className={variants[variant] + ' ' + classes +
            ' transition duration-200'
        } onClick={onClick} type={type}>
            {text}
            {children}
        </button>
  )
}

export default Button
