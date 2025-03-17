"use client"
import React,{useState} from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
  const[nav,setnav]=useState(false);

  const handlenav=()=>{
    setnav(true)
  }

  const closenav=()=>{
    setnav(false)
  }
  return (
    <div>
      <Navbar openNav={handlenav} />
      <MobileNavbar showNav={nav} closeNav={closenav}/>
    </div>
  )
}

export default ResponsiveNavbar
