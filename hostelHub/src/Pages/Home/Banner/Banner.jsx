import { Swiper, SwiperSlide } from "swiper/react";
import meal1 from "../../../../public/bannerImage/chicken-skewers-with-slices-apples-chili.avif";
import meal2 from "../../../../public/bannerImage/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg";
import meal3 from "../../../../public/bannerImage/front-close-view-delicious-dinner-with-chickens-potatoes-greens-saucepan-gray-plate-dark-color-background-with-free-space.avif";
import meal4 from "../../../../public/bannerImage/top-view-fried-meat-slices-with-soup-vegetables-seasonings-dark-blue-desk-vegetable-meal-food-meat-dinner.avif";
import meal5 from "../../../../public/bannerImage/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.avif";
import meal6 from "../../../../public/bannerImage/top-view-tasty-cooked-fish-with-fresh-vegetables-seasonings-dark-table.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  Navigation,
  Parallax,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import BannerTitle from "./BannerTitle";

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        effect={"fade"}
        parallax={true}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Parallax, Autoplay, EffectFade, Navigation]}
      >
        <SwiperSlide className="min-h-[70vh] relative">
          <img loading="lazy" className="h-[75vh] w-full" src={meal1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img loading="lazy" className="h-[75vh] w-full" src={meal2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img loading="lazy" className="h-[75vh] w-full" src={meal3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img loading="lazy" className="h-[75vh] w-full" src={meal4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img loading="lazy" className="h-[75vh] w-full" src={meal5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img loading="lazy" className="h-[75vh] w-full" src={meal6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
