import React from 'react'
import { LandingData } from '../constants/Landing'

export const Footer = () => {
  return (
    <div>
         <div className='w-full h-10 bg-slate-500 '>
        <div className='w-2/5 h-full  flex justify-center items-center'>{LandingData.map((i)=>(<h1>{i.logoname}</h1>))} </div>
         
    </div>
    </div>
  )
}
