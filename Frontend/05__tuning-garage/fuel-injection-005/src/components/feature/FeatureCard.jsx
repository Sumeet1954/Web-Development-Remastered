import Button from "../Button";
const FeatureCard = ({ title, className }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="feature-extra" id={className}>
        <h2>{title}</h2>
        <Button text="Shop Now" />
      </div>
    </div>
  );
};

export default FeatureCard;
