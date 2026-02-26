import "../styles/Nav.css";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState } from "react";

// function
const Nav = () => {
  const { width } = useScreenSize();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="container-fluid mt-xl-1 mt-lg-1 mt-md-0 mt-sm-0 mb-xl-1 mb-lg-1 mb-md-0 mb-sm-0">
        <div className="row pb-1 nav-bar-1">
          <div className="col-xl-4 col-lg-4 flex">
            <div className="header-top-1">
              <a href="" className="">
                About Us
              </a>
              <a href="" className="">
                My Account
              </a>
              <a href="" className="">
                Wishlist
              </a>
              <a href="" className="">
                Order Tracking
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 d-flex justify-content-center align-items-center nav-mid">
            <div className="header-top-2">
              Supper Value Deals - Save more with coupons
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center ">
            <div className="header-top-3">
              <a href="">
                Need help? Call Us: <span> + 1800900</span>
              </a>
              <a href="">English</a>
              <a href="">USD</a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg bg-body ${
          scrolled
            ? "fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-500 ease-in-out"
            : ""
        }`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="row ">
            <div className="nav-md-tab">
              <a className="navbar-brand" href="#">
                <img src="logo.svg" alt="Bootstrap" width="180" height="24" />
              </a>
              <div className="nav-md-icon">
                <img src="icon-cart.svg" alt="" />
                <img src="icon-heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <div className="main-nav-part-1">
                <select name="All Categories" id="All Categories">
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                  <option value="All Categories" selected>
                    All Categories
                  </option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for items..."
                />
                <i class="ri-search-line"></i>
              </div>
              <div className="main-nav-part-2">
                <div className="icon-1">
                  <img src="icon-compare.svg" alt="" />
                  <a href="">Compare</a>
                </div>
                <div className="icon-1">
                  <img src="icon-heart.svg" alt="" />
                  <a href="">Wishlist</a>
                </div>
                <div className="icon-1">
                  <img src="icon-cart.svg" alt="" />
                  <a href="">Cart</a>
                </div>
                <div className="icon-1">
                  <img src="icon-user.svg" alt="" />
                  <a href="">Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Browse All Components */}
      <div
        className={`container-fluid nav-third  top-0 w-full z-50 transition-all duration-500 ease-in-out
    ${scrolled ? "fixed transition-all duration-500 ease-in-out shadow-md py-2 translate-y-0" : ""}`}
      >
        <div className="row">
          <div className="col-xl-2 col-lg-3 third-nav-pt-1">
            {width < 1025 ? (
              <a href="#">
                All Categories <i className="ri-arrow-drop-down-line"></i>
              </a>
            ) : (
              <a href="#">
                Browse All Categories{" "}
                <i className="ri-arrow-drop-down-line"></i>
              </a>
            )}
          </div>
          <div className="col-xl-8 col-lg-9 third-nav-pt-2">
            <a href="">
              <i class="ri-fire-line"></i>Deals
            </a>
            <a href="">
              Home <i className="ri-arrow-drop-down-line"></i>
            </a>
            <a href="">About</a>
            <a href="">
              Shop <i className="ri-arrow-drop-down-line"></i>
            </a>
            <a href="">
              Vendors <i className="ri-arrow-drop-down-line"></i>
            </a>
            <a href="">
              Mega menu <i className="ri-arrow-drop-down-line"></i>
            </a>
            <a href="">
              Blog <i className="ri-arrow-drop-down-line"></i>
            </a>
            <a href="">
              Pages <i className="ri-arrow-drop-down-line"></i>
            </a>
            <a href="">Contact</a>
          </div>
          <div className="col-xl-2 col-lg-0 d-flex third-nav-pt-3">
            <div className="nav-side-logo">
              <img src="icon-headphone.svg" alt="" />
            </div>
            <div className="nav-side-cnt">
              <p>1900-888</p>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
