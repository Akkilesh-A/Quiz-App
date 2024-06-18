"use client"

import React from 'react'
import { AttemptQuizCard } from '@repo/ui/attemptQuizCard'


function ViewQuizzes(){
  return (
    <div>
        <h1 className='text-center font-bold text-[3rem]'>All Quizzes</h1>
        <div className='grid-cols-4 grid gap-4' >
        <AttemptQuizCard quizname='India' questions={10} quizlink='/India' />
        <AttemptQuizCard quizname='Basic Math' questions={5} quizlink='/math' />
      </div>
    </div>
  )
}

export default ViewQuizzes