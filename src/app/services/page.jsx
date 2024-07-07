import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { MdOutlineDone } from "react-icons/md";
import Footer from '../components/Footer';
import { TbHealthRecognition } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { CiHospital1 } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import { GiChaingun } from "react-icons/gi";
export default function page() {
  const data = [
    {
        id:1,
        icon:<TbHealthRecognition />,
        title:"Healthcare",
    },
    {
        id:2,
        icon:<MdOutlineRealEstateAgent />,
        title:"Real-estate",
    },
    {
        id:3,
        icon:<CiHospital1 />,
        title:"Hospitality",

    },
    {
        id:4,
        icon:<RiMoneyDollarBoxLine />,
        title:"Fintech",

    },
    {
        id:5,
        icon:<BsCart3 />,
        title:"Ecommerce",

    },
    {
        id:6,
        icon:<MdCastForEducation />,
        title:"Education",
    },
    {
        id:7,
        icon:<SiStylelint />,
        title:"Fashion",
    },
    {
        id:8,
        icon:<GiChaingun />,
        title:"Jewelry",
    },

]
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white ">
    <Header />
   <div>
   <div className=" text-white lg:p-14 pb-2">
       <div className='flex  justify-center flex-col lg:flex-row lg:justify-between items-center w-[100vw]'>
       <div className=" flex  lg:items-center  w-[100%]  lg:w-[50%]  lg:justify-center p-2 " >
       <div>
       <h1 className='font-bold  lg:w-[30rem] text-2xl'>Our service<span className='text-[#87d628]'>s</span></h1>    
        <p className=' w-[90%]  my-2 pb-8'>At Wantech, we deliver innovative web and app development and Hosting solutions for modern businesses. Our expert team transforms your digital presence into user-friendly, efficient experiences tailored to your goals. Partner with us to elevate your business in the digital world </p>
        <h1 className='font-bold  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-2xl font-bold'><MdOutlineDone /></span> Web Development</h1>          
        <h1 className='font-bold  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-2xl font-bold'><MdOutlineDone /></span> App Development</h1>          
        <h1 className='font-bold  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-2xl font-bold'><MdOutlineDone /></span> UI/UX And Graphic Design</h1>
        <h1 className='font-bold  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-2xl font-bold'><MdOutlineDone /></span> Hosting</h1>
        <a href="/contact">   <button className='bg-[#87d628] text-white p-3 border rounded-lg shadow-lg  '>Talk To Our Expert</button> </a>
        </div>
       </div>
       <div className=" flex w-[98vw]  lg:w-[50%] lg:h-[30rem]  lg:items-center  "
       >
      <div>
      <Image src={'/Homebg.png'} width={400} height={450} className="flex  justify-center items-center  "/>
      </div>
       </div>
       </div> 
        </div> 
   </div>
   <div className=" bg-white text-black lg:p-14 pb-2">
       <div className='flex  justify-center flex-col lg:flex-row  items-center w-[100vw]'>
       <div className=" flex w-[98vw]  lg:w-[45%] lg:h-[30rem]  lg:items-center  "
       >
      <div>
      <Image src={'/mobile.png'} width={400} height={450} className="flex  justify-center items-center hidden lg:flex  "/>
      </div>
       </div>
       <div className=" flex  lg:items-center  w-[100%]  lg:w-[40%]  lg:justify-center p-2 border rounded-[1rem] shadow-lg " >
       <div>
       <h1 className='font-bold  lg:w-[15rem] text-2xl'>App <span className='text-[#87d628]'>Development</span></h1>    
        <p className=' w-[90%]   my-2 pb-8'>Wantech understands the clients expectations with their businesses. We offer visualization to our clients after customizing their requirements. Our user-centric mobile tools contribute to your business revenues. We aim to elevate your business by improving the online presence of your products and services. We improve your customer service through Android, iOS, React Native and Hosting. We have individual teams of developers for  </p>
        <h1 className='font-bold p-4   flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> Android App Development</h1>          
        <h1 className='font-bold p-4  my-2 flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> iOS App Development</h1>         
        <h1 className='font-bold p-4  my-2 flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> React Native Development</h1>
        <h1 className='font-bold p-4  mb-2 flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> Cross Platform</h1> 
        </div>
       </div>
       
       </div> 
        </div> 
        <div className=" bg-white text-black lg:p-14 pb-2">
       <div className='flex  justify-center flex-col lg:flex-row  items-center w-[100vw] gap-1 lg:gap-20'>
      
       <div className=" flex  lg:items-center  w-[100%]  lg:w-[45%]  lg:justify-center p-2 border rounded-[1rem] shadow-lg " >
       <div>
       <h1 className='font-bold  lg:w-[15rem] text-2xl'>Web <span className='text-[#87d628]'>Development</span></h1>    
        <p className=' w-[90%]   my-2 pb-8'>Wantech builds a high-performing and unique web presence for businesses. We ensure your website attracts and retains clients. We aim for higher conversion rates. In this way, our development team focuses on intuitive developments for all types of online platforms. Our expert developers help you in digital transformations through ultimate customer service, engagements, and much more. We understand, differentiate, and carve the solutions for your business purpose </p>
               <h1 className='font-bold p-4   flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> Responsive Websites</h1>          
        <h1 className='font-bold p-4  my-2 flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> Web Portal</h1>         
        <h1 className='font-bold p-4  my-2 flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> Web applications</h1>
        <h1 className='font-bold p-4  mb-2 flex items-center hover:bg-[#87d628] w-[16rem] cursor-pointer shadow-lg border rounded-lg'> Custom Web Solutions</h1>    
        </div>
       </div>
       <div className=" flex w-[98vw]  lg:w-[50%] lg:h-[30rem]  lg:items-center  "
       >
      <div>
      <Image src={'/webser.png'} width={600} height={450} className="flex  justify-center items-center hidden lg:flex "/>
      </div>
       </div>
       </div> 




        </div> 
        <div className='flex  justify-center flex-col lg:flex-row  items-center w-[100vw]  bg-white text-black'>
       <div className=" flex w-[98vw]  lg:w-[45%] lg:h-[30rem]  lg:items-center  "
       >
      <div>
      <Image src={'/mobile.png'} width={400} height={450} className="flex  justify-center items-center hidden lg:flex  "/>
      </div>
       </div>
       <div className=" flex  lg:items-center  w-[100%]  lg:w-[40%]  lg:justify-center p-2 border rounded-[1rem] shadow-lg " >
       <div>
       <h1 className='font-bold  lg:w-[15rem] text-2xl'>E-commerce </h1>    
        <p className=' w-[90%]   my-2 pb-8'>A powerful and robust performing online store is essential for eCommerce businesses. Incipient Info strategizes to create such online retail stores which are attractive and feature-rich. Our technical and marketing teams form the best solution for the agile development of your e-store. We are wellversed in providing a quality shopping experience to your visitors to elevate the business&apos;s profit growth. Additionally, when it comes to buying anything, the payment gateway becomes essential and therefore, we also work efficiently for third-party integration. We can transform your business into an e-store</p>
        <h1 className='font-bold p-4   flex items-center hover:bg-[#87d628] lg:w-[20rem] cursor-pointer shadow-lg border rounded-lg'> Ecommerce Website Design</h1>          
        <h1 className='font-bold p-4  my-2 flex items-center hover:bg-[#87d628] lg:w-[20rem] cursor-pointer shadow-lg border rounded-lg'> Ecommerce App Development</h1>         
        <h1 className='font-bold p-4  my-2 flex items-center hover:bg-[#87d628] lg:w-[20rem] cursor-pointer shadow-lg border rounded-lg'> Custom Open-Source Development</h1>
        <h1 className='font-bold p-4  mb-2 flex items-center hover:bg-[#87d628] lg:w-[20rem] cursor-pointer shadow-lg border rounded-lg'>Woocommerce</h1> 
        </div>
       </div>
       
       </div>
       <div className='flex p-1 lg:p-[10rem] lg:px-[4rem] lg:pb-[2px] flex-col bg-white text-black '>
        <h1 className='font-bold text-2xl text-start pb-2'>The process we follow to Hire Dedicated Developers</h1>
        <p className='text-sm pb-2'>Web And Mobile Development is itself a model that we follow for overall deliverables. Incipient Infotech works for seamless integrations and much more and that is why we have carved a proper web And mobile development model. Every project goes through a few stages, where we intervene with our relevant skills. Here are the prominent steps of the process that Web And Mobile Development Service include</p>
        
        <div className='flex w-[100%] items-center  justify-center'>
        <Image src={'/processhire.png'} width={1000} height={1000}/>
        </div>
       </div>

       <div className='flex p-1 lg:p-[10rem] lg:px-[4rem] flex-col bg-white text-black'>
        <h1 className='font-bold text-2xl text-start pb-2'>Industries We Have Experience In</h1>
        <p className='text-sm pb-2'>We are happily serving clients from different industries. Here are a few to define our unerring development approach</p>
        <div className="flex items-center flex-col justify-center bg-gray-100 gap-4 py-4">
        <div className="flex flex-row   justify-center gap-4 flex-wrap pb-4 ">
           { data.map((item)=>(
            <div className=" flex items-center flex-col justify-center w-[45%]  lg:w-[15rem] bg-white shadow-lg gap-8 cursor-pointer h-[10rem] hover:animate-increaseSize2" key={data.id}>
                <i className="text-[3rem] text-[#87d628] ">{item.icon}</i>
                <h1 className=" font-semibold px-4">{item.title}</h1>
            </div>
           ))
           }
        </div>
        </div>
       </div>
  <div className='text-black'>
  <Footer/>
  </div>
  </div>
  )
}
