import React from "react";
import { LandingCard } from "./LandingCard";
import { landing } from "../../assets";
import { LandingData } from "../../constants/Landing";
import { Beniits } from "./Beniits";
import { SiTicktick } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";

export const LandingMiddle = () => {
  return (
    <div className="mt-96 flex justify-end items-center flex-col bg-slate-300 mb-20">
      <div className=" w-11/12 bg-white mt-10  mb-10">
        <div className="flex justify-around items-center">
          <h1 className="text-4xl w-1/2 p-10">
            We have 50 Plus Insurance Plan Articles
          </h1>
          <div className="w-1/2 flex justify-center">
            <button className="border-2 border-black">View ALL</button>
          </div>
        </div>
        <LandingCard />
        <div className="flex mt-20 h-96">
          <div className="w-1/2 flex justify-center items-center">
            <img className="w-3/4 h-1/2 rounded-lg" src={landing} />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            {LandingData.map((i) => (
              <div className="pr-10">
                <div>
                  <h1 className="text-4xl ">{i.heading}</h1>
                </div>
                <div>
                  <p className="text-xl ">{i.paragraph}</p>
                </div>
                <>
                  <button className="border border-black">Learn More</button>
                </>
              </div>
            ))}
          </div>
        </div>
        <Beniits />
        <div className="mt-40 flex justify-center">
          {LandingData.map((i) => (
            <div className="flex flex-col">
              {" "}
              <div className="flex w-11/12 justify-center items-center">
                <div className="w-1/2">
                  <h1 className="text-3xl p-10">{i.benifitsHeading}</h1>
                </div>
                <div className="w-1/2">
                  <img className="rounded-xl" src={i.benifitsImage} />
                </div>
              </div>
              <div className="w-1/2 p-10">
                {i.points.map((i) => (
                  <div className="mt-20 p-4 ">
                    <div className="flex  items-center gap-5  ">
                      <SiTicktick className="text-xl" />
                      <h1 className="text-3xl">{i.heading}</h1>
                    </div>
                    <>
                      <h1 className="text-xl ">{i.paragraph}</h1>
                    </>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
          

         <div className="mt-40">
          {LandingData.map((i)=>(<div className="flex flex-col">
            <div className="flex justify-center items-center">
            <h1 className="text-3xl">{i.disAdvantageHeading}</h1>
            </div>

            <div className="flex">
              {i.disAdvantageCard.map((i)=>(<div className="w-1/2 p-20">
                <h1 className="text-xl"><FaQuoteLeft  className="text-4xl mb-10"/>{i.heading}</h1>
                <div className="flex justify-center items-center mt-5">
                  <div className="w-1/4  ">
                  <img className="rounded-full h-20" src={i.image}/>
                  </div>
                  <div  className="w-3/4  ">
                   <div className="flex justify-center items-center font-semibold "><h1>{i.autorName}</h1></div>
                   <div className="flex justify-center items-center font-semibold"><h1>{i.company}</h1></div>
                   </div>
                </div>
              </div>))}
            </div>
            </div>
          ))} 
         </div>


         <div  className="relative flex justify-center items-center">
          <div className="w-full"><img  className="w-full"src={landing}/>
          <div className="absolute top-1/2 right-52 ">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-white text-4xl mt-4 ">Please Visit Full Site Thank You</h1>
            <h1 className="text-white mt-5 ">We will write a sub-headline that introduces your call to action to website visitors here</h1>
            <button className="bg-slate-500 border mt-5">call to action</button>
          </div>
          </div>
          </div>
         </div>
      </div>
    </div> 
  );
};
