// components/hero/HeroSlide.jsx

import React from "react";
import EmailSubscription from "../hero/EmailSubscription";
import "../../styles/bottomSlider.css";
const BottomSlide = ({ title, description, image, variant, bottomImg }) => {
  return (
    <div
      className={`bottom-hero bottom-hero--${variant}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bottom-hero__content">
        <div className="bottom-hero__text">
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

        {bottomImg && (
          <img src={bottomImg} alt="" className="bottom-hero__decor" />
        )}
      </div>
    </div>
  );
};

export default BottomSlide;
