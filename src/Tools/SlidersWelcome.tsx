import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { useState, useEffect } from "react";

//import imgs

// import logo from "./SlidersImgWelcome/logoHeader.svg";

import videoLogo from "../assets/Home/logoanimate11.webm";
// import { AnimatedSection } from "../Tools/Animates/AnimatedSections";

// import sliders produtos
import { SliderCondensado } from "./SlidersImgWelcome/SliderCondensado";
import { SliderLeites } from "./SlidersImgWelcome/SliderLeites";
import { SliderCremedeLeite } from "./SlidersImgWelcome/SliderCremedeLeite";

//import imgs mobile
// import logoMOb from "./SlidersImgWelcome/Mobile/logoMob.png";
import leite1 from "./SlidersImgWelcome/Mobile/condensado1.png";
import leite2 from "./SlidersImgWelcome/Mobile/creme de leite.png";
import leite3 from "./SlidersImgWelcome/Mobile/empo.png";

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
    mm:max-md:px-0 mm:max-md:py-16 mm:max-md:h-auto z-50 "
    >
      {isMobile ? (
        <Swiper
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation={isMobile ? false : true}
          pagination={isMobile ? { clickable: true } : { clickable: false }}
          className="mySwiper mm:max-md:w-width-mobile mt-20"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide
            className="px-16  mm:max-md:pb-10
           flex items-center justify-center m-auto"
          >
            <div className="flex w-full justify-center m-auto">
              <video
                src={videoLogo}
                autoPlay
                muted
                loop
                playsInline
                className=" relative z-10"
              ></video>
            </div>
          </SwiperSlide>
          <SwiperSlide className="  ">
            <img className="  " src={leite1} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-7xl ">
            <img className=" " src={leite2} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-7xl ">
            <img className=" " src={leite3} alt="" />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation={isMobile ? false : false}
          pagination={{
            clickable: true,
            renderBullet: function (className) {
              return '<span class="' + className + ' custom-bullet"></span>';
            },
          }}
          className="mySwiper mm:max-md:w-width-mobile"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="px-16 max-w-7xl mm:max-md:pb-10">
            <div className="flex mt-20 w-full justify-center m-auto">
              <video
                src={videoLogo}
                autoPlay
                muted
                loop
                playsInline
                className="mt-96 relative z-10 max-md:w-11/12"
              ></video>
            </div>
          </SwiperSlide>
          {/*SLIDER 1 */}
          <SwiperSlide className="mt-80 ">
            <div className=" ">
              <SliderCondensado />
            </div>
          </SwiperSlide>
          {/*FIM SLIDER 1 */}
          {/*SLIDER 2 */}
          <SwiperSlide className="mt-80 ">
            <div className="">
              <SliderLeites />
            </div>
          </SwiperSlide>
          {/*FIM SLIDER 2 */}
          {/*SLIDER 3 */}
          <SwiperSlide className="mt-96 ">
            <div className="">
              <SliderCremedeLeite />
            </div>
          </SwiperSlide>
          {/*FIM SLIDER 3 */}
        </Swiper>
      )}
    </div>
  );
}
