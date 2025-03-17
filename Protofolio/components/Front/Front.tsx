"use client";
import React, { useEffect } from 'react'
import Main from './Main';
import Skills from './Skills';
import Projects from './Projects';
import Roles from './Roles';
import MoreProjects from './MoreProjects';
import Mail from './Mail';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Front = () => {

  useEffect(()=>{
const animate=async()=>{
await import('aos');
AOS.init({
  duration : 1000,
  easing : 'ease',
  once : true,
  anchorPlacement : 'top-bottom'
})
};
animate();
  },[])
  return (
    <div className='overflow-hidden'>
      <Main/>
      <Skills/>
      <Projects/>
      <Roles/>
      <MoreProjects/>
      <Mail/>
    </div>
  )
}

export default Front
