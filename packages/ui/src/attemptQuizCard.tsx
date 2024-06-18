"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation"
export function AttemptQuizCard({quizname,questions,quizlink}:{quizname:string,questions:number,quizlink:string}){
    
    const router = useRouter()
    
    return(
      <div className='shadow-lg p-4 m-4 rounded '>
        <div className='text-[1.2rem] mb-2'>
          <p className='font-bold'>Quiz Name: {quizname}</p>
          <p>No.of Questions: {questions}</p>
        </div>
        <div className='m-4 flex justify-center'>
          <button onClick={()=>{router.push(`/attemptquiz/${quizlink}`)}} className='bg-blue-500 p-2 rounded m-4 text-center'>Attempt Quiz</button>
        </div>
      </div>
    )
  }