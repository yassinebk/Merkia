import React from 'react'
import Navbar from './Basic/Navbar'
import hero from '../assets/christian-wiediger-70ku6P7kgmc-unsplash.jpg'
import robustImg from '../assets/FHnnjk1Yj7Y.png'
import minimalImg from '../assets/kML003ksO_0.png'
import friendsImg from '../assets/Desktop/e3OUQGT9bWU.png'
import Footer from './Basic/Footer'

const Landing = () => {
  //  const card = ' border-primray-300 md:bg-gradient-better  md:shadow-blur md:flex md:flex-col md:p-4 items-center md:border-3 space-x-4'
  return (
        <div className=" bg-mb-landing h-screen ">
            <Navbar/>
            <div className="p-0 my-8 flex flex-col  flex-nowrap items-start justify-start">
                <div
                    className="
          grid grid-rows-3 grid-cols-1  space-x-0 px-2  py-0 h-1/3 items-center w-screen h-64 "
                >
                    <div className=" row-start-1 row-end-2 space-y-8 w-screen px-2  ">

                        <img src={hero} className="py-4"/>
                    </div>
                    <div className="flex flex-col  align-center justify-start row-start-2 row-end-3 w-screen h-auto">
                        <h1 className="text-lg">
                            Welcome to <span className="text-primary_100"> Merkia !</span>
                        </h1>
                        <p className="text-base text-center">
                            Sharing you stories has never been easier
                        </p>
                    </div>
                    <div
                        className="flex flex-row justify-evenly row-start-3 row-end-4  w-screen">
                        <button
                            className="btn  btn-primary col-start-1 col-end-2 row-start-3 row-end-4 w-32 m-auto h-2/6">
                            Get Started
                        </button>
                        <button
                            className="btn btn-secondary-outlined col-start-2 col-end-3 row-start-3 row-end-4 m-auto w-32 h-2/6">
                            Find Out More
                        </button>
                    </div>
                </div>
                <div className="w-screen bg-light my-0 h-full mb-0">
                    <div
                        className=" flex flex-col content-center items-center p-0  w-screen h-auto space-y-2 md:space-y-8  ">
                        <div>
                            <h3 className=" md:hidden">We offer you a unique experience</h3>
                            <h3 className="text-center text-2xl hidden md:block">
                                Welcome let us tell you about some of <span
                                className="text-primary_100">Merkia</span> Features
                            </h3>
                            <ul className="list-disc md:flex md:flex-row  md:justify-evenly align-center md:list-none">
                                <li
                                    className={
                                        'text-left md:text-center text-base md:text-xl m-3   border-secondary_100 md:bg-gradient-better  \
                                        md:shadow-blur md:flex md:flex-col md:p-4 items-center md:border-3\
                                         md:space-y-8'
                                    }
                                >
                                    <img src={minimalImg} className="hidden md:inline-block"/>
                                    <h3>A minimalist Design</h3>
                                    <p> You will be amazed with our minimalist Design</p>
                                </li>
                                <li className="text-left text-base m-3">
                                    <img src={robustImg}/>
                                    <h3> A robust Writing Experience</h3>
                                    <p>
                                        A simple editor with an intuitive interface to meet all your needs
                                    </p>
                                </li>
                                <li className="text-left text-base m-3">
                                    <img src={friendsImg}></img>
                                    <h3>Chat With your friends Now !</h3>
                                    <p>
                                        Likes , Comments , Follow and send direct messages , spread love
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-light border-secondary_300 hover:border-2 border-secondary_100 my-4">
                            Read our Docs
                        </button>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Landing
