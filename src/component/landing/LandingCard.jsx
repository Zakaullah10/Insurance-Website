import React from 'react'
import { LandingData } from '../../constants/Landing'

export const LandingCard = () => {
  return (
    <div className='flex justify-center mt-10'>
        <div className='w-11/12 border border-black rounded-lg h-[750px] flex justify-between py-2'>
         {LandingData.map((i)=>(i?.card.map((e,index)=>( <div className={`w-[33%] flex justify-center items-center flex-col p-5 ${index===2 ?'':'border-r'} border-black`}>
         <div className=' h-1/3 '>
            <img src={e.image}></img>
         </div>
         <div className='mt-5'>
         <h1 className='text-4xl'>{e.heading}</h1>
         </div>
         <div className='mt-5 '>
         <p className='text-xl'> {e.paragraph}</p>
         </div>
         <div className=''>
         <button className='mt-5' >Learn More </button>
         </div >
         </div>))))}
        
        </div>

    </div>
  )
}
