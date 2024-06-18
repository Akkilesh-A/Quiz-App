"use client"
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  return (
    <div  className='flex justify-center items-center h-[90vh]'>
      <div className=" rounded-xl shadow-lg flex justify-between h-[80vh] items-center">
          <div className="flex m-4 flex-1 flex-col flex-wrap ">
            <h1 className='text-[7rem] font-extrabold pl-[7rem]'>🎓iPropel</h1>
            <h1 className='text-[2rem] text-center font-bold'>Where Education meets Revolution</h1>
            <p className='text-[1.5rem] text-center '>Attempt Quizzes and get scores!</p>
          </div>
          <div className=" flex-2 flex items-center justify-center flex-col p-8 ">
              <button className=" w-[20vw] m-2 p-16 text-[2rem] bg-blue-500 hover:bg-blue-600 text-white font-bold py-8 px-4 rounded-xl shadow-lg" onClick={()=>{router.push("/viewquizzes")}}>
                View Quizzes
              </button>
          </div>
      </div>
    </div>
  )
}
