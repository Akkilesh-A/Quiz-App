'use client'

import React from 'react'
import {ScoreIndicator} from "@repo/ui/scoreIndicator"
import { UseSelector, useSelector } from 'react-redux'

const ViewScore = () => {

  const answers = useSelector((state : any) => state.answer)
  const quiz = useSelector((state : any )=> state.quiz)

  let correct = 0;
  for(let i=0;i<quiz[0].questions.length;i++){
    if(answers[0]?.options[i]==quiz[0].questions[i].correctAnswer){
      correct+=1;
    }
  }

  return (
    <div>
        <h1 className='text-center font-bold text-[3rem]'>Your Score!</h1>
        <ScoreIndicator value={correct} maxValue={quiz[0].questions.length} />
    </div>
  )
}




export default ViewScore