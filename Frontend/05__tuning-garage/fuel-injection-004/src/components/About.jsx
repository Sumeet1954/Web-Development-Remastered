import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { Link, useParams } from "react-router-dom";

const About = () => {
  const { data } = useContext(UserContext);
  const { id } = useParams();
  console.log(id);

  return (
    <div className="about-container">
      {data.map((item) => (
        <Link to={`/about/${item.id}`} key={item.id} className="about-item">
          {item.id}
        </Link>
      ))}
    </div>
  );
};

export default About;
