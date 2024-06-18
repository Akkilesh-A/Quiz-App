"use client"

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ViewQuizCard } from '@repo/ui/viewQuizCard'
import { AttemptQuizCard } from '@repo/ui/attemptQuizCard'

type QuizDatabase={
  id:string,
  quizname:string,
  noOfQuestions:number
}

function ViewQuizzes(){
  const [quiz,setQuiz]=useState<QuizDatabase[]>([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    axios.get("https://6667f9c6f53957909ff5fe12.mockapi.io/api/v1/QuizDatabase")
    .then(async (res)=>{
      const data = await res.data
      setQuiz(data)
      setLoading(false)
    })
  },[])

  return (
    <div>
      <div><h1 className='font-bold text-[2.5rem] text-center'>Attend Quiz</h1></div>
      {loading && <div>Loading...</div>}
      <div className='grid-cols-4 grid gap-4' >
        <AttemptQuizCard quizname='India' questions={10} quizlink='/India' />
        <AttemptQuizCard quizname='Basic Math' questions={5} quizlink='/math' />
      </div>
      <div className='grid-cols-4 gap-4 grid'>
        {quiz.map((quiz)=><ViewQuizCard key={quiz.id} quizname={quiz.quizname} questions={quiz.noOfQuestions} buttonText1="View Score" buttonText2='Attempt Again'/>)} 
      </div>
    </div>
  )
}

export default ViewQuizzes