"use client"

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuizNameBox from '@/components/QuizNameBox';

function Page(){
  const quiz= useSelector((state : any)=>state.quiz[0])

  const quiztree = {
    quiz: [
      {
        quizName: 'sdcvdsfsd',
        questions: [
          {
            question: '2',
            options: [
              'dfdsfsdd',
              'fsdf'
            ],
            correctAnswer: 'sdfsdfsdf'
          },
          {
            question: '2',
            options: [
              'dfdsfsdd',
              'fsdf'
            ],
            correctAnswer: 'sdfsdfsdf'
          }
        ]
      }
    ]
  }

  return (
    <div>
        <QuizNameBox quizName={"Review Quiz: " + quiz?.quizName}/>
        <div className='flex flex-wrap justify-center items-center'>
            {quiz?.questions && quiz?.questions.map((question : any, index : number)=>(
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