import { navlinks } from '@/Constant/Constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import React from 'react'

type props={
  showNav:boolean;
  closeNav : ()=>void
}

const MobileNavbar = ({closeNav,showNav}:props) => {
  const controlnav=showNav?"translate-x-0":"translate-x-[-100%]"
  return (
    <div>
      <div className={`fixed ${controlnav} inset transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      <div className={`text-white ${controlnav} fixed justify-center flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {navlinks.map((link)=>{
          return(
            <Link key={link.id} href={link.url}>
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
            </Link>
          )
        })}
         <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' onClick={closeNav}/>
      </div>
    </div>
  )
}

export default MobileNavbar
