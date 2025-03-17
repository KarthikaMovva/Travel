import React from 'react';
import SectionHeading from './SectionHeading';
import { ProjectsData } from '@/Data/Data';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <div className='pt-20 pb-20'>
        <SectionHeading heading='My Projects'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
            {ProjectsData.map((data,i)=>{
                return(
                    <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={` ${i*100} `}>
                      <ProjectCards projects={data}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects
