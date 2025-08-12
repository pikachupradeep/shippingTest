// pages/index.tsx or wherever this component lives
'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default function Intro() {
  return (
    <main className="min-h-screen dark:bg-gray-900 dark:text-white max-w-[1280px] mx-auto">

      {/* Hero Section */}
      <AnimatedSection>
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-4xl md:text-5xl font-bold">
              Meridian Freight Logistics (Pvt) Ltd
            </h4>
            <p className="text-lg dark:text-gray-300">
              Delivering trusted sea freight services from Sri Lanka to the world. Safe, timely, and professional logistics tailored to your business.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Values Section */}
      <AnimatedSection>
        <section className="px-6 md:px-16 py-12">
          <h4 className="text-3xl font-semibold mb-6">
            What’s special about Meridian Freight Logistics?
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-xl font-semibold">Credibility You Can Count On</h5>
              <p className="mt-2">
                Our longstanding relationships and proven track record make us a trusted name in the logistics industry.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold">Transparency at Every Step</h5>
              <p className="mt-2">
                From booking to delivery, we keep you informed and in control of your shipment—no hidden costs or unclear timelines.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold">Tailored Solutions</h5>
              <p className="mt-2">
                Every shipment is unique. We adapt our services to match your business goals, budget, and cargo type.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold">Professionally Managed</h5>
              <p className="mt-2">
                Our experienced team ensures your cargo is handled with precision, safety, and professionalism from start to finish.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Office Overview Section */}
      <AnimatedSection>
        <section className="px-6 md:px-16 py-12 dark:bg-gray-800">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Image - Client Reception Area */}
            <div className="flex-1">
              <Image
                width={600}
                height={600}
                src="/cat2.jpg"
                alt="Client Reception Area"
                className="rounded-md shadow-md w-full"
              />
              <h5 className="text-xl font-semibold mt-4 mb-2">Client Reception Area</h5>
              <p>
                Where clients are welcomed and introduced to our team. This space reflects our values of hospitality and open communication.
              </p>
            </div>

            {/* Center Text Block */}
            <div className="flex-1 space-y-4 text-justify">
              <h5 className="text-xl font-semibold">Our Office</h5>
              <p>
                Located in the heart of Colombo, our office serves as the central hub for all operational planning, communication, and coordination. It's not just a workplace — it’s a well-structured environment that reflects our dedication to precision, transparency, and service excellence.
              </p>
              <p>
                We believe a well-organized team starts with a well-designed space. Our facility supports streamlined communication between departments and ensures every shipment is tracked, managed, and delivered with care.
              </p>
              <p>
                Whether it's a client meeting at our reception or backend planning in our operations room, every corner of our office reflects our commitment to professionalism in global logistics.
              </p>
            </div>

            {/* Right Image - Operations Department */}
            <div className="flex-1">
              <Image
                width={600}
                height={600}
                src="/cat4.jpg"
                alt="Operations Department"
                className="rounded-md shadow-md w-full"
              />
              <h5 className="text-xl font-semibold mt-4 mb-2">Operations Department</h5>
              <p>
                The engine room of our operations—where coordination, shipment tracking, and client updates happen in real time.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

    
    </main>
  );
}
