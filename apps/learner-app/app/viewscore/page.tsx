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
      console.log(answers[0].options[i])
      console.log(quiz[0].questions[i].correctAnswer)
      correct+=1;
    }
  }

  return (
    <div>
        <h1>Score</h1>
        <ScoreIndicator value={correct} maxValue={quiz[0].questions.length} />
    </div>
  )
}




export default ViewScore