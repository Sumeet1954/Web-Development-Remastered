import React from "react";

const Card = ({ data , cardNo ,setRealSong }) => {

  const handleClick = (cardNo) => {
    setRealSong((prev) => {
      return prev.map((item, index) => {
        if (index === cardNo) return { ...item, active: !item.active };
        return item;
      });
    });
  };

  const { imgsrc, songName, artistName, active } = data;
  return (
    <>
      <div className="card">
        <img src={imgsrc} alt="" />
        <div className="card-data">
          <h2>{songName}</h2>
          <h6>{artistName}</h6>
        </div>
        <button onClick={() => handleClick(cardNo)} className="card-btn">
          {active === false ? "Add To Favorite" : "Added"}
        </button>
      </div>
    </>
  );
};

export default Card;
