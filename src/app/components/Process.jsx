import Image from 'next/image'
import React from 'react'
import { FaHandshake } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { MdInsertPageBreak } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Process() {
    const data = [
        {
        id:1,
        icon:<FaHandshake />,
        title:'Agreement'},
        {
        id:2,
        icon:<MdPriceChange />,
        title:'Estimate'},
        {
        id:3,
        icon:<SiAffinitydesigner />,
        title:'Design'},
        {
        id:4,
        icon:<FaFileCode />,
        title:'Development'},
        {
        id:5,
        icon:<VscDebugConsole />,
        title:'Testing'},
        {
        id:6,
        icon:<MdInsertPageBreak />,
        title:'Documentation'},
        {
        id:7,
        icon:<MdRocketLaunch />,
        title:'Launch'},
        {
        id:8,
        icon:<BiSupport />,
        title:'Support'},
       
    ]
  return (
    <div className='bg-[#87d628] text-white  lg:h-[160vh] p-4'>
      <Image src={'/process.jpg'} width={850} height={850} className=' animate-bounceImg realtive z-[50]'/>
        <div className='flex bottom-0'>
<div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[100vw]'>
  
  <div className=" flex w-[100%]  lg:w-[50%] lg:h-[30rem]  justify-center flex-col lg:items-center lg:pl-[-1rem] pl-4 lg:pl-0 "
  >
<h1 className='flex  font-bold text-4xl w-[100%] lg:w-[30rem] tracking-[.25em] gap-4'>Our  <span> Process</span> </h1>  
     
     <p className='w-[16rem] lg:w-[30rem] text-lg my-10'>At Wantech, we believe that process needs to be simple, organized, and transparent, so we create eight steps </p>
     <a href="/contact"> 
     <p className='w-[16rem] lg:w-[30rem] text-lg text-semibold lg:my-10 flex items-center gap-4 cursor-pointer mb-2'>Contact Us <span className='cursor-pointer text-2xl hover:animate-increaseSize'> <FaLongArrowAltRight /></span> </p></a>
     
   
  </div>
  <div className=" flex w-[100%]  lg:w-[50%] h-[20rem] lg:h-[35rem] pl-4 lg:pl-0  lg:justify-center flex-wrap  gap-[5px] lg:gap-2 w-1/2 lg:p-4 realtive z-[100]" >
 {
    data.map((i)=>(
        <div key={i} className=' flex items-center flex-col justify-center border w-[5rem] h-[6rem] lg:w-[9rem] lg:h-[12rem] rounded-[45%] bg-white text-black shadow-lg gap-2 lg:gap-4'>
    <h1 className='text-[#87d628] font-bold'>{i.id}</h1>
    <i className=' text-lg lg:text-4xl text-[#87d628]'>{i.icon}</i>
    <p className='text-[8px] lg:text-[1rem]'>{i.title}</p>
 </div>
    ))
 }
  </div>
  </div>      
    </div>
    </div>
  )
}
