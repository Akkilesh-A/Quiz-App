"use client";

import { ReactNode } from "react";

export function ViewQuizCard({quizname,questions,buttonText1, buttonText2}:{quizname:string,questions:number,buttonText1: string,buttonText2: string}){
    return(
      <div className='shadow-lg p-4 m-4 rounded '>
        <div className='text-[1.2rem] mb-2'>
          <p className='font-bold'>Quiz Name: {quizname}</p>
          <p>No.of Questions: {questions}</p>
        </div>
        <hr />
        <div className='mt-4 flex justify-around'>
          <button className='text-black bg-blue-400 p-2 rounded-lg'>{buttonText1}</button>
          <button className='bg-blue-500 text-white p-2 rounded-lg'>{buttonText2}</button>
        </div>
      </div>
    )
  }