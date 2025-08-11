import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 p-4 text-white'>
      <div className="p-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <div className="">
           <Link href="/">
          <Image className='h-20 w-auto object-cover' src="/meridian.png" alt='logo' width={800} height={800} />
          </Link>

          <p className='mb-4'>Meridian Freight Logistics</p>
          <p className="text-white text-[10px] sm:text-[12px]">No.233, Vauxhall Street, Colombo 02.</p>
        </div>
        <div className="flex flex-col">

          <h6 className='mb-4'>Useful Links</h6>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/about">Track Shipment</Link>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/affiliate">about us</Link>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/gallery">Services</Link>
          <Link className='mb-3 text-[1.2rem] md:text-[1.3rem]' href="/contact">Contact</Link>
        </div>

        <div className="">
           <div className="">
              <p className='mb-4'>Get In Touch with</p>
              <div className="flex gap-4">
                  <FaFacebook className='text-4xl text-blue-700' />
                  <FaInstagram className='text-4xl text-blue-700' />
                  <FaLinkedin className='text-4xl text-blue-700' />
              </div>
            </div>
        </div>

        <div className="">
          <h6 className='mb-4'>Get the latest newsletters</h6>

          <form action="">
            <Input className='py-6 px-2 mb-4' name='' placeholder='john@example@gmail.com'  />
            <Button className='p-6'>Subscribe</Button>
          </form>
        </div>


      </div>

      <div className="">
        <p className='text-center'>Powered by Meridian Freight Logistics pvt ltd.</p>
      </div>
      </div>

    </div>
  )
}

export default Footer