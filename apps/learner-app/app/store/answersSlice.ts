import {createSlice} from '@reduxjs/toolkit';

const initialState :any = [
]

const answersSlice = createSlice({
    name : 'currentAnswers',
    initialState : initialState ,
    reducers : {
        addAnswers(state,action){
            state.push(action.payload)
        },
        clearAnswers(state,action){
            state.splice(0)
        }
    }

})

export const {addAnswers, clearAnswers} = answersSlice.actions
export default answersSlice