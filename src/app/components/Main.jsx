"use client"
import Lottie from 'lottie-react'
import Image from 'next/image'
import React from 'react'
import AnimationData from '../../../public/Animation4.json'
export default function Main() {
  return (
    <div className='flex '>
<div className='flex  justify-center flex-col lg:flex-row lg:justify-between items-center w-[100vw]'>
  <div className=" flex lg:items-center w-[100%]  lg:w-[50%] lg:h-[35rem] lg:justify-center p-2 " >
  <div>
   <h1 className='font-bold text-2xl lg:text-4xl lg:w-[30rem]'>Innovative Solutions </h1>  
   <h1 className=' px-[5rem] lg:px-[5rem] font-semibold text-[#87d628] my-2'>For</h1>  
   <h1 className=' px-[5rem] lg:px-[6rem] font-bold text-2xl'>Modern <span className='text-[#87d628]'>Businesses</span></h1>  
   <p className='lg:w-[20rem] text-gray-900 my-2 '>Transform your digital presence with our comprehensive web and app development services. We deliver user-friendly, efficient solutions tailored to your goals </p>
 
   <div className='my-[2rem] hover:animate-bounce'>
   <button className='bg-[#87d628] text-white p-3 border rounded-lg shadow-lg  '>Let's Work Together</button>
   </div>
   </div>
  </div>
  <div className=" flex w-[100%]  lg:w-[50%] lg:h-[30rem]  lg:items-center my-[-3rem] lg:my-[0rem] "
  >
 <Lottie
        animationData={AnimationData} 
        loop={true} 
        autoplay={true} 
        style={{ width: 600, height: 500, }} 
      />
  </div>
  </div>      
    </div>
  )
}
