import React from 'react'
import { LandingData } from '../constants/Landing'

export const Navbar = () => {
  return (
    <div className='w-full h-20 bg-slate-500 fixed'>
        <div className='w-2/5 h-full  flex justify-center items-center'>{LandingData.map((i)=>(<h1>{i.logoname}</h1>))} </div>
         
    </div>
  )
}
