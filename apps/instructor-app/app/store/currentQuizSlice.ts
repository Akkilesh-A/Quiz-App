import {createSlice} from '@reduxjs/toolkit';

const initialState :any = [
  // {
  //   quizName: 'lol',
  //   questions: [
  //     {
  //       question: 'fgghfgh',
  //       options: [
  //         'scsdfdfsd',
  //         'sdfdsf'
  //       ],
  //       correctAnswer: 'dxssdf'
  //     },
  //     {
  //       question: '2',
  //       options: [
  //         '2',
  //         '2'
  //       ],
  //       correctAnswer: '2'
  //     }
  //   ]
  // }
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