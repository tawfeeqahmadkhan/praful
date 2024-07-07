import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image'

export default function page() {
  return (
    <> 
    <div className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white '>
    <Header/>
    <div className='flex  justify-center flex-col lg:flex-row  items-center w-[100vw]'>
       <div className=" flex w-[98vw]  lg:w-[45%] lg:h-[30rem]  lg:items-center  "
       >
      <div>
      <Image src={'/contact.png'} width={400} height={450} className="flex  justify-center items-center  "/>
      </div>
       </div>
       <div className=" flex items-center  justify-center  lg:items-center  w-[100%]  lg:w-[40%] border  lg:justify-center p-2  rounded-[1rem] shadow-lg " >
       <div>
    <form className='flex flex-col'>
      <input type='text' name='name' placeholder='Name' required className='m-2 p-2 w-[20rem] rounded-lg shadow-lg'/>
      <input type='text' name='number' placeholder='Contact' className='m-2 p-2 w-[20rem] rounded-lg shadow-lg'/>
      <input type='email' name='email' placeholder='Email' required className='m-2 p-2 w-[20rem] rounded-lg shadow-lg'/>
      <textarea type='text' cols={5} name='message'  placeholder='Message' className='m-2 p-2 w-[20rem] rounded-lg shadow-lg'/>
      <button className='p-4 text-white rounded-lg shadow-lg bg-[#87d628] '>Submit</button>
    </form>
        </div>
       </div>
       
       </div>
      </div> 
       <Footer/>
    </>

  )
}
