"use client";

import React, { useState } from 'react'
import { Icons } from './icons'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const [word, setWord] = useState("");
    function handleKeyDown(e : React.KeyboardEvent<HTMLInputElement>){
    if(e.key === "Enter"){
      router.push(`/?word=${word}`)
      setWord("")
    }
    }
  return (
    <div className='flex mt-3 items-center gap-6 md:gap-10 w-full justify-between'>
        <Link href={`/`}>
       <Icons.dictionary/>
       <span className="sr-only">Dictionary</span>

        </Link>
       <div className="w-full">
        <input type='search'  placeholder='Search...'
        value={word}
        onKeyDown={handleKeyDown}
        onChange={e => setWord(e.target.value)}
        autoFocus
        className='py-3 text-sm rounded-md bg-gray-700  focus:ring-1 focus:shadow focus:shadow-sky-400 focus:ring-sky-600 px-3 w-full bg-transparent' />
        </div>    
     </div>
  )
}
