"use client"
import ProgressBar from '@ramonak/react-progress-bar'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="container mx-auto p-6 lg:p-10 " >
      
      <h2 className="text-4xl font-bold text-center mb-6"><span className='text-[#87d628]'>O</span>ur Project<span className='text-[#87d628]'>s</span> </h2>
      <p className="text-center mb-12">
     Delivering innovative web and app development solutions, we specialize in exceptional UI/UX design to enhance your digital experience. Our team ensures visually stunning and highly functional interfaces for your business.
      </p>
    <div className='flex items-center justify-center flex-row gap-2 lg:gap-8 '>
    <button className='bg-[#87d628] text-white p-2 rounded-md shadow-lg hover:animate-bounce w-[10rem] lg:w-[13rem] h-[2.5rem] flex items-center justify-center'>All</button>
      <button className='bg-[#87d628] text-white p-2 rounded-md shadow-lg hover:animate-bounce w-[10rem]  lg:w-[13rem] h-[2.5rem] flex items-center justify-center'>Website</button>
      <button className='bg-[#87d628] text-white p-2 rounded-md shadow-lg hover:animate-bounce w-[10rem] lg:w-[13rem] h-[2.5rem] flex items-center justify-center'>App</button>
      <button className='bg-[#87d628] text-white p-2 rounded-md shadow-lg hover:animate-bounce w-[10rem] lg:w-[13rem] h-[2.5rem] flex items-center justify-center'>UI/UX</button>
      <button className='bg-[#87d628] text-white p-2 rounded-md shadow-lg hover:animate-bounce w-[10rem] lg:w-[13rem] h-[2.5rem] flex items-center justify-center'>Hosting</button>
    </div>
    <div className="flex my-4  justify-start lg:justify-center lg:items-center lg:gap-[7rem] gap-2 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-[#87d628] scrollbar-track-gray-100 h-[30rem]">
  <div className="flex-shrink-0 w-[320px]">
    <Image src={'/mobile.png'} width={400} height={300} className='rounded-lg shadow-lg cursor-pointer hover:animate-increaseSize2 border'/>
  </div>
  <div className="flex-shrink-0 w-[320px]">
    <Image src={'/mobile.png'} width={400} height={300} className='rounded-lg shadow-lg cursor-pointer hover:animate-increaseSize2 border'/>
  </div>
  <div className="flex-shrink-0 w-[320px]">
    <Image src={'/mobile.png'} width={400} height={300} className='rounded-lg shadow-lg cursor-pointer hover:animate-increaseSize2 border'/>
  </div>
</div>

    </div>
  )
}
