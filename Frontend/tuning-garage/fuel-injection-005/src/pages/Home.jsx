import Nav from "../components/Nav";
import Hero from "../components/hero/Hero";
import FeaturedSection from "../components/feature/FeaturedSection";
import PopularProducts from "../components/PopularProducts";
import DailyBestDeals from "../components/DailyBestDeals";
import BottomSlider from "../components/bottomSlide/BottomBar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <PopularProducts />
      <DailyBestDeals />
      <BottomSlider />
      <Footer />
    </>
  );
};

export default Home;
