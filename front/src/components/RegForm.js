import React from 'react'
import Navbar from './Basic/Navbar'
import googleLogo from '../assets/google-plus.png'
import Input from './Basic/Atomic/Input'
import Footer from './Basic/Footer'
import Container from './Basic/Atomic/Container'
import Button from './Basic/Atomic/Button'

const RegForm = () => {
  const containerClass = 'w-full h-1/4 p-4 flex flex-row justify-start space-x-7 items-center input-max-height'
  const labelClass = 'text-2xl w-1/6 font-bold md:text-3xl sm:pl-6 '
  const inputClass = 'h-full w-5/6 text-2xl pl-4'
  return (
    <Container className="h-screen">
      <Navbar />
      <div className="border-2 border-fadedgray mx-4 md:mx-8 p-2 md:px-6 h-5/6 rounded-lg mt-48 lg:mt-64  profile-horizontalCard lg:m-auto ">
        <h1 className="text-center font-black text-xl h-16 text-5xl lg:text-7xl   shadow-md my-12 ">
          Register Your Account{' '}
        </h1>
        <form className="h-5/6 flex flex-col items-center justify-around ">
          <Input
            value="one"
            name="Fullname"
            onChange={() => console.log('hi')}
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <Input
            value="one"
            name="Username"
            onChange={() => console.log('hi')}
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <Input
            value="one"
            name="Email"
            onChange={() => console.log('hi')}
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <Input
            value="one"
            name="password"
            onChange={() => console.log('hi')}
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <div className="flex flex-row justify-evenly md:justify-start my-8 px-6  w-full space-x-2 h-1/6">
            <Button variant="primary" classes="  w-3/6 md:w-1/4  h-full"> Register </Button>
            <Button variant="secondary" classes="w-3/6 h-full md:w-1/4 flex flex-row items-center justify-evenly" >
              <p className="text-2xl md:text-3xl lg:text-4xl"> With </p>
              <div className="flex-shrink-0 ml-2  ">
                <img src={googleLogo} className="h-8 w-8 md:h-16 md:w-16"></img>
              </div>
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </Container>
  )
}

export default RegForm
