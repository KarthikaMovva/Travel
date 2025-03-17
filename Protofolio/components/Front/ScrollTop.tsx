"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
    const[display,setdisplay]=useState(false);

    useEffect(()=>{
   const toggel=()=>{
    if(window.scrollY>100){
        setdisplay(true);
    }else{
        setdisplay(false)
    }
   }
   window.addEventListener("scroll",toggel);
   return ()=>window.removeEventListener("scroll",toggel)
    },[]);

const scroll=()=>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}
  return (
    <div className='fixed bottom-4 animate-pulse right-3'>
      {display && <button onClick={scroll} className='bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
        <FaArrowUp/>
        </button>}
    </div>
  )
}

export default ScrollTop

