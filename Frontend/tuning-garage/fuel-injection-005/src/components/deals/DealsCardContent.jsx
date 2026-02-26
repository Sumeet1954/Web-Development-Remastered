const DealsCardContent = () => {
  return (
    <div className="deals-content">
      <h2>{}</h2>
      <p>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>(4.0)
      </p>
      <h6>
        By <span>NestFood</span>
      </h6>
      <div className="popular-bottom-card">
        <h2>{}</h2>
        <Button text="Add" />
      </div>
    </div>
  );
};

export default DealsCardContent;
