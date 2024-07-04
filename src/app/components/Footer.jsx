"use client"
import React from 'react';

import 'primeicons/primeicons.css';
import Link from 'next/link';

        
const Footer = () => {
  return (
    <footer className="bg-yellow-200 py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <img src="Wantech.gif" alt="Logo" className="h-10 mr-2 w-[10rem] h-[10rem]" />
            <h1 className="text-xl font-bold text-[#87d628]">Wantech</h1>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-4 text-gray-700 flex-wrap justify-center">
              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About me</a></li>
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
           
            <i className="pi pi-facebook text-[#87d628] text-[2rem] cursor-pointer"></i>
          <i className="pi pi-instagram text-[#87d628] text-[2rem]"></i>
          <i className="pi pi-github text-[#87d628] text-[2rem]"></i>
          <i className="pi pi-twitter text-[#87d628] text-[2rem]"></i>
          <i className="pi pi-linkedin text-[#87d628] text-[2rem]"></i>
        </div>
          <div className="text-purple-600 text-sm ">
            © 2023 <span className="text-[#87d628] font-bold">Wantech</span> All Rights Reserved, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;