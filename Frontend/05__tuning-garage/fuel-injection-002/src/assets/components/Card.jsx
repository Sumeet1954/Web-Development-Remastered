import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({
  img,
  title,
  description,
  tags,
  time,
  difficulty,
  servings,
}) => {
  return (
    <>
      <div className="Card" data-aos="fade-up">
        <img src={img} alt="img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-content">
          {tags.map((tag, index) => (
            <a href="#" key={index}>
              {tag}
            </a>
          ))}
        </div>
        <div className="card-bottom">
          <a href="">{time}</a>
          <a href="">{difficulty}</a>
          <a href="">{servings}</a>
        </div>
        <div className="btn-div">
          <button className="btn">Start Cooking</button>
        </div>
      </div>
    </>
  );
};

export default Card;
