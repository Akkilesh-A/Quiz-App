"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div  className='px-16 py-4'>
      <div className="flex justify-between h-[80vh] items-center">
          <div className="flex m-4 flex-1 flex-col flex-wrap ">
            <h1 className='text-[7rem] font-extrabold text-center'>🎓iPropel</h1>
            <h1 className='text-[3rem] text-center font-bold'>Where Education meets Revolution</h1>
            <p className='text-[2rem] text-center '>Create a quiz or View quizzes</p>
          </div>
          <div className="bg-[#fffbef] flex-2 h-[60vh] flex items-center justify-center flex-col p-8 rounded shadow-lg">
              <button className="bg-[#cfc1ff] m-2 p-16 text-[3rem] hover:bg-[#9187b3] text-white font-bold py-2 px-4 rounded" onClick={()=>{router.push("/createquiz")}}>
                Create Quiz
              </button>
              <button className="bg-[#cfc1ff] m-2 p-16 text-[3rem] hover:bg-[#9187b3] text-white font-bold py-2 px-4 rounded" onClick={()=>{router.push("/viewquiz")}}>
                View Quizzes
              </button>
          </div>
      </div>
    </div>
  )
}
