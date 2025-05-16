import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { useState, useLayoutEffect } from "react";

import videoLogo from "../assets/Home/logoanimate11.webm";
import videoNovo from "../assets/videoHome.mp4";

import condensado2 from "../assets/condensado2.png";

export function SlidersWelcome() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useLayoutEffect(() => {
    function handleSize() {
      setIsMobile(window.innerWidth < 800);
    }
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  if (isMobile == null) {
    return (
      <p className="flex items-center justify-center m-auto font-thin text-white">
        Carregando...
      </p>
    ); // Não esqueça o return!
  }

  return (
    <div
      className="flex items-center justify-center overflow-hidden
     mm:max-md:h-auto z-50 relative w-full "
    >
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          renderBullet: function (className) {
            return '<span class="' + className + 'custom-bullet"></span>';
          },
        }}
        className="mySwiper mm:max-md:w-width-mobile z-50 w-screen "
        // autoplay={{
        //   delay: 11000,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide className="">
          <video
            src={videoNovo}
            className="w-screen h-screen relative "
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide
          className="flex 
           items-center justify-center m-auto w-full z-50"
        >
          <div
            className="flex mt-20 max-w-7xl
             justify-center m-auto "
          >
            <video
              src={videoLogo}
              autoPlay
              muted
              loop
              playsInline
              className=" relative z-10 max-md:max-w-xs"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full ">
            <div className="max-w-7xl flex items-center justify-center m-auto">
              <img
                className="drop-shadow-md  max-w-96 mt-44 ml-72
          object-cover max-md:w-44 max-lg:w-48 max-md:mt-10 max-md:mr-16"
                src={condensado2}
                alt="leite condensado natville"
              />
              <div className="flex items-end justify-end">
                <img
                  src="https://i.ibb.co/2YqDf4dv/nome-Leitecondensado.png"
                  alt="leite condensado"
                  className="max-w-lg max-md:w-48 max-lg:w-72 
            max-md:items-center max-md:justify-center max-md:m-auto max-md:mb-4"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
