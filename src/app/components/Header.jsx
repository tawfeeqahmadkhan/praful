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
      <div className="flex items-center flex-row w-[100vw] justify-center gap-20 hidden lg:flex ">
        <div className="flex flex-col items-center cursor-pointer">
          <Link href={"/"}>
            <Image src={"/Wantech.gif"} width={80} height={50} />
          </Link>
          <p className="my-[-1rem]  text-[#87d628]">Wantech</p>
          <div>
            <Link href={"www.facebook.com"}></Link>
          </div>
        </div>
        <ul className="flex items-center flex-row justify-center gap-10">
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
      {/* small screen */}
      <div className="lg:hidden flex flex-row  items-center relative w-[100%]">
        <div className="flex flex-col  cursor-pointer w-[90%]">
          <Link href={"/"}>
            <Image src={"/Wantech.gif"} width={90} height={90} />
          </Link>
        </div>
        <div className="flex  ">
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
