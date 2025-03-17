import React from 'react'
import SectionHeading from './SectionHeading';
import RolesCards from './RolesCards';

const Roles = () => {
  return (
    <div className='pt-16 pb-24'>
      <SectionHeading heading='Fimiliar with'/>
      <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <RolesCards image="/images/web developer.webp" title="Web Development"/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="150">
            <RolesCards image="/images/app development.png" title="App Development"/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <RolesCards image="/images/web developer.webp" title="learn Something"/>
        </div>
      </div>
    </div>
  )
}

export default Roles
