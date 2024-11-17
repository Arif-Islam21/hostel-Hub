import { Swiper, SwiperSlide } from "swiper/react";
import meal1 from "/meal1.jpeg";
import meal2 from "/meal2.jpeg";
import meal3 from "/meal3.jpeg";
import meal4 from "/meal4.jpeg";
import meal5 from "/meal5.jpeg";

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
          <img className="h-[75vh] w-full" src={meal1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img className="h-[75vh] w-full" src={meal2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img className="h-[75vh] w-full" src={meal3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img className="h-[75vh] w-full" src={meal4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img className="h-[75vh] w-full" src={meal5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="min-h-[70vh]">
          <img className="h-[75vh] w-full" src={meal3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
