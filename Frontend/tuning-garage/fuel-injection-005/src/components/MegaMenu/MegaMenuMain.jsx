import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import { productImages } from "../../data/megaMenuData";
import { thumbnails } from "../../data/megaMenuData";

import "../../styles/megaMenuMain.css";

import { useGlobal } from "../../context/GlobalContext";

const MegaMenuMain = () => {
  // Global Context Work

  const { setCartState } = useGlobal();

  function handleCartState() {
    setCartState((prev) => prev + quantity);
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="main">
      <div className="container mb-30">
        <div className="row">
          <div className="col-xl-9">
            <div className="product-detail accordion-detail">
              <div className="row mb-50 mt-30">
                {/* LEFT: IMAGE GALLERY */}
                <div className="col-md-6">
                  <div className="detail-gallery">
                    {/* MAIN SWIPER */}
                    <Swiper
                      modules={[Navigation, Thumbs]}
                      spaceBetween={10}
                      navigation
                      thumbs={{ swiper: thumbsSwiper }}
                      className="main-swiper"
                    >
                      {productImages.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={img}
                            alt="product"
                            className="main-product-image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* THUMBNAILS */}
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      modules={[FreeMode, Thumbs]}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode
                      watchSlidesProgress
                      className="thumb-swiper mt-3"
                    >
                      {thumbnails.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img src={img} alt="thumb" className="thumb-image" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* RIGHT: PRODUCT INFO */}
                <div className="col-md-6">
                  <div className="detail-info">
                    <span className="stock-status out-stock">Sale Off</span>
                    <h2 className="title-detail">
                      Seeds of Change Organic Quinoa, Brown
                    </h2>

                    <div className="product-price primary-color">
                      <span className="current-price text-brand">$38</span>
                      <span className="old-price ml-15">$52</span>
                    </div>

                    <div className="short-desc mb-30">
                      <p>Organic quinoa packed with nutrition and taste.</p>
                    </div>

                    {/* QUANTITY */}
                    <div className="detail-extralink mb-50 d-flex align-items-center">
                      <div className="detail-qty border radius d-flex align-items-center">
                        <button
                          onClick={() =>
                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                          }
                          className="qty-btn"
                        >
                          -
                        </button>

                        <input
                          type="text"
                          value={quantity}
                          readOnly
                          className="qty-val"
                        />

                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="qty-btn"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="bg-red-400"
                        onClick={() => handleCartState()}
                      >
                        {" "}
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RELATED PRODUCTS SWIPER */}
              <div className="row mt-60">
                <div className="col-12">
                  <h2 className="section-title style-1 mb-30">
                    Related products
                  </h2>

                  <Swiper
                    spaceBetween={20}
                    navigation
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1200: { slidesPerView: 4 },
                    }}
                  >
                    {[1, 2, 3, 4].map((item) => (
                      <SwiperSlide key={item}>
                        <div className="product-cart-wrap hover-up">
                          <div className="product-img">
                            <img
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content-wrap">
                            <h2>Sample Product {item}</h2>
                            <div className="product-price">
                              <span>$99.00</span>
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
        </div>
      </div>
    </main>
  );
};

export default MegaMenuMain;
