import React from "react";

const HeroNavigation = ({ prevRef, nextRef }) => {
  return (
    <div className="hero-navigation">
      <button ref={prevRef} className="hero-nav hero-nav--prev">
        <i class="ri-arrow-left-s-line"></i>
      </button>
      <button ref={nextRef} className="hero-nav hero-nav--next">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
};

export default HeroNavigation;
