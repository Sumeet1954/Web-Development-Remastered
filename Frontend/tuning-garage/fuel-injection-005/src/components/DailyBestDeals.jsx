import React, { useState } from "react";
import "../styles/DailyBestDeals.css";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import AddToCartBtn from "./AddToCartBtn";
import { productCard } from "../data/productData";

const DailyBestDeals = () => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <>
      <div className="container-fluid">
        <div className="daily-best">
          <h1>Daily Best Deals</h1>

          <div className="daily-best-2">
            <a href="">Featured</a>
            <a href="">Popular</a>
            <a href="">New added</a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 daily-best-card-left">
            <img src="banner-4.png" alt="" />
            <div className="db-card-left-data">
              <h2>Bring nature into your home </h2>
              <Button text="Shop Now" />
            </div>
          </div>

          {/* Cards  */}
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
            >
              {productCard.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="popular-cards">
                    <div className="popular-cards-cnt">
                      <img
                        src={`product-${item.id}-${hoveredId === item.id ? 2 : 1}.jpg`}
                        alt={item.name}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      />

                      <p>{item.category}</p>
                      <h2>{item.name}</h2>
                      <p>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i> ({item.rating})
                      </p>
                      <div className="popular-bottom-card">
                        <h2>${item.price}</h2>
                      </div>

                      <div className="popular-bottom-card-outer">
                        <div className="popular-bottom-card-inner"></div>
                      </div>
                      <p>
                          {item.itemsAvailable}/120
                      </p>

                      <AddToCartBtn />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyBestDeals;
