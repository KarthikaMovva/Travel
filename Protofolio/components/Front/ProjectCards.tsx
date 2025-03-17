import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

type Props={
    projects : {
        id: number;
    image: string;
    name: string;
    description: string;
    }
}

const ProjectCards = ({projects}:Props) => {
  return (
    <div>
      <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
        <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col'>
            <FaHeart className='w-3 h-3'/>
        </div>
        <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
        <Image src={projects.image} alt={projects.name} width={300} height={300} className='overflow-hidden h-full transition-all duration-300 object-cover group-hover:scale-110'/>
      </div>
      <div>
        <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200'>{projects.name}</h1>
        <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>{projects.description}</p>
      </div>
    </div>
  )
}

export default ProjectCards
