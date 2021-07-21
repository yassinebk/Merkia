import React from 'react'
import Navbar from './Basic/Navbar'
import Footer from './Basic/Footer.js'
import InputGroup from './Basic/InputGroup'
import googleLogo from '../assets/google-plus.png'

const RegForm = () => {
  return (
    <div className="page-container md:h-screen">
      <Navbar />
      <div className="border-2 border-fadedgray mx-2 p-2 h-auto rounded-lg   ">
        <h1 className="text-center font-black text-xl">
          Register Your Account{' '}
        </h1>
        <form className="h-full ">
          <InputGroup
            value="one"
            name="one"
            onChange={() => console.log('hi')}
          />
          <InputGroup
            value="one"
            name="one"
            onChange={() => console.log('hi')}
          />
          <InputGroup
            value="one"
            name="one"
            onChange={() => console.log('hi')}
          />
          <InputGroup
            value="one"
            name="one"
            onChange={() => console.log('hi')}
          />
          <div className="flex flex-row justify-evenly  my-8  space-x-2 h-14">
            <button className="btn btn-primary  w-3/6 "> Register </button>
            <button className="btn btn-secondary-outlined w-3/6   ">
              <p> With </p>
              <div className="flex-shrink-0 ml-2  ">
                <img src={googleLogo} className="h-6 w-6"></img>
              </div>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default RegForm
