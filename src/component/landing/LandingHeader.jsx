import React from 'react'

export const LandingHeader = () => {
  return (
    <div className="mt-20 flex justify-end items-center flex-col bg-slate-300 mb-20">
      <div className=" w-11/12 bg-white flex  flex-col mt-10  pb-10 mb-10 ">
        <h1 className="text-4xl mt-5 ml-10">Home</h1>
        <div className="h-32"></div>
        <div className="flex justify-center items-center text-2xl font-semibold mt-5">
          <h1>Introduction</h1>
          <div className="h-32"></div>
        </div>
        <div className="flex justify-center items-center flex-col mt-5">
          <h1 className="text-6xl font-semibold">RANA Insurance</h1>
          <div className="h-32"></div>
          <h1 className="text-lg font-semibold mt-5">
          <div className="h-32"></div>
            Best Insurance Website In the World . Most Informative Articles
            available
          </h1>
          <div className="h-32"></div>
          <button className="bg-white border-black border-2 w-40">Call to action</button>
        </div>
      </div >
    </div>
  )
}
