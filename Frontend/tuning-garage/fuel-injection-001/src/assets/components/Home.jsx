import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. ",
    name: "Rhodhes Jhon",
    image: "author-1.png",
    rating: 5,
  },
  {
    text: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. ",
    name: "Alex Smith",
    image: "author-2.png",
    rating: 4,
  },
  {
    text: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. ",
    name: "Emily Clark",
    image: "author-1.png",
    rating: 5,
  },
];
const products = [
  { img: "category-1.png", title: "Man shirts" },
  { img: "category-2.png", title: "Denim Jeans" },
  { img: "category-3.png", title: "Casual Suit" },
  { img: "category-4.png", title: "Summer Dress" },
  { img: "category-5.png", title: "Sweaters" },
  { img: "category-6.png", title: "Jackets" },
];
const discount = [
  {
    discount: "70%",
    description: "Exclusive Kids & Adults <br /> Summer Outfits",
    image: "banner-1.png",
  },
  {
    discount: "50%",
    description: "Exclusive Kids & Adults <br /> Summer Outfits",
    image: "banner-2.png",
  },
];

const featuredProducts = [
  {
    img: "feature-product-1.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Lightweight linen summer dress with belt",
  },
  {
    img: "feature-product-2.png",
    oldPrice: "$67.00",
    newPrice: "$23.00",
    text: "Cozy knit sweater with pockets",
  },
  {
    img: "feature-product-3.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Athletic leggings with mesh panels",
  },
  {
    img: "feature-product-4.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Athletic leggings with mesh panels",
  },
  {
    img: "feature-product-2.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Athletic leggings with mesh panels",
  },
  {
    img: "feature-product-2.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Athletic leggings with mesh panels",
  },
  {
    img: "feature-product-4.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Athletic leggings with mesh panels",
  },
  {
    img: "feature-product-2.png",
    oldPrice: "$80.00",
    newPrice: "$40.00",
    text: "Athletic leggings with mesh panels",
  },
];

const workingSteps = [
  {
    title: "Browsing & Choosing",
    desc: "This is where customers visit your online store, browse your products.",
  },
  {
    title: "Checkout & Payment",
    desc: "Once they have picked their items, customers proceed to checkout.",
  },
  {
    title: "Browsing & Choosing",
    desc: "This is where customers visit your online store, browse your products.",
  },
  {
    title: "Checkout & Payment",
    desc: "Once they have picked their items, customers proceed to checkout.",
  },
];

