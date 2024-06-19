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
                    <li className='mx-4 font-semibold text-[1.2rem] rounded p-2 hover:text-white'>
                        <Link href="/viewquizzes">View All Quizzes</Link>
                    </li>
                    <li className='mx-4 font-semibold text-[1.2rem] rounded p-2 bg-blue-500 hover:bg-blue-500 shadow-lg hover:text-white'>
                        <a href="https://quiz-instructor-app.vercel.app/signin">Try Creating a Quiz?</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default NavBar