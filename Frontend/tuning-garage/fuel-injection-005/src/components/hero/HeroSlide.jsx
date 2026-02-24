// components/hero/HeroSlide.jsx

import React from "react";
import EmailSubscription from "./EmailSubscription";

const HeroSlide = ({ title, description, image, variant }) => {
  return (
    <div className={`hero hero--${variant}`}>
      <div className="hero__content">
        <div className="hero__text">
          <h1>
            {title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p>{description}</p>
          <EmailSubscription />
        </div>

        <div className="hero__image">
          <img src={image} alt="Hero banner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;