import React from "react";

const Nav = ({data}) => {
  return (
    <>

        <div className="nav-bar">
          <h5>Orange</h5>
          <h2>Favorite : {data.filter((item)=> { return item.active === true}).length}</h2>
        </div>
    </>
  );
};

export default Nav;
