function QuizNameBox({quizName} : {quizName: string}){
    return(
        <div className="m-2 bg-[#b3a885] p-4 flex-1 w-auto rounded shadow ">
            <h1 className="font-bold text-[2rem] text-center">{quizName}</h1>
        </div>
    )
}

export default QuizNameBox