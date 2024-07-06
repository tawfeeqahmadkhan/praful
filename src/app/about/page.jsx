import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { VscTools } from "react-icons/vsc";
import { GiShakingHands } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
export default function page() {
    const data = [
        {
            id:1,
            icon:<VscTools />,
            title:"Technical skills and expertise",
            des:"Our team of strategists, designers and developers are here for you and strive to deliver the best possible quality of the mobile and web applications that they create."
        },
        {
            id:2,
            icon:<GiShakingHands />,
            title:"Business introspection",
            des:"Your business needs and goals represent the ground on which we build the future mobile and web application. Through a deep analysis, we make sure it’s a solid one."
        },
        {
            id:3,
            icon:<BsPeopleFill />,
            title:"Broad experience",
            des:"From AngularJS, Node JS (Express JS, Loopback), React JS, Typescript and Ionic to Laravel, Yii, Swift and Objective C, we rule them all."
        },
        {
            id:2,
            icon:<GiProcessor />,
            title:"A proven agile process",
            des:"Our entire activity follows transparent agile principles. In that way, we succeed to deliver a mobile or web application that can easily be monetized and respect the business core."
        },

    ]
  return (
    <>
      
      <div className=" w-[100vw] bg-[url('/office2.png')] bg-no-repeat bg-w-[100vw] lg:bg-contain ">
    <div className="bg-black  bg-opacity-[50%] text-white">
    <Header   />
    <div className=" flex items-center flex-col justify-center  w-[99vw]  h-[8rem] lg:h-[19rem] ">
       
        <div className="flex items-center flex-col justify-center w-[100%] h-[100%] text-white">
       
        
        <h1 className="font-bold text-4xl">About <span className="text-[#87d628]">Us</span></h1>
        <p>Developers with an efficient way of doing things</p>
        </div>
        </div>
    </div>
        
        <div className="flex items-center flex-col justify-center bg-gray-100 gap-4 py-4">
        <h1 className="font-bold text-2xl">About <span className="text-[#87d628]">Wantech</span></h1>
        <p className="w-[90vw] text-sm text-gray-900 lg:px-[8rem]">We've expanded our skill set to a vast variety of technologies spanning from web applications to mobile applications,  Business apps,hosting, ecommerce. We've also excelled in the area of cloud hosting and deployment too. We are a small team of extremely smart individuals with very strong hold on various technologies.</p>
        <div className="flex flex-row   justify-center gap-4 flex-wrap pb-4 ">
           { data.map((item)=>(
            <div className=" flex items-center flex-col justify-center w-[95%]  lg:w-[19rem] bg-white shadow-lg gap-8 cursor-pointer h-[20rem] hover:animate-increaseSize2" key={data.id}>
                <i className="text-[3rem] ">{item.icon}</i>
                <h1 className=" font-semibold px-4">{item.title}</h1>
                <p className="text-sm text-gray-900 px-4">
               {item.des}
                </p>
            </div>
           ))
           }
        </div>
        </div>
       <div className=" bg-[#87d628] text-white lg:p-14 pb-2">
        <h1 className="text-center  font-semibold text-2xl py-8">We do know how IT world functions</h1>
       <div className='flex  justify-center flex-col lg:flex-row lg:justify-between items-center w-[100vw]'>
       
       <div className=" flex  lg:items-center  w-[100%]  lg:w-[50%]  lg:justify-center p-2 " >
       <div>
        <h1 className='font-bold  lg:w-[30rem]'>Our strengths and abilities</h1>   
        <p className=' w-[90%]  my-2 '>Our skills and knowledge are extremely flexible - we are able to accomplish literally any IT challenge todays market can throw on us. Our portfolio speaks for itself.</p>
        <h1 className='font-bold  lg:w-[30rem] py-4'>Focus on long-term relationships</h1>   
        <p className=' w-[90%]  '>Being on the market for few years we have managed to gain the trust and respect from our clients. Long-term relationships and happy customers have always been one of our main goals </p>
       
        </div>
       </div>
       <div className=" flex w-[98vw]  lg:w-[50%] lg:h-[30rem]  lg:items-center  "
       >
      <div>
      <Image src={'/office.png'} width={500} height={500} className="flex  justify-center items-center shadow-lg "/>
      </div>
       </div>
       </div> 
        </div> 
      </div>
      <Footer />
    </>
  );
}
