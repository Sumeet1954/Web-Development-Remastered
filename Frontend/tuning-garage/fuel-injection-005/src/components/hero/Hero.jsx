import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/Hero.css";

import HeroSlide from "./HeroSlide.jsx";
import HeroNavigation from "./HeroNavigation.jsx";
import { heroSlides } from "../../data/heroData.js";
const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <HeroNavigation prevRef={prevRef} nextRef={nextRef} />
    </section>
  );
};

export default Hero;
