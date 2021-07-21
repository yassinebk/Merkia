import React from 'react'
import logo from '../../assets/Property 1=Minimal.svg'
const Navbar = () => {
  const headerNav = ' text-base  font-sans  font-black '
  return (
    <div className="h-20 grid grid-cols-12 gap-x-1  mb-5 mx-0 py-0 px-0    ">
      <div className="col-start-1 col-end-4 ">
        <img className="w-20 h-16" src={logo} />
      </div>
      <div className="flex  col-start-4 col-end-13 mx-0  flex-wrap flex-row space-x-4 container items-center justify-items-start">
        <div className="flex flex-row space-x-4 ">
          <a className={headerNav}>Home</a>
          <a className={headerNav}>About</a>
        </div>
        <div className=" btn btn-primary-mb ">
          <p className="font-serif font-black text-base">More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform -rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Navbar
