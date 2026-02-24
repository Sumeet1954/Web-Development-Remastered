import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/hero/Hero";
import FeaturedSection from "../components/FeaturedSection";
import PopularProducts from "../components/PopularProducts";
import DailyBestDeals from "../components/DailyBestDeals";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedSection />
      <PopularProducts />
      <DailyBestDeals />
      <Hero />
    </>
  );
};

export default Home;
