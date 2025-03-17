import React from 'react'
import SectionHeading from './SectionHeading'
import Slider from './Slider'

const Skills = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectionHeading heading='Skills'/>
      <div className='mt-14 w-[80%] mx-auto'>
        <Slider/>
      </div>
    </div>
  )
}

export default Skills
