
import "../../styles/bottomSlider.css";
import BottomSlide from "./BottomSlide.jsx";
import { bottomSlides } from "../../data/bottomSlideData.js";

const BottomBar = () => {
  return (
    <section className="bottom-hero-section">
      {bottomSlides.map((slide) => (
        <BottomSlide
          title={slide.title}
          description={slide.description}
          variant={slide.variant}
          bottomImg={slide.bottomImg}
        />
      ))}
    </section>
  );
};

export default BottomBar;
