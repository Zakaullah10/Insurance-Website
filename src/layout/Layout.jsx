import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <div style={{display:'flex', flexDirection:"column"}}>
        <div style={{position:"fixed", top:0,width:'100%'}} className='z-50'>
        <Navbar/>
        </div>
        <div>
            {children}
        </div>
       <Footer/>
    </div>
  )
}
