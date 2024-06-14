
function InfoBox({quizName, questions} : {quizName: string, questions: any}){
    return(
        <div className="mx-2 sticky top-30 flex-3 ">
            <div className="bg-[#9187b3] p-2 w-[20vw] rounded shadow ">
                <h1 className="font-bold text-[2em] m-2 text-center">Insights</h1>
                {quizName === "" ? <p className="text-center">Enter a quiz name to start</p> : 
                <div>
                    <p className="text-left flex flex-col md:flex-row "><span className="font-bold">Quiz:</span> {quizName}</p>
                    <p className="text-left "><span className="font-bold">Questions:</span> {questions}</p>
                </div>}
            </div>
        </div>
    )
}

export default InfoBox