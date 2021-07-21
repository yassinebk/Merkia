import React from 'react'
import placeholder from '../../../assets/placeholder.png'
import Button from './Button'

// eslint-disable-next-line react/prop-types
const MainCardFeed = ({ title, description }) => {
  return (
       <div
       className="grid grid-cols-12 mx-4 mt-8 mb-2 p-2 space-x-4 border-secondary_100 border-1 h-auto bg-gradient-better  transform 2xl:scale-40 horzCardFeed ">
      <div className=" col-start-1 col-end-6  p-3 w-full h-full lg:col-end-9   ">
         <img src={placeholder} className="w-full h-full lg:w-full lg:m-auto md:h-auto imgFeed"/>
      </div>
      <div className="col-start-6 col-end-13 p-4 grid grid-rows-4 space-y-4 h-auto md:space-y-2 lg:col-start-9 horzCardFeed ">
         <div className="row-start-1 row-end-4 md:p-4 lg:row-end-3  ">
            <h1 className="text-secondary_100 font-bold  text-3xl mb-8 md:text-5xl">
                {title}
            </h1>
            <p className="text-lg font-normal text-2xl md:text-3xl">
                {description}
            </p>
         </div>
         <div className="flex flex-row space-x-2 row-start-4 row-end-5 justify-evenly lg:justify-start h-full lg:h-auto  ">
            <Button variant="secondary" text="Bookmark" classes="text-xl w-full h-auto md:h-20 md:p-2 max-w-xl" onClick={() => console.log('bookmark')}/>
            <Button variant="primary" text="Read" classes=" w-2/3 text-xl h-auto md:h-20 max-w-xl" Click={ () => console.log('adding a link under')} />
         </div>
      </div>
       </div>
  )
}

export default MainCardFeed
