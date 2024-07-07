"use client"
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { VscTools } from "react-icons/vsc";
import { GiShakingHands } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import ProgressBar from "@ramonak/react-progress-bar";
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
        <p className="w-[90vw] text-sm text-gray-900 lg:px-[8rem]">We&apos;ve expanded our skill set to a vast variety of technologies spanning from web applications to mobile applications,  Business apps,hosting, ecommerce. We&apos;ve also excelled in the area of cloud hosting and deployment too. We are a small team of extremely smart individuals with very strong hold on various technologies.</p>
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
        <h1 className="text-center  font-semibold text-2xl ">Why Choose Us</h1>
       <div className='flex  justify-center flex-col lg:flex-row lg:justify-between items-center w-[100vw]'>
       
       <div className=" flex  lg:items-center  w-[100%]  lg:w-[50%]  lg:justify-center p-2 " >
       <div>
        <h1 className='font-bold  lg:w-[30rem]'>Comprehensive Technology Stack</h1>   
        <p className=' w-[90%]  my-2 text-sm pb-4'> From frontend to backend development, mobile apps to enterprise solutions, and everything in between, we have the capability to handle a wide array of technological requirements. Our proficiency spans multiple platforms and frameworks, ensuring that we can tailor solutions precisely to your specifications.</p>
        <h1 className='font-bold  lg:w-[30rem]'>Expertise in Cloud Hosting and Deployment</h1>   
        <p className=' w-[90%] text-sm   pb-4 '>We excel in leveraging cloud technologies to optimize performance, scalability, and cost-efficiency for your applications. Whether it&apos;s AWS, Azure, Google Cloud, or other platforms, we ensure seamless deployment and management of your applications in the cloud</p>

        <h1 className='font-bold  lg:w-[30rem] '>Innovative and Agile Approach</h1>   
        <p className=' w-[90%] text-sm  pb-4  '>As a small team of exceptionally smart individuals, we thrive on solving complex challenges with innovative solutions. Our agile methodology allows us to adapt quickly to changes, ensuring we deliver projects on time and within budget while exceeding expectations</p>
       
        <h1 className='font-bold  lg:w-[30rem]'>Commitment to Quality and Client Satisfaction</h1>   
        <p className=' w-[90%] text-sm  pb-4 '>We prioritize quality in every aspect of our work, from initial concept to final delivery. Our attention to detail and commitment to understanding your business goals ensure that we not only meet but exceed your expectations. Client satisfaction is at the heart of everything we do</p>
        <h1 className='font-bold  lg:w-[30rem]'>Personalized Service and Collaboration</h1>   
        <p className=' w-[90%] text-sm  pb-4 '>We believe in building strong, collaborative relationships with our clients. Your success is our success, and we work closely with you to ensure that our solutions align perfectly with your vision and objectives. You can count on us to be responsive, proactive, and dedicated to your project&apos;s success</p>
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
        <div>
        <div className='flex bg-gray-100 text-black p-4"'>
<div className='flex justify-center flex-col lg:flex-row lg:justify-between items-center w-[100vw] p-2'>
  
 
  <div className=" flex items-center w-[100%] lg:w-[45%] lg:h-[35rem] justify-center p-2 lg:p-8" >
  <div>
   <h1 className=' font-bold text-4xl '>Experience and <span className='text-[#87d628] '>skills </span> </h1>  
     
  
 
 <div className='my-[1rem] '>
  <p className="text-sm pb-2 text-gray-800">AngularJS, Ionic, Node JS ,Express JS, Loopback, 
    Typescript, React JS/React Native, VueJS, Flutter, MeteorJS</p>
    <h1>JAVASCRIPT</h1>
 <ProgressBar completed={92} height={10} bgColor='#87d628' animateOnRender/>
 </div>
 <div className='my-[2rem] '>
  <p className="text-sm pb-2">HTML/CSS, Twitter Bootstrap /Zurb foundation/Media Query, Responsive websites/email templates Mailchimp, Shopify, Squarespace, PSD to HTML/Wordpress, jQuery/Javascript, Animations with HTML5/CSS3</p>
    <h1>FRONT END DEVELOPMENT</h1>
 <ProgressBar completed={95} height={10} bgColor='#87d628' animateOnRender/>
 </div>
 <div className='my-[2rem] '>
  <p className="text-sm pb-2">Automation testing</p>
    <h1>QA</h1>
 <ProgressBar completed={90} height={10} bgColor='#87d628' animateOnRender/>
 </div>
 <div className='my-[2rem] '>
  <p className="text-sm pb-2">MOBILE DEVELOPMENT</p>
    <h1>React Native</h1>
 <ProgressBar completed={85} height={10} bgColor='#87d628' animateOnRender/>
 </div>
   </div>
  </div>
  <div className=" w-[100%] lg:w-[50%]  bg-no-repeat    flex-col p-4"
  >
 <div className='my-[2rem] '>
 <h1>ANALYSIS</h1>
  <p className="text-sm pb-2">Understanding your business needs it&apos;s one of the most important steps we have to take to develop an efficient digital solution. Hence, our interest in developing a strategic plan first</p>
 </div>
 <div className='my-[1rem] '>
 <h1>UI/UX DESIGN</h1>
  <p className="text-sm pb-2">We are capable of creating highly usable and intuitive designs for future mobile and web application that will serve you as suitable tools to engage customers.</p>
 </div>
 <div className='my-[1rem] '>
 <h1>FRONT END DEVELOPMENT</h1>
  <p className="text-sm pb-2">Our front-end experts provide a thorough and detailed approach to build customised web and mobile applications</p>
 </div>
 <div className='my-[2rem] '>
 <h1>BACK END CODING</h1>
  <p className="text-sm pb-2">We are highly strategical and analytical in building a solid code that will transform even the boldest ideas into reality.</p>
 </div>
  </div>
  </div>      
    </div>
    </div>
      </div>
      <Footer />
    </>
  );
}
