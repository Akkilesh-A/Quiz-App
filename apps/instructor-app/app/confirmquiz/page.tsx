"use client"

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuizNameBox from '@/components/QuizNameBox';

function Page(){
  const quizName= useSelector((state : any)=>state.quiz[0])

  return (
    <div>
        <QuizNameBox quizName={"Review Quiz: " + quizName.quizName}/>
        <div className='flex flex-wrap justify-center items-center'>
            {quizName.questions && quizName.questions.map((question : any, index : number)=>(
                <div key={index} className="mx-2 my-2 bg-[#fffbef]  p-8 rounded shadow">
                    <h3><span className='font-bold'>Question:</span>{question.question}</h3>
                    <div>
                      <h2><span className='font-bold'>Options:</span></h2>
                        {question.options.map((option : any, index : number)=>(
                            <div key={index}>
                                <p>{option}</p>
                            </div>
                        ))}
                    </div>
                    <p><span className='font-bold'>Correct Answer: </span>{question.correctAnswer}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Page