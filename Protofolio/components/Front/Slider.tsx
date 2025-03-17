"use client";
import { skillsData } from '@/Data/Data';
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Slider = () => {
  return (
   <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true}>
    {skillsData.map((data)=>{
      return(
        <div key={data.id} className='m-3'>
          <div className='relative h-[300px]'>
             <div className='absolute inset-0 rounded-lg'></div>
             <Image src={data.image} alt={data.name} width={500} height={500} className="h-[70%] w-full object-cover rounded-lg"/>
          </div>
          {/* <h1 className='text-lg font-semibold'>{data.name}</h1> */}
        </div>
      )
    })}
   </Carousel>
  )
}

export default Slider
