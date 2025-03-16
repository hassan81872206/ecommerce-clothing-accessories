import React from 'react'

function CardServices({title , description , icon}) {
  return (
    <div >
        <div className="card bg-base-100 max-w-96 shadow-xl">
        <div className="">
            <h2 className="p-2 flex items-center text-1xl font-bold font-serif bg-first">{icon}  <p className='ml-2'>{title}</p></h2>
            <p className='font-light py-5 px-4'>{description}</p>
        </div>
        </div>
    </div>
  )
}

export default CardServices