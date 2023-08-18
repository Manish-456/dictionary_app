import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'

export default function SourceUrls({dist} : any) {
  return (
     
    <div className="mt-4">
    <div className="h-[0.5px] w-full bg-gray-400" />
     <div className="mt-3">
      <h1 className="my-2">Source</h1>
      {
        dist.sourceUrls.map((source : any) => (
          <Link href={`${source}`} className="my-2 flex gap-2 items-center text-gray-50 hover:underline" target="_blank" key={source}><Icons.link /> {source} </Link>
        ))
      }
     </div>
  </div>
  )
}
