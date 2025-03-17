"use client";
import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import {EffectCards} from "swiper/modules";
import { ProjectsData } from '@/Data/Data';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const CardSlider = () => {
  return (
    <div>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]'>
         {ProjectsData.map((data)=>(
            <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
                <div className='w-[80%] mx-auto mt-16'>
                    <p className='text-xs sm:text-sm md:text-base font-semibold'>{data.name}</p>
                    <div className='flex items-center mt-4'>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600'/>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600'/>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600'/>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center space-x-4'>
                            <Image src={data.image} alt="image" width={60} height={60} className='rounded-full'/>
                            <div>
                                <p className='text-sm sm:text-lg font-semibold'>{data.name}</p>
                                <p className='text-gray-600 text-xs sm:text-base'>Website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
         ))}
      </Swiper>
    </div>
  )
}

export default CardSlider
