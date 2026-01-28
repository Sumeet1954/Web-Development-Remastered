import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div id="nav">
            {/* Part 1 */}
            <div id="nav-1">
              <a className="navbar-brand" href="#">
                <img src="./logo-main.png" alt="" />
              </a>
            </div>

            {/* Part 2 */}
            <div id="nav-2">
              <div id="nav-mid">
                <select name="All Catogories" id="All Catogories">
                  <option value="">All Catogories</option>
                  <option value="">Man Shirts</option>
                  <option value="">Summer Dress</option>
                  <option value="">Denim Jeans</option>
                  <option value="">Winter Dress</option>
                  <option value="">Jackets</option>
                </select>

                <div id="nav-mid-2">
                  <input type="text" placeholder="Enter Search Products" />
                  <i class="ri-search-line"></i>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div id="nav-3">
              <div id="nav-end">
                <div id="nav-end-1">
                  <a id="a-1">Support 24/7</a>
                  <a id="a-2">+91 88270 57950</a>
                </div>
                <div id="nav-end-2">
                  <img src="support.png" alt="" />
                </div>
              </div>
            </div>

            {/* Btn 2 */}
            <button
              id="btn-2"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-shopping-bag-fill"></i>
            </button>

            {/* Button Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div class="container-fluid container-two">
        <div id="mid-bar">
          <div id="mid-bar-1">
            <div id="midbar-1-1">
              <i class="ri-menu-line"></i>

              <select name="All Catogories" id="All Catogories">
                <option value="">All Catogories</option>
                <option value="">Man Shirts</option>
                <option value="">Summer Dress</option>
                <option value="">Denim Jeans</option>
                <option value="">Winter Dress</option>
                <option value="">Jackets</option>
              </select>
            </div>
            <div id="midbar-1-2">
              <a href="">Home</a>
              <a href="">
                Shop<i class="ri-arrow-down-s-line"></i>
              </a>
              <a href="">
                Blog<i class="ri-arrow-down-s-line"></i>
              </a>
              <a href="">
                Pages<i class="ri-arrow-down-s-line"></i>
              </a>
              <a href="">Contact</a>
            </div>
          </div>
          <div id="mid-bar-2">
            <div id="inner-mid-bar-2">
              <i class="ri-fire-line icon-m icon-f"></i>
              <a href="">Deal</a>
              <i class="ri-star-fill"></i>
              <i class="ri-heart-line icon-m"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-shopping-bag-fill icon-m"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
