'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './hero.css';
import Button from '../button/Button';
import { GiCargoShip } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="w-full h-screen hero flex items-center justify-center p-8">
      <div className="max-w-xl lg:max-w-4xl mx-auto mt-[7rem]">
        <h2 id="font-family" className='text-2xl sm:text-4xl text-center
         font-extrabold text-white mb-4 leading-18'>Navigating <span style={{color:"yellow"}}>Global Trade</span>  with Confidence</h2>
        <p className='text-white text-center'>Reliable sea freight solutions tailored to your business needs</p>
        <div className="w-full flex justify-center mt-4">
          <Button> <GiCargoShip /> Track Shipment</Button>
        </div> 
      </div>
    </section>
  );
}
