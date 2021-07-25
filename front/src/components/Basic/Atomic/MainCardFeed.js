import React from 'react'
import Button from './Button'
import { Link } from "react-router-dom"
import {connect} from"react-redux"
import {bookmark} from"../../../redux/actions/actions"

// eslint-disable-next-line react/prop-types
const MainCardFeed = (props) => {
   //console.log(props)
   const checkBookmark = () => {
    //console.log(props.user?.bookmarks?.includes(props.article?._id))
    if (props.user?.bookmarks?.includes(props.article?._id))
      return `removeBookmark`
    else return `bookmark`
  }
    const toggleBookmark = (event) => {
        event.preventDefault()
        props.bookmark(checkBookmark(), props.user._id, props.article._id)
  
    }
   //console.log(props.article)
   if (!props.article) return null;
  return (
       <div
       className="grid grid-cols-12 mx-4 mt-8 mb-2 p-2 space-x-4 border-secondary_100 border-1 h-auto bg-gradient-better  transform  horzCardFeed w-auto lg:p-8  ">
      <div className=" col-start-1 col-end-6    m-auto sm:w-full sm:h-full lg:col-end-7 flex flex-col items-center justify-center   ">
           <img src={props.article?.feature_img} className="w-full h-full lg:w-full lg:m-auto  lg:h-full  imgFeed" alt="article-img"/>
      </div>
      <div className="col-start-6 col-end-13 p-8 grid grid-rows-4 space-y-4 h-auto md:space-y-2 lg:col-start-7 horzCardFeed ">
         <div className="row-start-1 row-end-4 md:p-4 lg:row-end-3  ">
            <h1 className="truncate text-secondary_100 font-bold  text-3xl mb-8 md:text-5xl">
                {props.article.title}
            </h1>
            <p className=" truncate text-lg font-normal md:text-3xl">
                {props.article.description}
            </p>
         </div>
         <div className="flex flex-row space-x-2 row-start-4 row-end-5 justify-evenly lg:justify-start h-full lg:h-auto  ">
              <Button variant="secondary" text={checkBookmark()==="bookmark"?"Bookmark":"un-Bookmark"} classes="text-xl w-full h-auto md:h-20 md:p-2 max-w-xl" onClick={toggleBookmark}/>
            <Link to={`/article/${props.article._id}`} className="w-2/3  h-auto md:h-20 max-w-xl"><Button variant="primary" text="Read" classes="h-full text-xl"  /></Link> 
         </div>
      </div>
       </div>
  )
}

export default connect(null,{bookmark})(MainCardFeed)
