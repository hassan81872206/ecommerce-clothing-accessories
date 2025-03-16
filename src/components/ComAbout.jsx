import React from 'react'

function ComAbout({number , title , description}) {
  return (
    <div className='flex flex-col gap-1 my-9'>
        <div className='flex gap-2'>
            <div className='bg-gray-400 px-1 rounded-md flex justify-center items-center'>{number}</div>
            <h3 className="font-bold font-serif">{title}</h3>
        </div>
        <div>
            <p className='pl-4 tracking-wide'>{description}</p>
        </div>
    </div>
  )
}

export default ComAbout