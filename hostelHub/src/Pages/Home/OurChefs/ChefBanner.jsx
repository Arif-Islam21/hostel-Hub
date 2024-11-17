import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import image1 from "/cook1.jpg";
import image2 from "/cook3.png";
import image3 from "/cook4.png";
import image4 from "/cook5.png";
import image5 from "/cook6.png";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const ChefBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );
  return (
    <div className="wrapper my-12">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            <img className="h-full w-full border-none" src={image1} alt="" />
          </div>
          <div className="carousel__cell number-slide2">
            {" "}
            <img className="h-full w-full border-none" src={image2} alt="" />
          </div>
          <div className="carousel__cell number-slide3">
            {" "}
            <img className="h-full w-full border-none" src={image3} alt="" />
          </div>
          <div className="carousel__cell number-slide4">
            {" "}
            <img className="h-full w-full border-none" src={image4} alt="" />
          </div>
          <div className="carousel__cell number-slide5">
            {" "}
            <img className="h-full w-full border-none" src={image5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
