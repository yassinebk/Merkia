import React from 'react'
import logo from '../assets/Property 1=Minimal.svg'
import Footer from './Basic/Footer'
import followerImage from '../assets/mdi_account-heart.png'
import heart from '../assets/mdi_cards-heart.png'
import articlesLogo from '../assets/mdi_newspaper-variant-multiple.png'
import likeLogo from '../assets/ant-design_like-outlined.png'
import commentLogo from '../assets/uil_comment.png'
import Container from './Basic/Atomic/Container'
import NavbarProfile from './Basic/NavbarProfile'
import Button from './Basic/Atomic/Button'
import CardProfileEdit from './Basic/Atomic/CardProfileEdit'

const Profile = () => {
  const card = 'flex flex-col items-center justify-start'
  const cardText = 'font-black md:text-3xl text-contrast text-2xl text-center lg:text-8xl font-sans mb-2'
  const cardText2 = 'md:text-3xl text-lg text-center lg:text-5xl p-2'
  const imgIcon = 'h-20 w-20 md:w-36 md:h-36 lg:w-48 lg:m-48'
  const cardFlex = 'flex flex-col justify-around items-center p-4'

  return (
        <Container className="bg-mb-landing">
            <NavbarProfile/>
            <div
                className=" shadow-blur grid  grid-rows-3  profile-bg w-auto h-auto p-4 align-center m-4 mt-32 lg:m-72 lg:p-16">
                <div className=" grid row-start-1 row-end-2 grid-cols-12 w-full p-16  ">
                    <div
                        className="rounded-lg col-start-1 col-end-4 h-auto items-center m-auto flex flex-col justify-start ">
                        <div
                            className="rounded-full w-auto  m-auto border-1 border-primary_100 shadow-2xl p-10 lg:p-12 ">
                            <img
                                src={logo}
                            />
                        </div>
                        <p className="text-center font-serif text-2xl font-bold mt-8 text-black md:text-5xl ">Username</p>
                    </div>
                    <Button variant="primary"
                            classes=" rounded-xl col-start-6 col-end-13   justify-evenly w-full self-center flex flex-row md:text-4xl lg:text-5xl md:font-black   ">
                        <p className="md:text-4xl lg:text-5xl md:font-black ">Profile Settings</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 md:h-16 md:w-16"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
                <div className="row-start-2 row-end-3 flex flex-row items-center justify-evenly profile-section p-2">
                    <div className={card}>
                        <img src={followerImage} className={imgIcon}/>
                        <p className={cardText}>40</p>
                        <p className={cardText2}>Followers</p>
                    </div>
                    <div className={card}>
                        <img src={heart} className={imgIcon}/>
                        <p className={cardText}>40</p>
                        <p className={cardText2}>Following</p>
                    </div>
                </div>
                <div
                    className={
                        ' row-start-3 row-end-4 flex flex-col justify-start items-start w-full  '
                    }
                >
                    <h1 className="text-2xl font-serif  mt-8  mb-6 md:bt-16 mb-12  md:text-5xl lg:text-7xl drop-shadow-md font-bold ml-10 "> Articles</h1>
                    <div
                        className="flex flex-row items-center justify-evenly space-x-8 profile-section p-4 w-full md:p-8">
                        <div className={card}>
                            <img src={articlesLogo} className={imgIcon}/>
                            <p className={cardText}>40</p>
                            <p className={cardText2}>Articles Number</p>
                        </div>

                        <div className={card}>
                            <img src={likeLogo} className={imgIcon}></img>
                            <div className={cardFlex}>
                                <p className={cardText}>40</p>
                                <p className={cardText2}>Likes</p>
                            </div>
                        </div>

                        <div className={card}>
                            <img src={commentLogo} className={imgIcon}></img>
                            <p className={cardText}>40</p>
                            <p className={cardText2}>Comments</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl m-12 md:text-4xl xl:text-5xl"> Recent Posted Profiles </h1>
            <div className="my-16 flex flex-col items-center justify-evenly space-y-8 md:space-y-16 w-screen">
                <CardProfileEdit/>
                <CardProfileEdit/>
                <CardProfileEdit/>
            </div>
            <Footer/>
        </Container>
  )
}

export default Profile
