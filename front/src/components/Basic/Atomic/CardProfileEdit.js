import React from 'react'
import Button from './Button'

const CardProfileEdit = () => {
  const horizontalCard = ' bg-gradient-better border-1 border-secondary_100 flex flex-row justify-between items-center drop-shadow-md text-2xl  w-full px-8 h-36'
  const horizontalCardText = 'text-2xl font-bold text-left px-4 md:text-3xl lg:text-4xl xl:font-bold '
  const horizontalCardButton = 'btn btn-primary text-primary_300'

  return (
            <div className={horizontalCard + ' profile-horizontalCard'}>
                <p className={horizontalCardText}>One way to hell</p>
                <Button variant="primary" classes="flex flex-row justify-evenly space-x-4 space-x-10 w-1/4" className={horizontalCardButton}>
                    <p className="text-primary_200 text-xl md:text-2xl lg:text-3xl xl:font-bold">Edit</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:h-12 lg:w-12 text-primary_200" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </Button>
            </div>
  )
}

export default CardProfileEdit
