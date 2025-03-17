import React from 'react';
import CardSlider from './CardSlider';

const MoreProjects = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <h1 className='text-2xl font-semibold text-white'>Want to view more projects?</h1>
            <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis eligendi rerum neque eum, laborum aperiam voluptate? Beatae temporibus, quos nihil officia tempore neque vel assumenda cum, aliquid corrupti rem!</p>
          </div>
          <div className='overflow-hidden'>
               <CardSlider/>
          </div>
      </div>
    </div>
  )
}

export default MoreProjects
