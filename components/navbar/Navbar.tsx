'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SheetDemo } from './MobileToggle';

const navLinks = [
  {id:"1", name: 'Home', href: '/' },
  {id:"2", name: 'About', href: '/about' },
  {id:"3", name: 'Services', href: '/services' },
  {id:"5", name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);

  return (
    <header className=" bg-blue-950 shadow-sm h-[6rem] w-full flex items-center justify-between pl-4 pr-6">
    <div className="flex flex-row-reverse items-center">
      <Link href="/">
      <Image className='h-20 w-auto object-cover' src="/meridian.png" alt='logo' width={800} height={800} />
      </Link>
      <div className="text-yellow-500 font-extrabold text-[14px] leading-6">Meridian <br/> <span className='text-[14px]'>Freight</span> <br/> Logistics</div>
    </div>

    <ul className='hidden sm:flex gap-18'>
     {navLinks.map((link)=>(
      <li key={link.id}>
        <Link className='text-[1.3rem] text-white' href={link.href}>{link.name}</Link>
      </li>
     ))}
    </ul>

     <div className="sm:hidden">
      <SheetDemo />
     </div>
    </header>
  );
}
