"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
export default function Header() {
  const [open,setOpen]= useState(false)
  return (
    <>
      <div className="flex  flex-row w-[100vw] justify-center gap-20 hidden lg:flex ">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <Link href={"/"}>
            <Image src={"/Wantech.svg"} width={100} height={50} className="flex my-[-1.8rem] " />
          </Link>
          <p className="my-[0rem]  text-[#87d628]">Wantech</p>
          <div>
            <Link href={"www.facebook.com"}></Link>
          </div>
        </div>
        <div className="flex  items-center justify-center  h-[4rem] py-8">
        <ul className="flex items-center flex-row justify-center gap-10 text-[1.1rem]  ">
          <Link href={"/"}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Home
            </li>
          </Link>
          <Link href={"/"}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Abous Us
            </li>
          </Link>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Services
          </li>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Projects
          </li>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Contact
          </li>
        </ul>
        </div>
      </div>
      {/* small screen */}
      <div className="lg:hidden flex flex-row  items-center  relative w-[100%]  mb-10">
      <div className="flex flex-col cursor-pointer flex-start w-[90%] ">
          <Link href={"/"}>
            <Image src={"/Wantech.svg"} width={100} height={50} className="flex my-[-1.8rem] " />
          </Link>
          <p className="my-[0rem]  text-[#87d628] mx-4">Wantech</p>
          <div>
            <Link href={"www.facebook.com"}></Link>
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer flex-end ">
          <div>
            
           {open? <ul className=" flex px-10 gap-4 flex-col  text-white py-10 bg-black color-white w-[100vw] absolute left-0 top-0 h-[50vh] z-[1000]">
            <TfiClose className="text-4xl" onClick={()=>setOpen(false)} />
            <Link href={"/"} onClick={()=>setOpen(false)}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Home
            </li>
          </Link>
          <Link href={"/"} onClick={()=>setOpen(false)}>
            <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
              Abous Us
            </li>
          </Link>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Services
          </li>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Projects
          </li>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-[#87d628] hover:border-b border-[#87d628]">
            Contact
          </li>
            </ul>:<TfiMenuAlt className="text-4xl" onClick={()=>setOpen(true)} />}
          </div>
        </div>
      </div>
    </>
  );
}
