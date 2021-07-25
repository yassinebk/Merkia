import Button from './Button'
import React from 'react'
import { Link } from 'react-router-dom'
import{bookmark} from "../../../redux/actions/actions"
import {connect} from "react-redux"

const ShadowedCardArticle = ({article}) => {
   
    if (!article) return null;
  return (
<div>
    <div
        className="bg-gradient-better mx-2 h-16 border-1 rounded-sm border-secondary-100 flex flex-row items-center justify-between p-4 md:p-6 md:h-full">
        {/* eslint-disable-next-line react/prop-types */}
        <p className="text-2xl font-black text-left w-5/6 px-2 md:text-3xl  lg:text-4xl "> {article ? article.title : null} </p>
                  <Link to={`/article/${article._id}`} style={{ height: "fit-content", width: "fit-content" }}>
        <div className="grid grid-cols-1 w-full h-full ">


            <Button variant="primary" classes=" flex flex-row space-x-4  md:w-auto h-full py-2 justify-self-end ml-8 md:text-4xl w-full ">
                <p className="md:text-3xl">Read</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary_300 "
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
</Link>
    </div>
</div>
  )
}

export default (ShadowedCardArticle)
