import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-sec-1" id="f-1">
              <img src="logo-main.png" alt="" />
              <p>
                Pesco is an exciting International brand we provide high quality
                cloths
              </p>
              <p>
                <i class="ri-mail-fill"></i>info@example.com
              </p>
              <p>
                <i class="ri-phone-fill"></i>info@example.com
              </p>
              <h2>
                Find Us : <i class="ri-facebook-fill"></i>
                <i class="ri-instagram-line"></i>
                <i class="ri-telegram-2-fill"></i>
                <i class="ri-linkedin-fill"></i>
              </h2>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-sec-1" id="f-2">
              <h1>Customer Services</h1>
              <ul>
                <li>Collections & Delivery</li>
                <li>Returns & Refunds</li>
                <li>Terms & Conditions</li>
                <li>Delivery Return</li>
                <li>Store Locations</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-sec-1" id="f-3">
              <h1>Quick link</h1>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Login / Register</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-sec-1" id="f-4">
              <h1>Recent Post</h1>
              <div className="footer-post">
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <img src="recent-post-1.png" alt="" />
                    </div>
                    <div className="col-8">
                      <h6>Tips on Finding Affordable Fashion Gems Online</h6>
                      <p>July 11, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-post">
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <img src="recent-post-2.png" alt="" />
                    </div>
                    <div className="col-8">
                      <h6>Tips on Finding Affordable Fashion Gems Online</h6>
                      <p>July 11, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-post">
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <img src="recent-post-3.png" alt="" />
                    </div>
                    <div className="col-8">
                      <h6>Tips on Finding Affordable Fashion Gems Online</h6>
                      <p>July 11, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
