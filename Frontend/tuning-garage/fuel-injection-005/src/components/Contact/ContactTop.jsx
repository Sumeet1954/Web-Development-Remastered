import React from "react";
import "../../styles/contactTop.css";
import { Link } from "react-router-dom";
const ContactTop = () => {
  return (
    <>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">
              <i className="fi-rs-home mr-5"></i>Home
            </Link>
            <span></span> Pages <span></span> Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTop;
