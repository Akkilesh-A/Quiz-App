import {createSlice} from '@reduxjs/toolkit';

const initialState :any = []

const quizSlice = createSlice({
    name : 'currentQuiz',
    initialState : initialState ,
    reducers : {
        addQuizQuestions(state,action){
            state.push(action.payload)
        },
        clearQuestions(state){
            state.splice(0)
        }
    }

})

export const {addQuizQuestions,clearQuestions} = quizSlice.actions
export default quizSlice