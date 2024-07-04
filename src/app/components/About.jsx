"use client"
import ProgressBar from '@ramonak/react-progress-bar'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div>
        <div className='flex bg-gray-100 text-black p-4"'>
<div className='flex justify-center flex-col lg:flex-row lg:justify-between items-center w-[100vw] p-2'>
  
  <div className=" hidden lg:flex  w-[45%] h-[30rem] bg-no-repeat items-center justify-center"
  >
 <Image src={'/aboutus.png'} width={500} height={500} className='rounded-lg border shadow-4xl animate-bounceImg'/>
  </div>
  <div className=" flex items-center w-[100%] lg:w-[55%] lg:h-[35rem] justify-center" >
  <div>
   <h1 className='font-bold text-4xl lg:w-[30rem]'>About <span className='text-[#87d628] '>Us</span> </h1>  
     
   <p className='lg:w-[30rem] text-gray-900'>At Wantech, we deliver innovative web and app development solutions for modern businesses. Our expert team transforms your digital presence into user-friendly, efficient experiences tailored to your goals. Partner with us to elevate your business in the digital world </p>
 
 <div className='my-[1rem] '>
  <p>App Development</p>
 <ProgressBar completed={80} height={15} bgColor='#87d628' animateOnRender/>
 </div>
 <div className='my-[1rem]'>
  <p>Hosting</p>
 <ProgressBar completed={70} height={15} bgColor='#87d628' animateOnRender />
 </div>
 <div className='my-[1rem]'>
  <p>Web Development</p>
 <ProgressBar completed={90} height={15} bgColor='#87d628' animateOnRender />
 </div>
 <div className='my-[1rem]'>
  <p>UI/UX</p>
 <ProgressBar completed={80} height={15} bgColor='#87d628' animateOnRender />
 </div>
   </div>
  </div>
  </div>      
    </div>
    </div>
  )
}
