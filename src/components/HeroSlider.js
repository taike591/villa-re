import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";

import Img1 from "../assets/img/heroSlider/1.jpg";

import Img2 from "../assets/img/heroSlider/2.jpg";

import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "Room & Suites",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((silde, index) => {
        const { title, bg, btnText } = silde;
        return (
          <SwiperSlide
            className="h-full bg-pink-200 relative justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className=" uppercase font-tertiary tracking-[6px] mb-5 ">
                Just EnJoy and Relax
              </div>
              <h1>{title}</h1>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
