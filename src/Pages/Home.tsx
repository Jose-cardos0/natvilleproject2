import { useLayoutEffect } from "react";
import { useState, useEffect, useRef } from "react";
import novoBg from "../assets/home.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import videoLogo from "../assets/Home/logoanimate11.webm";
import videoNovo from "../assets/videoHome.mp4";
import condensado2 from "../assets/condensado2.png";
import leites3 from "../Tools/3leites.png";
import cremeDeLeite from "../../src/assets/Produtos/Leites/zerolateral_11zon.webp";

export function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [autoplayDelay, setAutoplayDelay] = useState<number>(11000);

  useEffect(() => {
    function handleResize() {
      setShowNavigation(window.innerWidth > 480);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="">
      {/*1 PAINEL - QUEM SOMOS*/}
      <section
        style={{ backgroundImage: `url(${novoBg})` }}
        className="relative z-10 bg-cover bg-center max-md:bg-cover
           bg-no-repeat w-full max-md:h-height-full-96px max-md:bg-right"
      >
        <div className="flex items-center justify-center m-auto">
          <Swiper
            modules={[Pagination, Navigation, Scrollbar, Autoplay]}
            slidesPerView={1}
            navigation={showNavigation}
            pagination={{
              clickable: true,
              renderBullet: function (_: any, className: string) {
                return '<span class="' + className + 'custom-bullet"></span>';
              },
            }}
            className="mySwiper mm:max-md:w-width-mobile z-50 w-screen"
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              // Ajusta o atraso com base no slide atual
              if (swiper.activeIndex === 0) {
                setAutoplayDelay(30000);
              } else {
                setAutoplayDelay(2000);
              }

              // É necessário atualizar a configuração de autoplay após a mudança
              if (swiperRef.current && swiperRef.current.autoplay) {
                swiperRef.current.autoplay.stop();
                swiperRef.current.autoplay.start();
              }
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide className="">
              <video
                id="sliderVideo"
                src={videoNovo}
                className="h-screen w-screen object-cover object-center"
                autoPlay
                loop
                controls
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex max-sm
              items-center justify-center m-auto mt-72 max-md:mt-48"
              >
                <video
                  src={videoLogo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" relative z-10 max-w-7xl max-md:w-96 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="w-full
               max-md:flex-col flex items-center justify-center m-auto mt-44 max-md:mt-20"
              >
                <img
                  className="max-w-96 ml-52 max-md:w-56 max-md:ml-0 max-md:mb-5"
                  src={condensado2}
                  alt=""
                />
                <img
                  className="max-w-96 max-md:w-56"
                  src="https://i.ibb.co/2YqDf4dv/nome-Leitecondensado.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex items-center justify-center m-auto mt-2 max-md:-mt-20 ">
                <img
                  className="max-w-5xl max-md:w-72 max-md:mt-64 max-md:mr-4 "
                  src={leites3}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full max-md:flex-col flex items-center justify-center m-auto mt-8 max-md:-mt-20">
                <img
                  className="max-w-96 ml-52 max-md:w-52 max-md:mt-32 max-md:ml-0"
                  src={cremeDeLeite}
                  alt=""
                />
                <img
                  className="max-w-96 max-md:w-48 "
                  src="https://i.ibb.co/JRHWsQ6n/zerolactose.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
