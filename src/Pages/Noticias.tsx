import { SliderNoticias } from "../Tools/SliderNoticias/SliderNoticias";
// import logo from "../assets/QuemSomos/logoQuemSomos.png";
// import noticiafoto from "../Tools/SliderNoticias/Noticias1.jpg";
import janeafoto from "../Tools/SliderNoticias/historiaJanea.png";
import fabalagoas from "../Tools/SliderNoticias/fabalagoas.png";
import empregos from "../Tools/SliderNoticias/chagas.png";

//animacoes
import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
// import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";
import logoF from "../assets/Footer/logoFooter.svg";
// import videoLogo from "../assets/Home/logoanimate.webm";

export function Noticias() {
  return (
    <main
      className="w-full h-full flex
    items-center justify-center m-auto bg-custom-white"
    >
      <div
        className=" max-w-7xl flex-col items-center 
      justify-center m-auto w-full h-full mt-24 mm:max-md:mt-20"
      >
        <div className=" items-center justify-center flex-col">
          <div className="w-full flex items-center justify-center">
            <AnimatedNegative>
              <button
                className=" bg-custom-blue-strong font-roboto uppercase py-1
               px-6 rounded-xl text-custom-white drop-shadow-lg max-md:mb-10 max-md:text-xs"
              >
                notícias
              </button>
            </AnimatedNegative>
          </div>
          {/* <AnimatedSection>

            <div className="w-full flex items-center justify-center my-8">
              <img
                className="drop-shadow-xl max-md:max-w-72 w-96"
                src={logo}
                alt="natville"
              />
            </div>
          </AnimatedSection> */}
        </div>
        <AnimatedY>
          <div className="w-full mt-20 max-md:-mt-20">
            <SliderNoticias />
          </div>
        </AnimatedY>
        <div className="w-full flex items-center justify-center py-11">
          <AnimatedNegative>
            <button
              className=" bg-custom-blue-strong font-roboto uppercase py-1
               px-6 rounded-xl text-custom-white drop-shadow-lg max-md:mb-10 max-md:text-xs"
            >
              mais antigas
            </button>
          </AnimatedNegative>
        </div>
        {/*INICIO GRID */}
        <div
          className="grid grid-cols-3 items-center 
        justify-center m-auto gap-8 pt-8 mm:max-md:grid-cols-1
         mm:max-md:px-8 max-md:-mt-16"
        >
          <AnimatedY>
            <div className="relative  rounded-md overflow-hidden cursor-pointer group">
              <img
                className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                src={janeafoto}
                alt="Inspiração"
              />

              {/* Texto inferior com fundo gradiente para melhor legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h1 className="text-white text-lg font-light leading-tight">
                  Inspirando <br /> nova geração
                </h1>
              </div>

              {/* Botão aprimorado */}
              <div className="absolute -bottom-2 right-4 -translate-y-1/2 mm:max-md:top-40">
                <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-md shadow-md font-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </AnimatedY>
          {/*SEGUNCO CARD */}
          <AnimatedY>
            <div className="relative  rounded-md overflow-hidden cursor-pointer group">
              <img
                className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                src={fabalagoas}
                alt="Inspiração"
              />

              {/* Texto inferior com fundo gradiente para melhor legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h1 className="text-white text-lg font-light leading-tight">
                  Nova fábria <br /> em Batalha/AL
                </h1>
              </div>

              {/* Botão aprimorado */}
              <div className="absolute -bottom-2 right-4 -translate-y-1/2 mm:max-md:top-40">
                <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-md shadow-md font-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </AnimatedY>
          {/*TERCEIRO CARD */}
          <AnimatedY>
            <div className="relative  rounded-md overflow-hidden cursor-pointer group">
              <img
                className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                src={empregos}
                alt="Inspiração"
              />

              {/* Texto inferior com fundo gradiente para melhor legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h1 className="text-white text-lg font-light leading-tight">
                  150 novos <br /> empregos diretos
                </h1>
              </div>

              {/* Botão aprimorado */}
              <div className="absolute -bottom-2 right-4 -translate-y-1/2 mm:max-md:top-40">
                <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-md shadow-md font-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </AnimatedY>
          {/*QUARTO CARD */}
          <AnimatedY>
            <div className="relative  rounded-md overflow-hidden cursor-pointer group">
              <img
                className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                src={janeafoto}
                alt="Inspiração"
              />

              {/* Texto inferior com fundo gradiente para melhor legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h1 className="text-white text-lg font-light leading-tight">
                  Inspirando <br /> nova geração
                </h1>
              </div>

              {/* Botão aprimorado */}
              <div className="absolute -bottom-2 right-4 -translate-y-1/2 mm:max-md:top-40">
                <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-md shadow-md font-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </AnimatedY>
          {/*QUINTO CARD */}
          <AnimatedY>
            <div className="relative  rounded-md overflow-hidden cursor-pointer group">
              <img
                className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                src={janeafoto}
                alt="Inspiração"
              />

              {/* Texto inferior com fundo gradiente para melhor legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h1 className="text-white text-lg font-light leading-tight">
                  Inspirando <br /> nova geração
                </h1>
              </div>

              {/* Botão aprimorado */}
              <div className="absolute -bottom-2 right-4 -translate-y-1/2 mm:max-md:top-40">
                <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-md shadow-md font-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </AnimatedY>
          {/*SEXTO CARD */}
          <AnimatedY>
            <div className="relative  rounded-md overflow-hidden cursor-pointer group">
              <img
                className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                src={janeafoto}
                alt="Inspiração"
              />

              {/* Texto inferior com fundo gradiente para melhor legibilidade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h1 className="text-white text-lg font-light leading-tight">
                  Inspirando <br /> nova geração
                </h1>
              </div>

              {/* Botão aprimorado */}
              <div className="absolute -bottom-2 right-4 -translate-y-1/2 mm:max-md:top-40">
                <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-md shadow-md font-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </AnimatedY>
          {/* <AnimatedY>
            <div
              className=" rounded-md
           relative cursor-pointer "
            >
              <div className="overflow-hidden rounded-md">
                <img
                  className="w-full h-full transition-transform duration-300 transform hover:scale-110"
                  src={noticiafoto}
                  alt=""
                />
              </div>
              <div
                className="absolute bg-custom-white drop-shadow-lg
             rounded-b-md w-full h-20 bottom-0 p-2 "
              >
                <h1 className="font-thin">Noticia informatica aqui</h1>
              </div>
              <div className="absolute top-48 right-2 mm:max-md:top-36">
                <button
                  className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mm:max-md:w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
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
          </AnimatedY> */}
          {/*QUINTO CARD */}
          {/* <AnimatedY>
            <div
              className=" rounded-md
           relative cursor-pointer "
            >
              <div className="overflow-hidden rounded-md">
                <img
                  className="w-full h-full transition-transform duration-300 transform hover:scale-110"
                  src={noticiafoto}
                  alt=""
                />
              </div>
              <div
                className="absolute bg-custom-white drop-shadow-lg
             rounded-b-md w-full h-20 bottom-0 p-2 "
              >
                <h1 className="font-thin">Noticia informatica aqui</h1>
              </div>
              <div className="absolute top-48 right-2 mm:max-md:top-36">
                <button
                  className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mm:max-md:w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
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
          </AnimatedY> */}
          {/*SEXTO CARD */}
          {/* <AnimatedY>
            <div
              className=" rounded-md
           relative cursor-pointer "
            >
              <div className="overflow-hidden rounded-md">
                <img
                  className="w-full h-full transition-transform duration-300 transform hover:scale-110"
                  src={noticiafoto}
                  alt=""
                />
              </div>
              <div
                className="absolute bg-custom-white drop-shadow-lg
             rounded-b-md w-full h-20 bottom-0 p-2 "
              >
                <h1 className="font-thin">Noticia informatica aqui</h1>
              </div>
              <div className="absolute top-48 right-2 mm:max-md:top-36">
                <button
                  className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mm:max-md:w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    VEJA MAIS &rsaquo;
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
          </AnimatedY> */}
          {/*SEGUNCO CARD */}
        </div>
        {/*footer inicio */}
        <footer
          className="w-full h-auto mb-5
            flex items-center justify-center m-auto"
        >
          <div
            className="w-full 
               flex-col items-center
            "
          >
            <div
              className="w-full flex justify-between mt-28
               max-md:flex-col  max-md:gap-5"
            >
              <div className="">
                <img
                  className="min-w-56 hover:scale-105 transition
                   duration-700 drop-shadow-lg mm:max-md:w-2/3 mm:max-md:ml-16"
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
                <p className="text-end font-light text-sm max-md:text-center">
                  &copy; 2024 JSDevelopers and Growth{" "}
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/*fim footer */}
      </div>
    </main>
  );
}
