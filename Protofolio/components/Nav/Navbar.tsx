"use client"
import { navlinks } from '@/Constant/Constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type props={
  openNav:()=>void
}

const Navbar = ({openNav}:props) => {

  const[bg,setbg]=useState(false)

  useEffect(()=>{
    const handlebar=()=>{
      if(window.scrollY>=90){
        setbg(true)
      }if(window.scrollY<90){
        setbg(false)
      }
    }
    window.addEventListener('scroll',handlebar)
    return ()=>window.removeEventListener('scroll',handlebar)
  },[])
  return (
    <div className={`${bg?'shadow-md bg-blue-950':'fixed'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center'>
            <TbAirBalloon className='w-6 h-6 text-white'/>
          </div>
          <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Protofolio</h1>
        </div>
        <div className='hidden lg:flex items-center space-x-10'>
          {navlinks.map((link) => (
            <Link href={link.url} key={link.id} className="relative">
              <p className='text-white text-base font-medium w-fit block relative after:block after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left'>
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer'>Book Now</button>
          <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden' onClick={openNav}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
