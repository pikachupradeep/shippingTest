import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const NavTopBar = () => {
  return (
    <div className='bg-blue-900 h-[3rem] flex justify-center items-center gap-8 z-50'>
      <div className="flex gap-3">
        <FaFacebook size={20} className='text-white cursor-pointer' />
        <FaInstagram size={20} className='text-white cursor-pointer' />
        <FaLinkedin size={20} className='text-white cursor-pointer' />
      </div>

      <div className="">
        <p className='text-white text-[12px]'>Phone: 077-1234567</p>
      </div>
    </div>
  )
}

export default NavTopBar