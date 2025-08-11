'use client'
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    cssEase: "linear",
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <span className="text-white text-[10px] sm:text-[12px]">Meridian Freight Logistics (pvt) Ltd.</span>
        </div>
        <div>
          <span className="text-white text-[10px] sm:text-[12px]">Phone:0777 196 388</span>
        </div>
        <div>
          <span className="text-white text-[10px] sm:text-[12px]">No.233, Vauxhall Street, Colombo 02.</span>
        </div>
       <div>
          <span className="text-white text-[10px] sm:text-[12px]">Meridian Freight Logistics</span>
        </div>
        <div>
          <span className="text-white text-[10px] sm:text-[12px]">Phone:0777 196 388</span>
        </div>
        <div>
          <span className="text-white text-[10px] sm:text-[12px]">No.233, Vauxhall Street, Colombo 02.</span>
        </div>
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
