import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//import imgs
import { Noticia1 } from "./Sliders/Noticia1";
import { Noticia2 } from "./Sliders/Noticia2";

export function SliderNoticias() {
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
      className="flex items-center justify-center w-full 
     overflow-hidden mm:max-md:px-0 mm:max-md:h-auto
       mm:max-md:mt-20 mm:max-md:pb-10  "
    >
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        navigation={isMobile ? false : true}
        pagination={isMobile ? { clickable: true } : { clickable: false }}
        className="mySwiper mm:max-md:w-96"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="px-16 w-full mm:max-md:px-8 mb-10">
          <Noticia1 />
        </SwiperSlide>
        <SwiperSlide className="px-16 w-full mm:max-md:px-8 mb-10">
          <Noticia2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
