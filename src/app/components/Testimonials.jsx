import React from 'react'
import ReactSimplyCarouselExample from './CarouselCom'
export default function Testimonials() {
  return (
    <div className="px-10 " >
    <h2 className="text-4xl font-bold text-center mb-6">Testimonial<span className='text-[#87d628]'>s</span> </h2>
  <div  className="flex ">
  <p className="flex   flex-start lg:px-[2rem]  ">Clients rave about our app and web development services, as well as our UI and UX design expertise.They appreciate our ability to consistently deliver exceptional result
    </p>
  </div>
    <div>
    </div>
<div className='my-[1rem] '>
<ReactSimplyCarouselExample/>
</div>
  </div>
  )
}
