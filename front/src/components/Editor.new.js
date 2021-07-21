import React from 'react'
import NavbarLogin from './Basic/NavbarLogin'
import closeButton from '../assets/ICON frame.png'
import Footer from './Basic/Footer'
import Container from './Basic/Atomic/Container'
import Input, { TextArea } from './Basic/Atomic/Input'
import Button from './Basic/Atomic/Button'

const Editor = () => {
  return (
    <Container >
      <NavbarLogin />
      <form className=" mt-24 sm:mt-32 md:mt-48 grid grid-rows-6 grid-cols-12 border-2 rounded-2xl border-secondary_200 m-2 p-2 items-center h-5/6 ">
        <Button variant="outlined" classes=" transition duration-200 col-start-11 col-end-13 row-start-1 row-end-2    transform hover:scale-110 bg-red-300 h-auto">
          <img src={closeButton} className="h-12 w-12" />
        </Button>

        <div className="  row-start-2 row-end-6 col-start-1 col-end-13 space-y-6 flex flex-col justify-evenly h-2/3 items-stretch align-start content-start ">
          <Input name="Title"
                 inputClass="w-full h-1/3"
                 labelClass="text-4xl mr-10 text-shadow "
                 containerClass="h-1/3"
          />
          <TextArea name="Body"
                    labelClass="text-3xl mb-2"
                    containerClass="h-2/3"
                    inputClass="w-full h-full text-2xl p-4"
          />
          </div>
          <div className="row-start-6 row-end-7 flex flex-row justify-evenly align-center col-start-1 col-end-13 w-full mt-2 md:mt-0 md:justify-start md:space-x-4 ">
            <Button variant="primary" text="Publish"/>
            <Button variant="secondary" text = "Save Draft"/>
          </div>
      </form>
    <Footer/>
    </Container>
  )
}

export default Editor
