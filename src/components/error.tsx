import React from 'react'

export default function Error({error} : {error : any}) {
  return (
    <div className='flex text-lg gap-4 md:text-xl text-center flex-col items-center justify-center mt-24'>
        <div className='text-6xl '>
            😕
        </div>
      <h3 className='font-semibold '>{error?.title}</h3>
      <p className='text-base text-gray-400'>

      {error?.message}
      </p>
    </div>
  )
}
