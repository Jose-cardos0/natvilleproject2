// import { useLayoutEffect } from "react";

// import { Link } from "react-router-dom";

// import bgHome from "../assets/Home/bgHome.svg";
// import bg1 from "../assets/Produtos/bgProdutos.svg";
// import bg2 from "../assets/Home/BG/bg2.svg";
// import bg3 from "../assets/Home/BG/bg3.svg";
// import bgFooter from "../assets/Footer/bgFooter.svg";
import camp from "../assets/Home/camp.svg";

import { SliderProdutos } from "../Tools/SliderProdutos/SliderProdutos";

// import logoF from "../assets/Footer/logoFooter.svg";

//icons
// import { AiOutlineYoutube } from "react-icons/ai";
// import { CiFacebook } from "react-icons/ci";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import { FiPhoneForwarded } from "react-icons/fi";

//slider
import { SlidersWelcome } from "../Tools/SlidersWelcome";
// import { SliderNoticias } from "../Tools/SliderNoticias/SliderNoticias";

//imgs
// import mussarela from "../assets/Home/mussarelaWelcome2x.png";
import logo from "../assets/Header/logo.png";
import noticia from "../assets/Home/retanuglo.png";
import leiteZero from "../assets/Home/FamiliaZero.svg";

//animacoes
// import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
// import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
// import { AnimatedY } from "../Tools/Animates/AnimatedY";

export function Home() {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <main
      className="w-full flex-col items-center 
       justify-center m-auto bg-cover  bg-custom-white"
    >
      {/*1 PAINEL - QUEM SOMOS*/}
      <section className="w-full bg-custom-blue">
        <div
          className="max-w-7xl flex items-center
      justify-center m-auto  h-height-full-96px  "
        >
          <SlidersWelcome />
        </div>
        <div className="-mt-40 relative z-10 ">
          <img className="z-10" src={camp} alt="" />
        </div>
      </section>
      {/*SVG1 */}
      <section className="-mb-44 -mt-20 ">
        <svg
          className="drop-shadow-xl"
          width="100%"
          height="100%"
          viewBox="0 0 1952 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0H1951.5V218.5V218.5C1707.85 318.961 1440.1 345.827 1181.35 295.776L634.5 190L483.896 159.026C319.101 125.133 147.617 151.376 0.5 233V233V0Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      {/*FIM SVG */}
      {/*1 PAINEL - FIM */}
      <section
        className="w-full 
        bg-custom-white "
      >
        <div
          className="max-w-7xl h-screen
         flex items-center justify-center m-auto"
        >
          <SliderProdutos />
        </div>
      </section>
      {/*SVG2 */}
      <section className="-mt-28 ">
        <svg
          className="drop-shadow-xl rotate-180"
          width="100%"
          height="100%"
          viewBox="0 0 1952 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0H1951.5V218.5V218.5C1707.85 318.961 1440.1 345.827 1181.35 295.776L634.5 190L483.896 159.026C319.101 125.133 147.617 151.376 0.5 233V233V0Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      {/*FIM SVG */}
      <section className="relative -mt-32 bg-custom-blue pb-20 z-0 ">
        <div
          className="max-w-7xl flex items-center justify-center
         m-auto gap-20"
        >
          <div className="flex-col w-full">
            <div className="flex-col items-start mb-5">
              <h1 className="font-mochari text-white text-3xl">DE OLHO NA</h1>
              <img src={logo} alt="" />
            </div>

            <div className="flex gap-8">
              <img className="rounded-md max-w-72" src={noticia} alt="" />
              <div className="max-w-96 text-custom-blue-strong">
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  vel praesentium ducimus nam, alias nesciunt cumque illo natus
                  voluptates, quod consequuntur error aliquid deleniti facilis
                  quas! Quibusdam iste maiores esse?
                </p>

                <button
                  className="relative 
    overflow-hidden
     flex-shrink-0
bg-custom-blue-strong
text-white py-2
px-8 rounded-md shadow-sm
shadow-black font-light 
border-none mt-8 mm:max-md:w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    ver mais &rsaquo;
                  </span>
                  <span
                    className="absolute inset-0
      bg-gradient-to-r from-white
       to-black
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                  ></span>
                </button>
              </div>
            </div>

            <div className="flex gap-8 mt-8 ">
              <div className="max-w-96 text-custom-blue-strong">
                <p className="mt-8 text-end">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  vel praesentium ducimus nam, alias nesciunt cumque illo natus
                  voluptates, quod consequuntur error aliquid deleniti facilis
                  quas! Quibusdam iste maiores esse?
                </p>
                <div className="w-full flex justify-end">
                  <button
                    className="relative 
    overflow-hidden
     flex-shrink-0
bg-custom-blue-strong
text-white py-2
px-8 rounded-md shadow-sm
shadow-black font-light 
border-none mt-8 mm:max-md:w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      ver mais &rsaquo;
                    </span>
                    <span
                      className="absolute inset-0
      bg-gradient-to-r from-white
       to-black
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                    ></span>
                  </button>
                </div>
              </div>
              <img className="rounded-md max-w-72" src={noticia} alt="" />
            </div>

            <div className="flex gap-8 mt-8">
              <img className="rounded-md max-w-72" src={noticia} alt="" />
              <div className="max-w-96 text-custom-blue-strong">
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  vel praesentium ducimus nam, alias nesciunt cumque illo natus
                  voluptates, quod consequuntur error aliquid deleniti facilis
                  quas! Quibusdam iste maiores esse?
                </p>

                <button
                  className="relative 
    overflow-hidden
     flex-shrink-0
bg-custom-blue-strong
text-white py-2
px-8 rounded-md shadow-sm
shadow-black font-light 
border-none mt-8 mm:max-md:w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    ver mais &rsaquo;
                  </span>
                  <span
                    className="absolute inset-0
      bg-gradient-to-r from-white
       to-black
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img src={leiteZero} alt="" className="" />
          </div>
        </div>
      </section>
      <section>
        <section className="max-w-7xl h-screen z-10 bg-orange-500"></section>
      </section>
    </main>
  );
}
