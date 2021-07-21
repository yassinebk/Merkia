import React from 'react'
import logo from '../../assets/Property 1=Minimal.svg'
import Button from './Atomic/Button'

const Navbar = () => {
  return (
      <div className="ei grid grid-cols-12 gap-x-4 mb-6 mx-0 py-0 px-0 h-1/6 md:py-4  navbar-max-height items-center   ">
        <div className="col-start-1 col-end-4 ">
          <img className="w-full h-full sm:h-2/3 sm:m-auto lg:h-3/6 lg:w-3/6" src={logo}/>
        </div>
        <div
            className="flex  col-start-4 col-end-13 mx-0  flex-wrap flex-row space-x-4 container items-center justify-around">
          <div className="flex flex-row space-x-16 justify-evenly md:w-2/3 ">
            <Button variant="boldText" classes="lg:text-6xl" onClick={() => console.log('hello')} text="Home"/>
            <Button variant="boldText" classes="lg:text-6xl" onClick={() => console.log('roger')} text="About"/>
          </div>
          <Button variant="primary" classes="flex flex-row justify-evenly space-x-4 text-3xl p-4 px-4 w-1/4 md:text-4xl lg:text-5xl" onClick={() => console.log('go to profile page')}>
              <p className="font-serif font-black text-2xl md:text-3xl lg:text-5xl ">More</p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform -rotate-90 md:h-16 md:w-16"
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
          </Button>
        </div>
      </div>
  )
}

export default Navbar