const trendingProducts = [
  { img: "trending-product-2.png", title: "Cozy knit sweater with pockets" },
  { img: "trending-product-1.png", title: "Cozy knit sweater with pockets" },
  { img: "trending-product-3.png", title: "Cozy knit sweater with pockets" },
  { img: "trending-product-4.png", title: "Cozy knit sweater with pockets" },
  { img: "trending-product-5.png", title: "Cozy knit sweater with pockets" },
  { img: "trending-product-2.png", title: "Cozy knit sweater with pockets" },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container hero">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="hero-1">
              <p>Best for your categories</p>
              <h2>
                Exclusive Collection
                <br />
                in
                <span> Our Online </span>
                Store
              </h2>
              <h3>
                Discover our exclusive collection available only in our online
                store. Shop now for unique and premium items that you won't find
                anywhere else.
              </h3>
              <div id="hero-1-1">
                <div className="h-e-1">
                  <div id="h1">$</div>
                  <div id="h2">
                    <span>Discount Price</span>
                    <h3>140.00</h3>
                  </div>
                </div>
                <div className="h-e-2">
                  <img src="line-1.png" alt="" />
                </div>
                <div className="h-e-3">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="hero-2">
              <img
                src="hero-one_img1.jpg"
                alt=""
                loading="lazy"
                className="img-fluid mx-auto d-block img-1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* slider Bar */}
      <div className="slider">
        <div className="slider-back">
          <div className="slider-text-1">
            <h2>Jackets</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>men</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>blazer</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>shirts</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>Women</h2>
            <i class="ri-star-smile-fill"></i>
          </div>
        </div>
        <div className="slider-back">
          <div className="slider-text-1">
            <h2>Jackets</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>men</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>blazer</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>shirts</h2>
            <i class="ri-star-smile-fill"></i>
            <h2>Women</h2>
            <i class="ri-star-smile-fill"></i>
          </div>
        </div>
      </div>
      {/* info bar */}
      <div className="container-fluid">
        <div className="info">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="info-content">
                <div className="inner-info-content-1">
                  <i class="ri-truck-line"></i>
                </div>
                <div className="inner-info-content">
                  <h6>Free Shipping</h6>
                  <p>You get your items delivered without any extra cost.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="info-content">
                <div className="inner-info-content-1">
                  <i class="ri-mic-fill"></i>
                </div>
                <div className="inner-info-content">
                  <h6>Great Support 24/7</h6>
                  <p>Our customer support team is available around the clock</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="info-content">
                <div className="inner-info-content-1">
                  <i class="ri-shake-hands-fill"></i>
                </div>
                <div className="inner-info-content">
                  <h6>Return Available</h6>
                  <p>
                    Making it easy to return any items if you're not satisfied.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="info-content">
                <div className="inner-info-content-1">
                  <i class="ri-mic-fill"></i>
                </div>
                <div className="inner-info-content">
                  <h6>Secure Payment</h6>
                  <p>Shop with confidence knowing that our secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product - top bar */}
      <div className="container">
        <div className="product-info">
          <div className="row">
            <div className="col">
              <div className="product-info-1 d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="pro-info-sec-1">
                  <p>
                    <i className="flaticon-sparkler"></i> Categories
                  </p>
                  <h2>Browse Top Categories</h2>
                </div>

                {/*SWIPER CONTROLS */}
                <div className="pro-info-sec-2">
                  <i className="ri-arrow-left-long-line swiper-p"></i>
                  <i className="ri-arrow-right-long-line swiper-n"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT BODY */}
      <div className="container-fluid">
        <div className="pro-cards">
          <Swiper
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            navigation={{
              prevEl: ".swiper-p",
              nextEl: ".swiper-n",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-card">
                  <img src={item.img} alt={item.title} />
                  <button className="pro-card-btn">{item.title}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Discount Section */}
      <div className="container">
        <div className="discount-bar gap-4">
          <div className="row">
            {discount.map((item, index) => (
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                key={index}
              >
                <div className="dis-card">
                  <div className="dis-card-data">
                    <div className="d-card">
                      <p>UPTO</p>
                      <h2>{item.discount}</h2>
                      <h4>{item.description}</h4>
                      <a href="">Shop Now</a>
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Featured Colection */}
      <div className="container">
        <div className="feature-head">
          <div className="row d-flex flex-column flex-xl-row flex-lg-row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="f-head-1">
                <p>Feature Products</p>
                <h2>Our Features Collection</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="f-head-2">
                <a href="">Best Sellers</a>
                <a href="">New Products</a>
                <a href="">Sale Products</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* featured Cards */}
      <div className="container">
        <div className="fea-cards">
          <div className="row d-flex">
            {featuredProducts.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="f-cards">
                  <div id="f-cards-sec-1">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="f-cards-sec-2">
                    <div className="fcfsp-1 d-flex">
                      <p>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-s-fill"></i>
                        ))}
                        (80)
                      </p>
                      <h2>
                        <s>{item.oldPrice}</s>
                      </h2>
                    </div>

                    <div className="fcfsp-2 d-flex">
                      <p>{item.text}</p>
                      <h2>{item.newPrice}</h2>
                    </div>

                    <div className="fcfsp-3">
                      <p>10% OFF</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working bar Head */}
      <div className="container text-center ">
        <div className="working-bar-head">
          <div className="row">
            <div className="col">
              <div className="working-bar-1">
                <p>Categories</p>
                <h2>Browse Top Categories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Working Bar */}
      <div className="container">
        <div className="working-bar">
          <div className="row">
            {workingSteps.map((item, index) => (
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={index}>
                <div className="wor-bar-card">
                  <i className="ri-seo-line"></i>

                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Trending bar Top*/}
      <div className="container">
        <div className="trending-head">
          <div className="row d-flex flex-column justify-content-between align-item-center flex-md-row flex-lg-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="t-head-1 d-flex flex-column">
                <p>Trending Products</p>
                <h2>What's Trending Now</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="t-head-2 d-flex">
                <i class="ri-arrow-left-long-line"></i>
                <i class="ri-arrow-right-long-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending cards */}
      <div className="container">
        <div className="trending-cards">
          <div className="row d-flex flex-nowrap overflow-auto">
            {trendingProducts.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="t-card d-flex flex-column">
                  <img src={item.img} alt="" />
                  <div className="t-card-data">
                    <div className="t-card-data-1 d-flex justify-content-between">
                      <p>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>(80)
                      </p>
                      <h2>
                        <s>$80.00</s>
                      </h2>
                    </div>
                    <div className="t-card-data-2 d-flex justify-content-between">
                      <h6>{item.title}</h6>

                      <h2>$40.00</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Offer Section */}
      <div className="container">
        <div className="offer-sec">
          <div className="row">
            <div className="col">
              <div class="offer-sec-data">
                <p>
                  <i class="ri-price-tag-3-fill"></i>Deal of the Week
                </p>
                <h2>Hurry Up! Offer ends in. Get</h2>
                <h2>UP TO 80% OFF</h2>
                <div className="offer-sec-time d-flex gap-2 flex-wrap ">
                  <div className="ostd d-flex flex-column justify-content-center align-items-center">
                    <h2>0</h2>
                    <p>_day_</p>
                  </div>
                  <div className="ostd d-flex flex-column justify-content-center align-items-center">
                    <h2>0</h2>
                    <p>_Hour_</p>
                  </div>
                  <div className="ostd d-flex flex-column justify-content-center align-items-center">
                    <h2>0</h2>
                    <p>Minute</p>
                  </div>
                  <div className="ostd d-flex flex-column justify-content-center align-items-center">
                    <h2>0</h2>
                    <p>Second</p>
                  </div>
                </div>

                <a href="">Shop Now</a>
                <img src="deal-1.png" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Client section */}
      <div className="container">
        <div className="client-testimonals">
          <div className="row d-flex flex-column flex-xl-row flex-lg-row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="clients-info">
                <h2>What Our Clients Say About Us</h2>

                <div className="clients-info-arrows">
                  <button>
                    <i className="ri-arrow-left-long-line swiper-prev"></i>
                    <div className="btn-cl-1" id="btn-cl-1"></div>
                  </button>
                  <button>
                    <i className="ri-arrow-right-long-line swiper-next"></i>
                    <div className="btn-cl-1" id="btn-cl-2"></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <Swiper
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                navigation={{
                  prevEl: ".swiper-prev",
                  nextEl: ".swiper-next",
                }}
                spaceBetween={10}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                  },
                  768: {
                    slidesPerView: 1.3,
                  },
                  1200: {
                    slidesPerView: 1.5,
                  },
                }}
                grabCursor={true}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="client-cards">
                      <p>{item.text}</p>

                      <div className="clients-card-data">
                        <div className="clients-card-data-1">
                          <img src={item.image} alt={item.name} />

                          <div className="ccd-1">
                            <h2>{item.name}</h2>

                            <span>
                              {Array(item.rating)
                                .fill()
                                .map((_, i) => (
                                  <i key={i} className="ri-star-s-fill"></i>
                                ))}
                            </span>
                          </div>
                        </div>

                        <div className="clients-card-data-2">
                          <i className="ri-double-quotes-r"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <div className="container text-center">
        <div className="blog-bar-head">
          <div className="row">
            <div className="col">
              <div className="blog-bar-1">
                <p>Our Blogs</p>
                <h2>Explore our Articles</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Cards Section */}
      <div className="container">
        <div className="blog-card-sec">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="blog-card-sec-1">
                <img src="blog-big-1.png" alt="" />
                <h2>
                  From Clicks to Closets: Mastering the Art of Fashion
                  E-commerce Marketing
                </h2>
                <p>
                  Dives into the world of fashion e-commerce marketing, guiding
                  readers on how to turn online interest into sales. It likely
                  explores strategies to attract potential customers, showcase
                  products effectively, and create a smooth buying journey that
                  converts clicks into clothes hanging in closets
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="blog-card-sec-2">
                <div className="container">
                  <div className="row d-flex justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="b-cards">
                        <img src="blog-sm-1.png" alt="" />
                        <h2>
                          Slay the Summer Style Game Must-Have Trends You Can
                          Shop Online
                        </h2>
                        <div className="b-card-bootom">
                          <p>Wordpress</p>
                          <i></i>
                          <p>Jan 12,2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="b-cards">
                        <img src="blog-sm-2.png" alt="" />
                        <h2>
                          Slay the Summer Style Game Must-Have Trends You Can
                          Shop Online
                        </h2>
                        <div className="b-card-bootom">
                          <p>Wordpress</p>
                          <i></i>
                          <p>Jan 12,2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="b-cards">
                        <img src="blog-sm-3.png" alt="" />
                        <h2>
                          Slay the Summer Style Game Must-Have Trends You Can
                          Shop Online
                        </h2>
                        <div className="b-card-bootom">
                          <p>Wordpress</p>
                          <i></i>
                          <p>Jan 12,2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="b-cards">
                        <img src="blog-sm-4.png" alt="" />
                        <h2>
                          Slay the Summer Style Game Must-Have Trends You Can
                          Shop Online
                        </h2>
                        <div className="b-card-bootom">
                          <p>Wordpress</p>
                          <i></i>
                          <p>Jan 12,2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container">
        <div className="newsletter">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="newsletter-left">
                <p>Our NewsLetter</p>
                <h2>
                  Get weekly update. Sign up and get up to <span>20% off</span>
                  your first purchase
                </h2>
                <div className="newsletter-left-search">
                  <input type="text" placeholder="Enter Your Mail" />
                  <a href="">Subscribe</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-0 col-sm-0">
              <img src="newsletter-1.png" alt="" id="newsletter-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
