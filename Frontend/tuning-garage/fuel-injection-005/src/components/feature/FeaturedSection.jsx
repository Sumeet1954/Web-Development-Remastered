import React from "react";
import "../../styles/FeaturedSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import FeatureCard from "./FeatureCard";
import FeatureMonoRepo from "./FeatureMonoRepo";
import {
  featureCardItems,
  featureCardOptional,
} from "../../data/featureCardData";

const FeaturedSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="feature-sec">
          <div className="feature-sec-title">
            <h2>Featured Categories</h2>
            <div className="feature-sec-des">
              <a href="">Cake & Milk</a>
              <a href="">Coffes & Teas</a>
              <a href="">Pet Foods</a>
              <a href="">Vegetables</a>
            </div>
          </div>
          <div className="feature-sec-icons">
            <i className="ri-arrow-left-line swiper-prev"></i>
            <i className="ri-arrow-right-line swiper-next"></i>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          330: { slidesPerView: 2 },
          375: { slidesPerView: 2 },
          425: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1440: { slidesPerView: 8 },
        }}
        loop={true}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <div className="container-fluid feature-card-main">
          {featureCardItems.map((item, index) => (
            <SwiperSlide>
              <FeatureMonoRepo
                key={index}
                img={item.img}
                name={item.name}
                itemsAvailable={item.itemsAvailable}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="container-fluid feature-extra-head">
        <div className="row feature-extra-main">
          {featureCardOptional.map((card) => (
            <FeatureCard
              key={card.id}
              title={card.title}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;
