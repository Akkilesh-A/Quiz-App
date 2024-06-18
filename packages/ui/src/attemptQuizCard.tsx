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
        <hr />
        <div className='mt-4 flex justify-around'>
          <button onClick={()=>{router.push(`/attemptquiz/${quizlink}`)}} className='text-black bg-blue-400 p-2 rounded '>Attempt Quiz</button>
        </div>
      </div>
    )
  }