import React from 'react'
import ReactSimplyCarouselExample from './CarouselCom'


export default function Testimonials() {
  return (
    <div className="container mx-auto p-6 " >
    <h2 className="text-4xl font-bold text-center mb-6">Testimonial<span className='text-[#87d628]'>s</span> </h2>
    <p className=" text-start lg:text-center mb-12">
    Clients rave about our app and web development services, as well as our UI and UX design expertise. They appreciate our ability to consistently deliver exceptional results that elevate their brands and captivate their target audience
    </p>
    <div>

    </div>
<div className='my-[1rem] '>
<ReactSimplyCarouselExample/>
</div>
  </div>
  )
}
