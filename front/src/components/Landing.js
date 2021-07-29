import React from 'react'
import Navbar from './Basic/Navbar'
import hero from '../assets/christian-wiediger-70ku6P7kgmc-unsplash.jpg'
import robustImg from '../assets/FHnnjk1Yj7Y.png'
import minimalImg from '../assets/kML003ksO_0.png'
import friendsImg from '../assets/Desktop/e3OUQGT9bWU.png'
import Footer from './Basic/Footer'
import Container from './Basic/Atomic/Container'
import Button from './Basic/Atomic/Button'
import Notification from './Notification.js'
import { Link } from 'react-router-dom'

const Landing = () => {
  const card = 'w-full mb-16 p-8 flex flex-col shadow-xl space-y-8 '
  const cardImages = 'w-full h-auto '
  const cardText = 'text-xl '
  const cardTitle = 'text-2xl font-bold'
  return (
    <Container className="  h-screen w-screen ">
      <Notification />
      <Navbar />
      <div className="   flex flex-col  flex-nowrap items-center justify-around mt-24 md:mt-48 px-2 w-full py-4  ">
        <div
          className={
            ' flex flex-col justify-center px-0 space-y-6 w-full profile-horizontalCard landing-max-dimension m-auto ' +
            ' md:space-y-16 ' +
            'lg:grid  lg:grid-cols-2   space-x-0   py-0 h-1/3 items-center   md:mb-32 '
          }
        >
          <div className="  lg:col-start-1 lg:col-end-2  px-2 h-2/6 w-full lg:w-auto  lg:m-auto  ">
            <img alt="hero-img" src={hero} className="py-8 w-full" />
          </div>

          <div className="flex flex-col   items-center justify-center lg:col-start-2 lg:col-end-3 w-full h-auto space-y-4 m-4 mr-48 lg:space-y-24">
            <h1 className=" text-5xl text-secondary_100 font-bold lg:text-7xl lg:text-left">
              Welcome to <span className="text-primary_100"> Merkia !</span>
            </h1>
            <p className=" lg:pl-4 text-3xl text-center text-seconday_100 font-semibold lg:text-left lg:text-5xl lg:font-normal">
              Sharing you stories has never been easier
            </p>
          </div>

          <div className="flex flex-row justify-evenly  w-full h-1/3 col-start-2 col-end-3 mt-0 lg:mr-48">
            <Button
              variant="primary"
              classes=" w-1/3 md:w-1/4 m-auto lg:w-1/3 "
            >
              <Link to="/register" className="w-full h-full">
                Get Started
              </Link>
            </Button>
            <Button
              variant="secondary"
              classes="  m-auto w-1/3 md:w-1/4 lg:w-1/3 "
            >
              <a href="github" className="w-full h-full">
                Find Out More
              </a>
              <Link to="/features" />
            </Button>
          </div>
        </div>
        <div className="w-screen bg-light my-0 h-full mb-0">
          <div className=" flex  flex-col content-center items-center p-8  w-screen h-auto space-y-2 md:space-y-8  ">
            <div>
              <h3 className=" md:hidden text-3xl">
                We offer you a <span className="text-primary_100">unique</span>{' '}
                experience
              </h3>
              <h3 className="text-center text-4xl hidden md:block">
                Welcome let us tell you about some of{' '}
                <span className="text-primary_100">Merkia</span> Features
              </h3>
              <ul className=" flex flex-col md:flex-row  md:justify-evenly align-center list-none md:space-x-10">
                <li className={card}>
                  <img alt="min-img" src={minimalImg} className={cardImages} />
                  <h3 className={cardTitle}>A minimalist Design</h3>
                  <p className={cardText}>
                    {' '}
                    You will be amazed with our minimalist Design
                  </p>
                </li>
                <li className={card}>
                  <img
                    alt="robust-img"
                    src={robustImg}
                    className={cardImages}
                  />
                  <h3 className={cardTitle}> A robust Writing Experience</h3>
                  <p className={cardText}>
                    A simple editor with an intuitive interface to meet all your
                    needs
                  </p>
                </li>
                <li className={card}>
                  <img
                    alt="friends-img"
                    src={friendsImg}
                    className={cardImages}
                  />
                  <h3 className={cardTitle}>Chat With your friends Now !</h3>
                  <p className={cardText}>
                    Likes , Comments , Follow and send direct messages , spread
                    love
                  </p>
                </li>
              </ul>
            </div>
            <a href="Docs">
              <Button
                variant="outlined"
                classes=" border-1 border-secondary_100 hover:border-2  my-4 h-24 text-3xl text-black mb-12 "
                text="Read our Docs"
              ></Button>
            </a>
            <Footer />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Landing
