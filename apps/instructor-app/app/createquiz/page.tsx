"use client"

import { useState } from "react"
import InfoBox from "@/components/InfoBox"
import Link from 'next/link'
import { useDispatch } from "react-redux"
import { addQuiz } from "../store/currentQuizSlice"
import { useRouter } from "next/navigation"
import QuizNameBox from "@/components/QuizNameBox"

type QuestionsType =[
    {
        question: string,
        options: string[],
        correctAnswer: string
    }
]

const emptyQuestion={question:"",options:[],correctAnswer:""}



function Page(){
    const [questions,setQuestions] =useState<QuestionsType>([emptyQuestion])
    const [options, setOptions] = useState([])
    const [quizName,setQuizName] = useState("Quiz Title")
    const [quizNameSet,setQuizNameSet] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()

    function confirmQuiz(){
      const quizObject = {quizName,questions}
      dispatch(addQuiz(quizObject))
      router.push("/confirmquiz")
    }

  return (
    <div className="flex flex-col">
        <div className="flex">
            <InfoBox quizName={quizName} questions={questions.length}/>
            <div className="flex-1 ">
                {quizNameSet ?
                    <div className="flex flex-col">
                        <QuizNameBox quizName={quizName}/>
                        <QuestionBox setQuestions={setQuestions} questions={questions} options={options} setOptions={setOptions} />
                        <div className="flex justify-end ">
                            <AddQuestion questions={questions} setQuestions={setQuestions} />  
                            <RemoveQuestion questions={questions} setQuestions={setQuestions} />  
                        </div>
                        <div className="flex justify-center">
                            <div className="m-2 p-2 text-center flex font-semibold text-[1.3rem] bg-[#CFC1FF]  rounded shadow ">
                                <button onClick={confirmQuiz} >Confirm Quiz</button>
                            </div>
                        </div>
                       
                    </div> 
                    :                     
                <CreateBox setQuizName={setQuizName} setQuizNameSet={setQuizNameSet} setQuestions={setQuestions}/>} 
            </div>
        </div>
    </div>
  )
}


function CreateBox({ setQuizName , setQuizNameSet, setQuestions} : {setQuizName: any, setQuizNameSet: any, setQuestions: any}){
    return(
        <div className="m-2 bg-[#b3a885] p-4 flex-1 flex rounded shadow justify-center">
            <input type="text" placeholder="Quiz Name" className="p-2 mx-3 border rounded" onChange={(e)=>setQuizName(e.target.value)} />
            <button className="border bg-[#CFC1FF] rounded p-2" onClick={()=>{setQuizNameSet(true);  setQuestions([emptyQuestion])}}>Create a quiz</button>
        </div>
    )
}


function QuestionBox({questions,setQuestions,options,setOptions,}: {questions: QuestionsType;setQuestions: any;options: number[];setOptions: any;}) {
    return (
      <div>
        {questions.map((question, index) => (
          <div key={index} className="mx-2 my-2 bg-[#fffbef]  p-8 flex-1 w-auto rounded shadow">
            <h3 className="font-semibold text-[1.3rem] mb-2">Question-{index + 1}</h3>
            <div>
              <input type="text" placeholder="Question" className="mb-2 w-full p-2 border rounded" 
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].question = e.target.value;
                  setQuestions(newQuestions);
                }}
              />
              <div>
                <input
                  type="number"
                  onChange={(e) => {const newOptions = [...options];newOptions[index] = parseInt(e.target.value);setOptions(newOptions);}}
                  placeholder="No. of Options"
                  className="p-2 border rounded"
                />
                <OptionBox setQuestions={setQuestions} questions={questions} options={options} numberOfOptions={options[index]} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

function OptionBox({
    options,
    questions,
    setQuestions,
    numberOfOptions,
  }: {
    options: number[];
    questions: QuestionsType;
    setQuestions: any;
    numberOfOptions: number;
  }) {
    return (
      <div className="flex flex-wrap my-2">
        {Array.from({ length: numberOfOptions }, (_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            className=" p-2 my-2 mr-2 border rounded"
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[newQuestions.length - 1].options[index] = e.target.value;
              setQuestions(newQuestions);
            }}
          />
        ))}
        <input
            // key={index}
            type="text"
            placeholder={`Correct Option Number`}
            className=" p-2 my-2 mr-2 border rounded"
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[newQuestions.length - 1].correctAnswer = e.target.value;
              setQuestions(newQuestions);
            }}
        />
      </div>
    );
  }


function AddQuestion({setQuestions,questions} : {setQuestions: any,questions: QuestionsType}){
    return(
        <div className="m-2 px-2 bg-[#CFC1FF] text-center rounded shadow ">
            <button onClick={()=>setQuestions([...questions,emptyQuestion])} className="flex items-center justify-center p-2"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></button>
        </div>
    )
}


function RemoveQuestion({setQuestions,questions} : {setQuestions: any,questions: QuestionsType}){
    return(
        <div className="m-2 px-2 bg-[#CFC1FF] text-center rounded shadow ">
            <button onClick={()=>setQuestions([...questions.splice(0,questions.length-1)])} className="flex items-center justify-center p-2"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg></button>
        </div>
    )
}


export default Page