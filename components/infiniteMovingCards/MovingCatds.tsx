"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h4 className="text-center">What they say about us</h4>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Meridian Freight Logistics handled our shipment flawlessly. Their sea freight service is reliable, fast, and stress-free. Highly recommended!",
    name: "Emily Carter",
    title: "Logistics Manager, Horizon Imports",
    img: "/nat1.png",
  },
  {
    quote:
      "We've partnered with Meridian Freight Logistics for over three years. Their professionalism and attention to detail are unmatched in the shipping industry.",
    name: "James Liu",
    title: "Operations Director, Pacific Traders",
    img: "/nat1.png",
  },
  {
    quote:
      "Meridian's tracking system kept us updated in real-time, and their support team was always ready to assist. Outstanding experience from start to finish!",
    name: "Sofia Martinez",
    title: "CEO, Global Goods Co.",
    img: "/nat1.png",
  },
  {
    quote:
      "Our cargo arrived on time and in excellent condition. Meridian Freight Logistics truly understands international shipping and customer care.",
    name: "Ahmed El-Sayed",
    title: "Founder, Red Sea Exports",
    img: "/nat1.png",
  },
  {
    quote:
      "What sets Meridian apart is their commitment to excellence. We received competitive rates, excellent service, and timely deliveries every time.",
    name: "Linda Thompson",
    title: "Procurement Lead, Atlantic Supply Chain",
    img: "/nat1.png",
  },
];
