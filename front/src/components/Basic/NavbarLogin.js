import React from 'react'
import logo from '../../assets/Property 1=Minimal.svg'
import Button from './Atomic/Button'

const NavbarLogin = () => {
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
                <Button variant="secondary" onClick={() => console.log('go to profile page')} text="My Profile"/>
            </div>
        </div>
  )
}

export default NavbarLogin
