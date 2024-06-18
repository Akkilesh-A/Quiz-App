import {createSlice} from '@reduxjs/toolkit';

const initialState :any = []

const quizSlice = createSlice({
    name : 'currentQuiz',
    initialState : initialState ,
    reducers : {
        addQuizQuestions(state,action){
            state.push(action.payload)
        }
    }

})

export const {addQuizQuestions} = quizSlice.actions
export default quizSlice