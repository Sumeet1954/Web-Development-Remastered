import "../../styles/bottomSlider.css";
import BottomSlide from "./BottomSlide.jsx";
import { bottomSlides } from "../../data/bottomSlideData.js";

const BottomBar = () => {
  return (
    <div className="m-4">
      <section className="bottom-hero-section w-full h-full">
        {bottomSlides.map((slide) => (
          <BottomSlide
            title={slide.title}
            description={slide.description}
            variant={slide.variant}
            bottomImg={slide.bottomImg}
          />
        ))}
      </section>
    </div>
  );
};

export default BottomBar;
