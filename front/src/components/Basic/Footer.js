import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerMainItems =
      ' md:text-3xl ' +
    'text-base text-normal font-serif text-center underline ' +
    'text-secondary_100  transform  hover:scale-10 ' +
    'hover:no-underline hover:text-primary_100 hover:text-black transition duration-100 '
  return (
    <div className=" flex flex-row align-center justify-evenly space-x-3 p-3 mt-12  w-screen border-t-2 border-secondary-100">
      <Link className={footerMainItems} to="/supportHub">Support </Link>
      <Link className={footerMainItems} to="/feedback">Feedback </Link>
      <p className="text-xs text-secondary_300 text-right hover:text-primary_200 md:text-xl">
        All Rights Reserved &copy; 2021
      </p>
    </div>
  )
}

export default Footer
