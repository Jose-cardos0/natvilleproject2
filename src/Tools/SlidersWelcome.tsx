import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { useState, useEffect } from "react";

//import imgs
import leitesPropaganda from "./SlidersImgWelcome/leitesPropaganda.svg";
import logo from "./SlidersImgWelcome/logoHeader.svg";

export function SlidersWelcome() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    function handleSize() {
      if (innerWidth < 480) {
        setIsMobile(true);
      } else setIsMobile(false);
    }

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  });

  return (
    <div
      className="flex items-center justify-center  overflow-hidden
    mm:max-md:px-0 mm:max-md:py-16 mm:max-md:h-auto "
    >
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        navigation={isMobile ? false : true}
        pagination={isMobile ? { clickable: true } : { clickable: false }}
        className="mySwiper mm:max-md:max-w-2xl"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="px-16 max-w-7xl mm:max-md:pb-10">
          <img
            className="w-full 
          drop-shadow-lg"
            src={logo}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16 max-w-7xl ">
          <img
            className="w-full drop-shadow-lg"
            src={leitesPropaganda}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
