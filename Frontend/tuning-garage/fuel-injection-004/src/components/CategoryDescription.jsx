import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const CategoryDescription = () => {
  const { idx } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(UserContext);
  const item = data[idx];

  if (!item) {
    return <h2>Loading...</h2>;
  }

  const { category, description, id, image, price, rating, title } = item;

  return (
    <>
      <button
        onClick={() => navigate("/about")}
        className="btn btn-secondary mb-3 go-back-btn"
      >
        ← Go Back
      </button>
      <div className="card" style={{ width: "20rem" }} key={id}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            {price} ⭐ {rating.rate}
          </a>
        </div>
      </div>
    </>
  );
};

export default CategoryDescription;
