import { useEffect,useState } from "react";

function InfoBox({quizName, questions} : {quizName: string, questions: any}){

const [isScrolled, setIsScrolled] = useState(false);

    // function to handle scroll
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return(
        <div className={isScrolled?"mx-2 fixed top-4 flex-3 ":"mx-2 fixed top-30 flex-3 "}>
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