import React from 'react'
import { LandingData } from '../../constants/Landing'

export const Beniits = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex w-11/12 '>
    {LandingData.map((i)=>(i?.benifits.map((e,index)=>(<div className={`${index!==2?'border-r ' :''} border-black p-14 w-1/3`} >
        <h1 className='text-xl'>{e.num}</h1>
       <h1 className='text-4xl'>{e.heading}</h1>
       <p className='text-2xl'>{e.paragraph}</p>
        </div> ))))}
    </div>
    </div>
  )
}
