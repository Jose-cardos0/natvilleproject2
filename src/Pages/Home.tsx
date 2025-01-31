// import { useLayoutEffect } from "react";

// import { Link } from "react-router-dom";

// import bgHome from "../assets/Home/bgHome.svg";
// import bg1 from "../assets/Produtos/bgProdutos.svg";
// import bg2 from "../assets/Home/BG/bg2.svg";
// import bg3 from "../assets/Home/BG/bg3.svg";
// import bgFooter from "../assets/Footer/bgFooter.svg";
import camp from "../assets/Home/camp.svg";

import { SliderProdutos } from "../Tools/SliderProdutos/SliderProdutos";

import logoF from "../assets/Footer/logoFooter.svg";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";

//slider
// import { SlidersWelcome } from "../Tools/SlidersWelcome";
// import { SliderNoticias } from "../Tools/SliderNoticias/SliderNoticias";

//imgs
// import mussarela from "../assets/Home/mussarelaWelcome2x.png";
import logo from "../assets/Header/logo.png";
import noticia from "../assets/Home/retanuglo.png";
import leiteZero from "../assets/Home/FamiliaZero.svg";
import logoHome from "../assets/Home/logoHome.svg";
import videoLogo from "../assets/Home/logoanimate.mp4";

//produtos
import queijos from "../assets/Produtos/Queijos/mussarela.png";
import leiteUht from "../assets/Produtos/Leites/leitesUht.png";
import manteigaspng from "../assets/Produtos/BgProdutos/manteigas.png";
import condensado from "../assets/Produtos/leiteCondensado/bgCondensado.png";

//bgGrid
import bgProdutosGrid from "../assets/Produtos/BgProdutos/integralBg2.png";

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
      justify-center m-auto  h-height-full-96px   "
        >
          {/* <img src={logoHome} alt="" className="max-w-3xl" /> */}
          {/* <span className="light-sweep text-7xl font-bold">Palavra Azul</span> */}
          <video src={videoLogo} autoPlay muted loop className="w-8/12"></video>
        </div>
        <div className="-mt-40 relative z-10 ">
          <img className="z-10" src={camp} alt="" />
        </div>
      </section>
      {/*SVG1 */}
      <section className="-mb-44 -mt-20 ">
        <svg
          className=""
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
          className="rotate-180"
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
            <img
              src={leiteZero}
              alt="leite zero lactose"
              className="hover:scale-105 transition 
              duration-300 hover:cursor-pointer"
            />
          </div>
        </div>
      </section>
      {/*SVG3 */}

      <section className="-mb-44 -mt-16 ">
        <svg
          className=""
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
      <section className="flex m-auto w-full items-center justify-center mt-52">
        <section
          className="max-w-7xl z-10
         grid grid-cols-4 max-md:grid-cols-1 gap-8 "
        >
          {/*CARD 1 */}
          <div
            style={{ backgroundImage: `url(${bgProdutosGrid})` }}
            className="max-h-80 rounded-md
             bg-custom-blue shadow-sm shadow-black
               bg-cover bg-center"
          >
            <img src={queijos} alt="" className="p-6 mt-3" />

            <div className="max-w-full flex items-end justify-end mr-8 mt-8">
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
       to-blue-300
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                ></span>
              </button>
            </div>
          </div>
          {/*FIM CARD 1 */}
          {/*CARD 2 */}
          <div
            style={{ backgroundImage: `url(${bgProdutosGrid})` }}
            className="max-h-80 rounded-md
             bg-custom-blue shadow-sm shadow-black
               bg-cover bg-center"
          >
            <img src={leiteUht} alt="" className=" ml-14 max-w-52" />

            <div className="max-w-full flex items-end justify-end mr-8 -mt-1">
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
       to-blue-300
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                ></span>
              </button>
            </div>
          </div>
          {/*FIM CARD 2 */}
          {/*CARD 3 */}
          <div
            style={{ backgroundImage: `url(${bgProdutosGrid})` }}
            className="max-h-80 rounded-md
             bg-custom-blue shadow-sm shadow-black
               bg-cover bg-center"
          >
            <img src={manteigaspng} alt="" className="max-w-44 m-auto -mt-8" />

            <div className="max-w-full flex items-end justify-end mr-8 -mt-11">
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
       to-blue-300
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                ></span>
              </button>
            </div>
          </div>
          {/*FIM CARD 3 */}
          {/*CARD 4 */}
          <div
            style={{ backgroundImage: `url(${bgProdutosGrid})` }}
            className="max-h-80 rounded-md
             bg-custom-blue shadow-sm shadow-black
               bg-cover bg-center"
          >
            <img src={condensado} alt="" className="max-w-52 m-auto mt-8" />

            <div className="max-w-full flex items-end justify-end mr-8 -mt-1">
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
       to-blue-300
     transform translate-x-full
      transition-transform
      duration-300 ease-in-out z-0 opacity-20"
                ></span>
              </button>
            </div>
          </div>
          {/*FIM CARD 4 */}
        </section>
      </section>
      <section className="max-w-7xl flex mt-20  m-auto">
        <div className="w-full bg-custom-blue bg-opacity-20 m-auto p-8 rounded-xl shadow-md">
          <p>receitas</p>
        </div>
      </section>
      <footer
        className="w-full h-auto 
            flex items-center justify-center m-auto max-md:mt-11"
      >
        <div
          className="w-8/12 
               flex-col items-center
            "
        >
          <div
            className="w-full flex justify-between mt-28
               max-md:flex-col  max-md:gap-5"
          >
            <div>
              <img
                className="min-w-56 hover:scale-105 transition duration-700 drop-shadow-lg"
                src={logoF}
                alt="natville"
              />
            </div>
            <div className="flex-col items-center justify-center ">
              <p
                className="text-custom-blue-strong
                   text-center font-mochari text-4xl"
              >
                Acompanhe nossas
              </p>
              <div className="flex items-center justify-center gap-2">
                <AiOutlineYoutube
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <CiFacebook
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <FaWhatsapp
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <FaInstagram
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <AiOutlineLinkedin
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
              </div>
              <p
                className="text-custom-blue-strong 
                  text-center font-mochari text-4xl"
              >
                redes sociais
              </p>
            </div>
            <div
              className="font-mochari text-custom-blue-strong
                 flex-col items-center justify-center "
            >
              <p className="text-end text-4xl max-md:text-center">
                fale conosco
              </p>
              <div className="flex items-center justify-between gap-3 max-md:justify-center">
                <div>
                  <FiPhoneForwarded size={37} />
                </div>
                <div
                  className="flex-col text-2xl 
                    items-center justify-center "
                >
                  <p>0800 7213245</p>
                  <p className="text-xl -mt-3">natville.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col">
            <div className="border border-gray-300 mt-5"></div>
            <div className="text-gray-400">
              <p className="text-end font-light text-sm max-md:text-center pb-3">
                &copy; 2024 JSDevelopers and Growth{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
