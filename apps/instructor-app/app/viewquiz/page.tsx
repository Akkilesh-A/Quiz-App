"use client"

import React,{useState,useEffect} from 'react'
import axios from 'axios'
type QuizDatabase={
  id:string,
  quizname:string,
  noOfQuestions:number
}

function Page(){
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
      {loading && <img src="/Animation.gif" />}
      <div className='grid-cols-4 grid'>
        {quiz.map((quiz)=><Card key={quiz.id} quizname={quiz.quizname} questions={quiz.noOfQuestions} />)} 
      </div>
    </div>
  )
}

function Card({quizname,questions}:{quizname:string,questions:number}){
  return(
    <div className='shadow-lg bg-[#fffbef] p-4 m-4 rounded '>
      <div className='text-[1.2rem] mb-2'>
        <p className='font-bold'>Quiz Name: {quizname}</p>
        <p>No.of Questions: {questions}</p>
      </div>
      <hr />
      <div className='mt-4 flex justify-around'>
        <button className='bg-[#cfc1ff] text-white p-2 rounded-lg'>View Quiz</button>
        <button className='bg-[#cfc1ff] text-white p-2 rounded-lg'>Edit Quiz</button>
      </div>
    </div>
  )
}
export default Page