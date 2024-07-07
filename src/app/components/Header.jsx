"use client"
import Image from "next/image";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
export default function Header() {
  const [open,setOpen]= useState(false)
  return (
    <>
      <div className="flex  flex-row w-[100vw] justify-center gap-20 hidden lg:flex ">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <a href={"/"}v>
            <Image src={"/Wantech.svg"} width={100} height={50} className="flex my-[-1.8rem] " />
          </a>
          <p className="my-[0rem]  text-[#87d628]">Wantech</p>
          <div>
            <a href={"www.facebook.com"}></a>
          </div>
        </div>
        <div className="flex  items-center justify-center  h-[4rem] py-8">
        <ul className="flex items-center flex-row justify-center gap-10 text-[1.1rem]  ">
          <a href={"/"}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Home
            </li>
          </a>
          <a href={"/about"} prefetch={true}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Abous Us
            </li>
          </a>
          <a href={"/services"}>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Services
          </li>
          </a>
          {/* <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Projects
          </li> */}
          {/* <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Testimonials
          </li> */}
           <a href={"/contact"}>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Contact Us
          </li>
          </a>
        </ul>
        </div>
      </div>
      {/* small screen */}
      <div className="lg:hidden flex flex-row  items-center  relative w-[100%]  mb-10">
      <div className="flex flex-col cursor-pointer flex-start w-[90%] ">
          <a href={"/"}>
            <Image src={"/Wantech.svg"} alt="img" width={100} height={50} className="flex my-[-1.8rem] " />
          </a>
          <p className="my-[0rem]  text-[#87d628] mx-4">Wantech</p>
          <div>
            <a href={"www.facebook.com"}></a>
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer flex-end ">
          <div>
            
           {open? <ul className=" flex px-10 gap-4 flex-col  text-white py-10 bg-black color-white w-[100vw] absolute left-0 top-0 h-[50vh] z-[1000]">
            <TfiClose className="text-4xl" onClick={()=>setOpen(false)} />
            <a href={"/"} onClick={()=>setOpen(false)}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Home
            </li>
          </a>
          <a href={"/about"} onClick={()=>setOpen(false)}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Abous Us
            </li>
          </a>
          <a href={"/services"} onClick={()=>setOpen(false)}>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Services
          </li></a>
          {/* <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Projects
          </li> */}
          {/* <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Testimonials
          </li> */}
          <a href={"/contact"} onClick={()=>setOpen(false)}>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Contact Us
          </li></a>
            </ul>:<TfiMenuAlt className="text-4xl" onClick={()=>setOpen(true)} />}
          </div>
        </div>
      </div>
    </>
  );
}
