import {createSlice} from '@reduxjs/toolkit';

const initialState :any = [
  {
    quizName: 'lol',
    questions: [
      {
        question: 'fgghfgh',
        options: [
          'scsdfdfsd',
          'sdfdsf'
        ],
        correctAnswer: 'dxssdf'
      }
    ]
  }
]

const currentQuizSlice = createSlice({
    name : 'currentQuiz',
    initialState : initialState ,
    reducers : {
        addQuiz(state, action){
            state.push(action.payload)
        },
        removeQuiz(state, action){
            state.pop()
        }
    }

})

export const {addQuiz, removeQuiz} = currentQuizSlice.actions
export default currentQuizSlice