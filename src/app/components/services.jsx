import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto p-6  rounded-lg " >
      <h2 className="text-4xl font-bold text-center mb-6 ">Service<span className='text-[#87d628]'>s</span> </h2>
      <p className="text-center mb-12">
      We specialize in app and web development, offering expert UI and UX design services to elevate your digital presence
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:bg-[url('/ser.png')] bg-no-repeat bg-center bg-[length:19rem_15rem]">
        <div className="     rounded-md p-6 text-center flex items-center flex-col">
          <h3 className="text-xl font-bold mb-2">UI/UX</h3>
          <p className='w-[20rem]'>Crafting seamless and captivating digital experiences through user-centered design.</p>
        </div>
        <div className="     rounded-md p-6 text-center flex items-center flex-col">
         
          <h3 className="text-xl font-bold mb-2">Reliable Hosting</h3>
          <p className='w-[20rem]'>High-speed, secure hosting with 24/7 support. Maximum uptime and scalability guaranteed.</p>
        </div>
        <div className="     rounded-md p-6 text-center flex items-center flex-col">
       
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p className='w-[20rem]'>Designing engaging and user-centric app interfaces that captivate and delight users.</p>
        </div>
        <div className="     rounded-md p-6 text-center flex items-center flex-col">
          
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className='w-[20rem]'>Bringing visual concepts to life with innovative and impactful designs as a web developer.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
