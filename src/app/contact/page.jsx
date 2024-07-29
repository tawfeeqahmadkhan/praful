"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { GoDiscussionClosed } from "react-icons/go";
import { MdNoteAlt } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
export default function Page() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (event) => {
    const newValue = event.target.value;
    setProgress(newValue);
  }
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryList = data.map(country => ({
          name: country.name.common,
          code: country.cca2,
          callingCode: country.idd?.root ? country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '') : ''
        }));
        setCountries(countryList);
        console.log(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);
  const data = [
    {
        id:1,
        icon:<GoDiscussionClosed />,
        title:"Discuss your plans",
        des:"Be apparent while discussing what you have desired for. We welcome all your dreams to transform them into virtual reality and existence."
    },
    {
        id:2,
        icon:<MdNoteAlt />,
        title:"Realize the industrial approach",
        des:"We receive your requirements and form a blueprint of the solution. We discuss, amend, present, and repeat, till the client gets satisfied."
    },
    {
        id:3,
        icon:<FaRegHandshake />,
        title:"Attain the success",
        des:"Since we respect the client’s desire, we ensure that each solution resembles perfection. We ensure the reliability of your online presence with our efforts.."
    },

]
  return (
    <> 
      <div className=" w-[100vw] bg-[url('/office2.png')] bg-no-repeat bg-w-[100vw] lg:bg-contain overflow-x-hidden ">
      <div className="bg-black  bg-opacity-[70%] text-white">
    <Header   />
    <div className=" flex  flex-col  w-[99vw]   lg:h-[19rem]  p-1 lg:p-8 gap-4 pl-4 lg:pl-8 ">
      <h1 className='text-start font-bold lg:text-2xl   '>Kickstart Your Digital Journey <span className='text-[#87d628]'>Today</span> </h1>
      <p className='text-start  text-sm w-[90%] lg:w-[50%]'>Your Digital Presence is Important of today&apos;s Industry. Don&apos;t Let anyone overtake your Existence.</p>
      <p className='text-start  text-sm lg:w-[50%]'>we can lead you in the Digital World by Being your technology partner</p>
    </div>
    </div>
      </div> 
      <div className='flex  justify-center flex-col lg:flex-row  items-center w-[100vw]'>
       <div className=" flex w-[98vw]  lg:w-[50%] lg:h-[30rem] justify-center lg:items-center  "
       >
      <div>
    
     <div className='flex   flex-col text-lg my-2 text-black'>
       <h1 className='font-bold   lg:w-[30rem] text-2xl'>Get In <span className='text-[#87d628]'>Touch</span></h1>    
        
        <h1 className='  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-lg '><FaPhoneAlt /></span> +00, 123456789</h1>          
        <h1 className='  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-lg font-bold'><FaWhatsapp /></span>  +00, 987654321</h1>          
        <h1 className='  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-lg font-bold'><AiOutlineMail /></span>example@gmail.com</h1>
        <h1 className='  lg:w-[30rem] py-2 flex items-center gap-2'> <span className='text-[#87d628] text-lg '><FaSkype /></span> sales@example.skype</h1>
        </div>

      </div>
       </div>
       <div className=" flex items-center  justify-center  lg:items-center  w-[100%]  lg:w-[40%] border  lg:justify-center   rounded-[1rem] shadow-lg p-2 " >
       <div>
       <h1 className='w-[100%] text-center font-bold text-2xl bg-[#87d628] text-white'>Request a proposal</h1>
    <form className='flex flex-wrap bg-white'>
      <input type='text' name='name' placeholder='Name' required className='m-2 p-2  rounded-lg shadow-lg'/>
      <input type='email' name='email' placeholder='Email' required className='m-2 p-2  rounded-lg shadow-lg'/>
      <input type='text' name='skype' placeholder='Skype' className='m-2 p-2  rounded-lg shadow-lg'/>
      <input type='text' name='subject' placeholder='Subject' required className='m-2 p-2 w-[10rem] rounded-lg shadow-lg'/>
      
    </form>
    <div className='flex  flex-col lg:flex-row w-[100%] lg:items-center gap-8'>
     <div className=' flex border items-center w-[65%] lg:w-[50%] bg-white'> 
     <span className='w-[100%]'> 
      <select
        required
        id="country-select"
        name="country"
        style={{ width: '100%' }}
      >
        {countries?.map((item, index) => (
          <option value={item.country} key={index} name="country" onClick={()=>setSelectedCountries(item.name)}  >
            {item.callingCode} {item.name}
          </option>
        ))}
      </select></span>
     <input type='text' name='number' placeholder='Mobile Number' required className='m-2 p-2 w-[10rem] rounded-lg shadow-lg'/>
     </div>
     <div className='w-[50%] cursor-pointer bg-white'>
      <p className='text-sm'>Approx. budget: {progress}00 USD</p>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={progress} 
        onChange={handleProgressChange} 
        height={20}
        className='w-[80%]'
      />
     </div>
     
    </div>
    <div className='flex itmes-center flex-col py-4 gap-4 '>
      <p>What are you Looking for ?</p>
      <textarea name='message' cols={10} rows={5} placeholder='Your Message*' className='w-[100%] border p-2 shadow-lg'/>
      <button className='bg-[#87d628] text-white w-[50%] h-[2rem] rounded-lg '>Send Your Inquiry</button>
     </div>
     
        </div>
       </div>
     
       </div>
       <div className="flex items-center flex-col  bg-gray-100 gap-4 py-4 mt-4 ">
        <h1 className="font-bold text-lg">We are here to <span className="text-[#87d628]"> help</span></h1>
        <p className="w-[90vw] text-sm text-gray-900 lg:px-[6rem]">Wantech is always set to serve the clients. Every client and project adds some expertise to our portfolio. We have delivered several projects and gained relevant experiences. Have a sneak peek into a few of them. Many more to come and miles to go as we do have much in our quiver.</p>
        <div className="flex flex-row   justify-center gap-4 lg:gap-16 flex-wrap pb-4 ">
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
       <Footer/>
    </>

  )
}
