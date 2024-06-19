'use client'

import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAnswers, clearAnswers } from '../../store/answersSlice';
import { addQuizQuestions, clearQuestions } from "../../store/quizSlice"
import axios from 'axios'
import { useRouter , usePathname} from "next/navigation"

type QuestionsType ={ 
  question : string,
  options : string[];
  correctAnswer : string
}

const AttemptQuiz = () => {
  const router = useRouter()
  const [learnerAnswers,setLearnerAnswers] = useState<number[]>([])
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  const pathname = usePathname()
  const quiz= useSelector((state : any)=>state.quiz[0])

  let path = "India"

  if(pathname.slice(13) === "math"){
    path = "Basic Math"
  }

  useEffect(()=>{
    axios.get("https://6667f9c6f53957909ff5fe12.mockapi.io/api/v1/Quizzes")
    .then((response)=>{
      let variable=0;
      const quizzes = response.data[0].quiz
      console.log(quizzes)
      for(let i=0;i<quizzes?.length;i++){
        if(quizzes[i].quizName==path){
          dispatch(clearQuestions())
          dispatch(addQuizQuestions(quizzes[i]))
        }
      }
    })
    setTimeout(()=>{setLoading(false)},2000)
    
  },[dispatch, path])

  function submitQuiz(){
    const updatedQuizDetails = {quizName : quiz?.quizName, options : learnerAnswers}
    dispatch(clearAnswers(updatedQuizDetails))
    console.log(updatedQuizDetails)
    dispatch(addAnswers(updatedQuizDetails))  
    router.push("/viewscore")
  }

  return (
    <div className='px-16 '>
        <h1 className='text-center font-bold text-[3rem]'>Attempt Quiz</h1>
        <h2 className='text-center font-semibold text-[2rem]'>Quiz Title : {quiz?.quizName} </h2>
        <div className='pr-96'>
          {loading ? <div className='h-[50vh] flex items-center justify-center '><img src="/Animation.gif" /></div> : 
          quiz?.questions.map((question : QuestionsType,index : number)=>{
            return(
                <div className='bg-white border p-4 rounded shadow m-2' key={index}>
                    <h2 className='font-extrabold underline mb-4'>Question - {index+1}</h2>
                    <div className='px-4'>
                      <h1 className='font-semibold text-[1.3rem]'>{question.question}</h1>
                      <ul>
                          {question.options.map((option : string ,optionIndex :number)=>{
                              return(
                                  <li key={optionIndex} className='m-2 text-[1.2rem] flex items-center'>
                                      <input name = {`Question - ${index+1}`}
                                          onChange={(e)=>{
                                          const newLearnerAnswers : number[]= [...learnerAnswers];
                                          newLearnerAnswers[index] = optionIndex+1;
                                          setLearnerAnswers(newLearnerAnswers)

                                      }} type='radio' /><p>{optionIndex+1} : {option}</p>
                                  </li>
                              )
                          })}
                      </ul>
                    </div>
                </div>
            )
          })}
        </div>
        <div className='flex flex-col items-center bg-white fixed min-w-[20%] min-h-[50%] text-center border shadow-lg  p-4 rounded right-10 top-[20%]'>
            <h2 className='font-bold text-[1.75rem]'>Filled Responses</h2>
            <table >
              {
                learnerAnswers.map((response,index)=>{
                    return(
                        <tr key={index} className='m-2'>
                            <td className='border-2 p-2 border-black'>Question - {index+1} </td> <td className='border-2 p-2 border-black'>  {response ? `Option - ${response}` : `Not answered yet!`}</td>
                        </tr>
                    )
                })
              }
            </table>
        </div>
        <div className='flex justify-center'>
          <button className='bg-blue-500 px-4 py-2 text-[1.5rem] font-semibold border border-blue-800 rounded ' onClick={submitQuiz}>Submit</button>
        </div>
    </div>
  )
}

export default AttemptQuiz


