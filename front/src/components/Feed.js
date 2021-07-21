import React from 'react'
import Footer from './Basic/Footer'
import NavbarLogin from './Basic/NavbarLogin'
import { Link } from 'react-router-dom'
import Container from './Basic/Atomic/Container'
import Button from './Basic/Atomic/Button'
import MainCardFeed from './Basic/Atomic/MainCardFeed'
import ShadowedCardArticle from './Basic/Atomic/ShadowedCardArticle'

const Feed = () => {
  const whiteCard = 'transition duration-500 transform hover:opacity-90 hover:scale-90 hover:text-primary_100 flex flex-col content-center items-center text-center bg-light newshadow text-secondary_200 text-3xl md:text-2xl  border-1 rounded-lg p-2 max-w-2xl m-3 w-auto h-auto'
  return (
        <Container>
            <NavbarLogin/>
            <div className="text-4xl font-serif mt-24 px-8 sm:px-16 md:mt-36 xl:mt-48 2xl:met-64  ">
                <h1 className=" font-serif font-bold p-2">
                    Welcome Again
                    <span className="text-primary_100 font-black"> username</span>
                </h1>
            </div>
            <div className="h-auto">
                <div className="flex flex-col items-center justify-evenly ">
                    <MainCardFeed/>
                </div>
                    <div>
                                <Button variant="primary" classes=" hover:text-primary_100 hover:no-underline bg-fadedgray text-primary_300 space-x-4 flex flex-row justify-end align-center   h-auto w-auto text-2xl ml-66 mb-16 mt-8">
                                    <Link>
                                    More Articles
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-full w-16 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                                </Button>
                    </div>
                </div>

            <div className="grid grid-cols-2 p-2 border-fadedgray border-1 p-4 gap-x-4  rounded-lg border-1 mx-3 mb-8">
                    <Button variant="primary" classes=" w-full col-start-1 col-end-2 m-auto h-full" text="Check Profile">
                    </Button>
                    <Button variant="secondary" classes="w-full col-start-2 col-end-3 m-auto" text="Check Bookmarks" >
                    </Button>
            </div>
            <div className="w-full  my-4 px-2">
                <h1 className="col-start-1 col-end-3 font-normal font-serif text-3xl mb-4 text-shadow ">
                    Read Recently
                </h1>
                <div className="grid grid-cols-2  ">
                    { new Array(9).fill(0).map((el, index) => {
                      return (<div key={index} className={whiteCard + ' whiteCardFeed'}>
                        <Link className="hover:no-underline">First Article</Link>
                    </div>)
                    }) }

                </div>
            </div>
            <div className="w-full p-4 my-4">
                <h1 className="text-shadow font-normal font-serif text-3xl mb-4 ">
                    New Articles
                </h1>
                <ShadowedCardArticle/>

            </div>
            <Footer/>
        </Container>
  )
}

export default Feed
