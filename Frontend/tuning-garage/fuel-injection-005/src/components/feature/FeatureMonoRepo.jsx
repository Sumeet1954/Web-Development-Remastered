import React from "react";

const FeatureMonoRepo = ({img, name, itemsAvailable}) => {
  return (
    <div className="feature-card">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p>{`${itemsAvailable} items`}</p>
    </div>
  );
};

export default FeatureMonoRepo;
