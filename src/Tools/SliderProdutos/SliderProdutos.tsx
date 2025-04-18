import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//import imgs
import { SliderChess } from "./Sliders/SliderChess";
import { SliderUHT } from "./Sliders/SliderUHT";
import { SliderMilkPowder } from "./Sliders/SliderMilkPowder";
import { SliderButter } from "./Sliders/SliderButter";
import { SliderChoconat } from "./Sliders/SliderChoconat";
import { SliderCremeDeLeite } from "./Sliders/SliderCremeLeite";

export function SliderProdutos() {
  return (
    <div
      className="flex items-center justify-center w-full overflow-hidden
    mm:max-md:px-0 mm:max-md:h-auto 
       "
    >
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        navigation={true}
        // pagination={{ clickable: true }}
        className="mySwiper mm:max-md:w-96"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="px-16 w-full mm:max-md:px-8">
          <SliderChess />
        </SwiperSlide>
        <SwiperSlide className="px-16 w-full mm:max-md:px-8 ">
          <SliderUHT />
        </SwiperSlide>
        <SwiperSlide className="px-16 w-full mm:max-md:px-8">
          <SliderMilkPowder />
        </SwiperSlide>
        <SwiperSlide className="px-16 w-full mm:max-md:px-8 ">
          <SliderButter />
        </SwiperSlide>
        <SwiperSlide className="px-16 w-full mm:max-md:px-8 ">
          <SliderChoconat />
        </SwiperSlide>
        <SwiperSlide className="px-16 w-full mm:max-md:px-8 ">
          <SliderCremeDeLeite />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
