import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { useState, useEffect } from "react";

//import imgs
import leitesPropaganda from "./SlidersImgWelcome/leitesPropaganda.svg";
import logo from "./SlidersImgWelcome/logoHeader.svg";

//import imgs mobile
import logoMOb from "./SlidersImgWelcome/Mobile/logoMob.png";
import leite1 from "./SlidersImgWelcome/Mobile/leiteMob.png";
import leite2 from "./SlidersImgWelcome/Mobile/leitesMob.png";
import leite3 from "./SlidersImgWelcome/Mobile/zeroMob.png";

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
      {isMobile ? (
        <Swiper
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation={isMobile ? false : true}
          pagination={isMobile ? { clickable: true } : { clickable: false }}
          className="mySwiper mm:max-md:w-width-mobile"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="px-16 max-w-7xl mm:max-md:pb-10 flex items-center justify-center m-auto">
            <img
              className="w-full  
          drop-shadow-lg"
              src={logoMOb}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="px-16 max-w-7xl ">
            <img className=" drop-shadow-lg w-80 " src={leite1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="px-16 max-w-7xl ">
            <img className=" drop-shadow-lg" src={leite2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="px-16 max-w-7xl ">
            <img className=" drop-shadow-lg w-80" src={leite3} alt="" />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation={isMobile ? false : true}
          pagination={isMobile ? { clickable: true } : { clickable: false }}
          className="mySwiper mm:max-md:w-width-mobile"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="px-16 max-w-7xl mm:max-md:pb-10">
            <img
              className="w-full 
          drop-shadow-lg max-w-4xl m-auto"
              src={logo}
              alt="natville"
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
      )}
    </div>
  );
}
