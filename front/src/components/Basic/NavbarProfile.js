import React from 'react'
import logo from '../../assets/Property 1=Minimal.svg'
import Button from './Atomic/Button'

const NavbarProfile = () => {
  return (
        <div className="ei grid grid-cols-12 gap-x-4 mb-6 mx-0 py-0 px-0    ">
            <div className="col-start-1 col-end-4 ">
                <img className="w-full h-full sm:h-2/3 sm:m-auto" src={logo}/>
            </div>
            <div
                className="flex  col-start-4 col-end-13 mx-0  flex-wrap flex-row space-x-4 container items-center justify-around">
                <div className="flex flex-row space-x-16 justify-evenly ">
                    <Button variant="boldText" onClick={() => console.log('hello')} text="Home"/>
                    <Button variant="boldText" onClick={() => console.log('roger')} text="About"/>
                </div>
                <Button variant="secondary" onClick={() => console.log('go to profile page')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                </Button>
            </div>
        </div>
  )
}

export default NavbarProfile
