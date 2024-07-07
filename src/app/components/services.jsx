import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div className=" mx-auto p-6 lg:px-20  w-[100vw]    bg-gray-100" >
      <h2 className="text-4xl font-bold text-center mb-6 ">Service<span className='text-[#87d628]'>s</span> </h2>
      <p className=" text-center mb-12 ">
      We specialize in app and web development, offering expert UI and UX design services. Our team creates visually stunning, highly functional interfaces to enhance user experience and help your business stand out digitally.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:bg-[url('/ser.png')] bg-no-repeat bg-center bg-[length:19rem_15rem] p-2">
        <div className="lg:pr-[7rem]   rounded-md text-center flex items-center flex-col">
          <h3 className="text-xl font-bold mb-2 ">UI/UX</h3>
          <p className=' text-start '>Crafting seamless and captivating digital experiences through user-centered design.</p>
        </div>
        <div className="   lg:pl-[8rem]  rounded-md  text-center flex items-center flex-col">
         
          <h3 className="text-xl font-bold mb-2">Reliable Hosting</h3>
          <p className='   flex text-start   '>High-speed, secure hosting with 24/7 support. Maximum uptime and scalability guaranteed.</p>
        </div>
        <div className="  lg:pr-[7rem]   rounded-md  text-center flex items-center flex-col">
       
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p className=' text-start '>Designing engaging and user-centric app interfaces that captivate and delight users.</p>
        </div>
        <div className="rounded-md  text-center flex items-center flex-col lg:pl-[8rem]">
          
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className=' text-start '>Bringing visual concepts to life with innovative and impactful designs as a web developer.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
