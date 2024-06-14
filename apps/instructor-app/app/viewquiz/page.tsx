"use client"

import React,{useState,useEffect} from 'react'
import axios from 'axios'
type QuizDatabase={
  id:string,
  quizname:string,
  noOfQuestions:number
}

function page(){
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
      <div><h1 className='font-bold text-[2.5rem] text-center'>Quizzes Created By You!</h1></div>
      {loading && <div>Loading...</div>}
      <div className='grid-cols-4 grid'>
        {quiz.map((quiz)=><Card key={quiz.id} quizname={quiz.quizname} questions={quiz.noOfQuestions} />)} 
      </div>
    </div>
  )
}

function Card({quizname,questions}:{quizname:string,questions:number}){
  return(
    <div className='shadow-lg bg-white p-4 m-4 rounded '>
      <div>
        <p className='font-bold'>Quiz Name: {quizname}</p>
        <p>No.of Questions: {questions}</p>
      </div>
      
    </div>
  )
}
export default page