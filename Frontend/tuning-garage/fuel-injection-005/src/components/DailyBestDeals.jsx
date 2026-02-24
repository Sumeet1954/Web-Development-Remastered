import React, { useState } from "react";
import "../styles/DailyBestDeals.css";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const DailyBestDeals = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      category: "All",
      itemsAvailable: 120,
      price: 28.85,
      originalPrice: 32.8,
      rating: 4.0,
      vendor: "NestFood",
    },
    {
      id: 2,
      name: "All Natural Italian-Style Chicken Meatballs",
      category: "Sale",
      itemsAvailable: 80,
      price: 52.85,
      originalPrice: 55.8,
      rating: 3.5,
      vendor: "Stouffer",
    },
    {
      id: 3,
      name: "Angie’s Boomchickapop Sweet & Salty ",
      category: "New",
      itemsAvailable: 90,
      price: 48.85,
      originalPrice: 52.8,
      rating: 4.0,
      vendor: "StarKist",
    },
    {
      id: 4,
      name: "Foster Farms Takeout Crispy Classic Buffalo ",
      category: "Vegetables",
      itemsAvailable: 60,
      price: 17.85,
      originalPrice: 19.8,
      rating: 4.0,
      vendor: "NestFood",
    },
    {
      id: 5,
      name: "Blue Diamond Almonds Lightly Salted Vegetables",
      category: "Pet Foods",
      itemsAvailable: 70,
      price: 23.85,
      originalPrice: 25.8,
      rating: 4.0,
      vendor: "NestFood",
    },
    {
      id: 6,
      name: "Chobani Complete Vanilla Greek Yogurt",
      category: "Hodo Foods",
      itemsAvailable: 50,
      price: 54.85,
      originalPrice: 55.8,
      rating: 4.0,
      vendor: "NestFood",
    },
    {
      id: 7,
      name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      category: "Meats",
      itemsAvailable: 40,
      price: 32.85,
      originalPrice: 33.8,
      rating: 4.0,
      vendor: "NestFood",
    },
    {
      id: 8,
      name: "Encore Seafoods Stuffed Alaskan Salmon",
      category: "Sale",
      itemsAvailable: 35,
      price: 35.85,
      originalPrice: 37.8,
      rating: 4.0,
      vendor: "NestFood",
    },
    {
      id: 9,
      name: "Gorton’s Beer Battered Fish Fillets with soft paper",
      category: "Hot",
      itemsAvailable: 45,
      price: 23.85,
      originalPrice: 25.8,
      rating: 4.0,
      vendor: "Old El Paso",
    },
  ];
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
              {featuredProducts.map((item) => (
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
                        {"⭐".repeat(Math.round(item.rating))} ({item.rating})
                      </p>

                      <h6>
                        By <span>{item.vendor}</span>
                      </h6>

                      <div className="popular-bottom-card">
                        <h2>${item.price}</h2>
                        <Button text="Add" />
                      </div>
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
