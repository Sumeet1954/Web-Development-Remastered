import React from "react";
import "../styles/FeaturedSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Button from "./Button";
const FeaturedSection = () => {
  const featuredProducts = [
    { id: 1, name: "Vegetables", itemsAvailable: 120, img: "cat-1.png" },
    {
      id: 2,
      name: "Strawberry",
      itemsAvailable: 80,
      img: "cat-2.png",
    },
    {
      id: 3,
      name: "Snack",
      itemsAvailable: 90,
      img: "cat-3.png",
    },
    {
      id: 4,
      name: "Black Plum",
      itemsAvailable: 60,
      img: "cat-4.png",
    },
    { id: 5, name: "Custurd Apple", itemsAvailable: 70, img: "cat-5.png" },
    {
      id: 6,
      name: "Organic Kiwi",
      itemsAvailable: 50,
      img: "cat-6.png",
    },
    { id: 7, name: "Peach", itemsAvailable: 40, img: "cat-7.png" },
    {
      id: 8,
      name: "Headphones",
      itemsAvailable: 35,
      img: "cat-15.png",
    },
    { id: 9, name: "Plants", itemsAvailable: 45, img: "cat-8.png" },
    { id: 10, name: "Red Apple", itemsAvailable: 25, img: "cat-9.png" },
    {
      id: 11,
      name: "Red Chilli",
      itemsAvailable: 120,
      img: "cat-10.png",
    },
    {
      id: 12,
      name: "Strawberry",
      itemsAvailable: 80,
      img: "cat-11.png",
    },
    {
      id: 13,
      name: "Teas",
      itemsAvailable: 90,
      img: "cat-12.png",
    },
    {
      id: 14,
      name: "Cake & Milk",
      itemsAvailable: 60,
      img: "cat-13.png",
    },
    {
      id: 15,
      name: "Coffea & Teas",
      itemsAvailable: 70,
      img: "cat-14.png",
    },
  ];

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
          1024: { slidesPerView: 4 },
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
          {featuredProducts.map((item, index) => (
            <SwiperSlide>
              <div className="feature-card" key={index}>
                <img src={item.img} alt="" />
                <h6>{item.name}</h6>
                <p>{`${item.itemsAvailable} items`}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="container-fluid feature-extra-head">
        <div className="row feature-extra-main">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="feature-extra" id="fe">
              <h2>
                Everyday Fresh & <br />
                Clean with Our <br /> Products
              </h2>

              <Button text="Shop Now" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="feature-extra" id="fe-1">
              <h2>
                Make your Breakfast <br />
                Healthy and Easy
              </h2>
              <Button text="Shop Now" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="feature-extra" id="fe-2">
              <h2>
                The best Organic <br />
                Products Online
              </h2>
              <Button text="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;
