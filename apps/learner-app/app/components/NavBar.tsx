"use client"

import React,{useState} from 'react'
import Link from 'next/link'

function NavBar(){
  return (
    <div>      
        <nav className='text-black px-8 h-[10vh] bg-[#f8c93da3] flex items-center justify-between'>
            <Link href="/" className='font-extrabold text-[2.5rem]'>🎓 iPropel<span className='font-semibold text-[1.5rem]'> Learner</span></Link>
            <div className='flex items-center'>
                <ul className='flex mr-4'>
                    <li className='mx-4 font-semibold text-[1.2rem] hover:text-blue-400'>
                        <Link href="/viewquizzes">View Quizzes</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default NavBar