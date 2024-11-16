import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//import imgs
import leitesPropaganda from "./SlidersImgWelcome/leitesPropaganda.svg";
import logo from "./SlidersImgWelcome/logoHeader.svg";

export function SlidersWelcome() {
  return (
    <div
      className="flex items-center justify-center  overflow-hidden
    mm:max-md:px-0 mm:max-md:py-16 mm:max-md:h-auto  "
    >
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        navigation={true}
        // pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="px-16">
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img src={leitesPropaganda} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
