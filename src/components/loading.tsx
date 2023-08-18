import React from 'react'
import { Icons } from './icons'

export default function Loading() {
  return (
    <div className='flex items-center animate-pulse justify-center min-h-[calc(100vh-20rem)]'>
      <Icons.spinner />
    </div>
  )
}
