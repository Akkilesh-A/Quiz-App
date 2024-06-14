"use client"

import React,{useState} from 'react'
import Link from 'next/link'
import { signIn,signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { useSession } from 'next-auth/react'
import { useRouter,usePathname } from 'next/navigation'


const NavBar = () => {
    const session = useSession()
    const router = useRouter()
    const pathName = usePathname()
    const username = session.data?.user?.name
    const image = session.data?.user?.image || "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
    if(session.status === 'authenticated' && pathName === '/signin'){
        router.push('/')
    }
    if(session.status === 'unauthenticated'){
        router.push('/signin')
    }
    const [usernameClicked, setUsernameClicked] = useState(false)
  return (
    <div>      
        <nav className='text-black px-8 h-[10vh]  bg-[#f8c93da3] flex items-center justify-between'>
            <Link href="/" className='font-extrabold text-[2.5rem]'>🎓 iPropel<span className='font-semibold text-[1.5rem]'> Admin</span></Link>
            <ul className='flex'>
                <li className='mx-4 font-semibold text-[1.2rem] underline hover:text-blue-400'>
                    <Link href="/createquiz">Create Quiz</Link>
                </li>
                <li className='mx-4 font-semibold text-[1.2rem] underline hover:text-blue-400'>
                    <Link href="/viewquiz">View Quizzes</Link>
                </li>
            </ul>
            <div>
                {session.status === 'authenticated' ? 
                    <div className=' flex items-center cursor-pointer flex-col'>
                        <div onClick={()=>setUsernameClicked(!usernameClicked)} className='rounded-xl border-2  shadow-[#9187b3] shadow border-[#9187b3] bg-[#CFC1FF] px-4 py-2 flex items-center '>
                            <h1 className='mr-4'>{username}</h1> 
                            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={image} alt="Bordered avatar" />
                        </div>
                        <div className={usernameClicked?"flex absolute justify-start text-[0.85rem]  bg-white shadow-lg rounded mt-16 flex-col space-y-2":"hidden"}>
                            <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded" onClick={() => {signOut(),router.push("/signin")}}>Sign Out</button>
                        </div>
                    </div>
                : <div>
                    
                    <Button className='bg-[#CFC1FF] font-semibold' onClick={() => signIn()}>Sign In</Button>
                    
                </div>}
            </div>
        </nav>

    </div>
  )
}

export default NavBar