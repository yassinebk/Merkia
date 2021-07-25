import React from 'react'
import logo from '../../assets/Property 1=Minimal.svg'
import Button from './Atomic/Button'
import { Link } from 'react-router-dom'
import {useLocation} from "react-router"

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
const activated = `text-primary_100 shadow-sm ` 
  return (
    <div className="ei grid grid-cols-12 gap-x-4 mb-6 mx-0 py-0 px-0 h-1/6 md:py-4  navbar-max-height items-center   ">
      <Link to="/"className="col-start-1 col-end-4 hover:opacity-60 hover:border-2 border-primary_300  ">
        <img
          className="w-full h-full sm:h-2/3 sm:m-auto lg:h-3/6 lg:w-3/6"
          src={logo}
    alt="logo-icon"
        />
      </Link>

      <div className="flex  col-start-4 col-end-13 mx-0  flex-wrap flex-row space-x-4 container items-center justify-around">
        <div className="flex flex-row space-x-16 justify-evenly md:w-2/3 items-center ">

          <Link to="/" style={{ width: "fit-content", height: "fit-content" }}>
          <Button 
    Disabled={location.pathname===``}
            variant="boldText"
            classes={`lg:text-6xl   ${location.pathname==='/'?activated:''}`}
            text="Home"
          >
    </Button>
    </Link>
          <Link disabled to="/about" style={{ width:"fit-content", height: "fit-content" }}>
            <Button
            variant="boldText"
            
            classes={`lg:text-6xl   ${location.pathname==='/about'?activated:''}`}
    Disabled={location.pathname===`/about`}
            text="About"
          >
    
    </Button>
</Link>

          <Button

    Disabled={location.pathname===`/Login`}
            variant="boldText" classes="hidden lg:block lg:text-6xl">
          <Link className="text-center" to="/Login">
            Login
          </Link>
        </Button>

        <Button
          classes=" hidden lg:block lg:p-16 lg:text-6xl"
          variant="boldText"
        >
          <a
            className="text-center w-full flex flex-row justify-evenly"
            href="https://github.com/yassinebk/Merkia"
          >
            <p className="text-5xl">Github</p>
            <img alt="gitub-icon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
          </a>
        </Button>

        <Button variant="primary" classes="lg:hidden">
          <div class="dropdown ">
            <div
              tabIndex="0"
              class="flex flex-row flex-nowrap justify-evenly space-x-4 0 "
            >
              <p className="w-3/6 text-3xl  px-4 sm:w-1/4 md:text-3xl lg:text-5xl m-1 flex flex-col self-center font-serif font-black text-primary_300">
                More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform -rotate-90 md:h-16 md:w-16 flex-nowrap"
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
            <ul class="shadow menu dropdown-content bg-bg rounded-box w-full text-secondary_100 text-4xl font-normal items-center ">
              <li className="p-4 focus:bg-primary_300 shadow w-full">
                <a href="https://www.facebook.com/yassine.belkhadem/">Contact</a>
              </li>
              <li className="p-4 focus:bg-primary_300 shadow w-full ">
                <Link className="text-center" to="/login" >
                  Login
                </Link>
              </li>
              <li className="p-4 focus:bg-primary_300 shadow w-full text-center">
                <a
                  className="text-center w-full flex flex-row justify-evenly"
                  href="https://github.com/yassinebk/Merkia"
                >
                  <p className="text-3xl">Gituhb</p>
                  <img alt="github-icon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
                </a>
              </li>
            </ul>
          </div>
        </Button>

        </div>
     
      </div>
    </div>
  )
}

export default Navbar
