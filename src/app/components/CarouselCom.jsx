"use client"
import Image from 'next/image';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        dotsNav= {
          {
          show: true, // to toggle the visibility of the dots navigation
          containerProps: {
            style: { 
              display: 'flex', 
              justifyContent: 'center',  
              bottom: '10px', 
              width: '100%',
              color:'red'
       
            },
            className: 'dots-nav-container'
          },
          itemBtnProps: {
            style: {
              width: '15px',
              height: '7px',
              margin: '0 5px',
              borderRadius: '30%',
              backgroundColor: '#ccc',
              cursor: 'pointer'
            },
            className: 'dots-nav-item'
          },
          activeItemBtnProps: {
            style: {
              width: '25px',
              height: '7px',
              borderRadius: '30%',
              backgroundColor: '#87d628'
            },
           
            className: 'dots-nav-item-active'
          }}
        }
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
       
       { [0,1,2,3,4,5,6].map((i,index)=>(
          <>
         {activeSlideIndex+1 == index?
         
         <div className='blur-none'>
         <div className=' flex justify-center flex-col items-center bg-[#FFE4B5] w-[18rem] h-[15rem] m-4 border border-4  border-[#87d628] realtive '>
       <div className='flex justify-center flex-row'>
       <Image src={'/r1.png'}  width={100} height={100} className='z-[1000] absolute top-[0rem] border-t-4 shadow-lg rounded-[50%]'/>
    
     
       </div>
       <Image src={'/inverted2.png'}  width={60} height={60} className='z-[1000] absolute top-[0rem]  left-[10%]'/>
       <Image src={'/inverted1.png'}  width={60} height={60}  className='z-[1000] absolute top-[0rem]   right-[10%]'/>
         {index}
         <h1>.</h1>
         <h1 >.</h1>
         <h2>ceo</h2>
         <p className='text-[10px] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa excepturi maiores voluptate ipsam dolorum, neque commodi in velit culpa placeat quod facere distinctio optio doloribus quisquam voluptas? Quam, temporibus?</p>
       </div>
      </div>:
         
       <div className='blur-none lg:blur-[2px]'>
          <div className=' flex justify-center flex-col items-center bg-[#FFE4B5] w-[18rem] h-[15rem] m-4 border border-4  border-[#87d628] realtive '>
        <div className='flex justify-center flex-row'>
        <Image src={'/r1.png'}  width={100} height={100} className='z-[1000] absolute top-[0rem] border-t-4 shadow-lg rounded-[50%]'/>
     
      
        </div>
        <Image src={'/inverted2.png'}  width={60} height={60} className='z-[1000] absolute top-[0rem]  left-[10%]'/>
        <Image src={'/inverted1.png'}  width={60} height={60}  className='z-[1000] absolute top-[0rem]   right-[10%]'/>
          {index}
          <h1>.</h1>
          <h1 >.</h1>
          <h2>ceo</h2>
          <p className='text-[10px] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa excepturi maiores voluptate ipsam dolorum, neque commodi in velit culpa placeat quod facere distinctio optio doloribus quisquam voluptas? Quam, temporibus?</p>
        </div>
       </div>
        }
          </>
        ))}
     
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;