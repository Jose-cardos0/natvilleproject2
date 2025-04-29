import { SliderNoticias } from "../Tools/SliderNoticias/SliderNoticias";
// import logo from "../assets/QuemSomos/logoQuemSomos.png";
// import noticiafoto from "../Tools/SliderNoticias/Noticias1.jpg";
import janeafoto from "../Tools/SliderNoticias/historiaJanea.png";
import fabalagoas from "../Tools/SliderNoticias/fabalagoas.png";
import empregos from "../Tools/SliderNoticias/chagas.png";

//animacoes
import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
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
        <div className="max-w-7xl mt-8 max-md:mx-8 ">
          <AnimatedSection>
            {/*inicio instagram */}
            <div
              className="w-full items-start justify-start
          flex flex-col md:flex-row gap-6 mb-8 relative p-4"
            >
              {/* Foto de Perfil */}
              <div className="flex justify-center md:justify-start">
                <div className="w-32 h-32 rounded-full shadow">
                  <img
                    src="https://i.ibb.co/MD6k1SSy/473815219-1117083739630606-8619087118558099733-n.jpg"
                    alt="Natville Logo"
                    className="rounded-full object-cover w-full h-full shadow"
                  />
                </div>
              </div>

              {/* Informações */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Nome e Botões */}
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-semibold text-black">
                    natville.br
                  </h1>
                  <a href="https://www.instagram.com/natville.br/">
                    <button
                      className="bg-blue-600
                  text-white text-sm font-semibold px-4 py-1 rounded hover:scale-105 transition duration-300"
                    >
                      Seguir
                    </button>
                  </a>
                  <a href="https://www.instagram.com/direct/t/110203630545982">
                    <button
                      className="bg-gray-400 hover:scale-105 transition duration-300
                 text-white text-sm font-semibold px-4 py-1 rounded"
                    >
                      Enviar mensagem
                    </button>
                  </a>
                  <button className="text-black text-2xl font-bold">⋯</button>
                </div>

                {/* Estatísticas */}
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <span className="font-semibold text-black">531</span>{" "}
                    <p className="text-black font-thin">publicações</p>
                  </div>
                  <div className="text-black">
                    <span className="font-semibold text-black">30,5 mil</span>{" "}
                    <span className="font-thin">seguidores</span>
                  </div>
                  <div className="text-black">
                    <span className="font-semibold text-black">16</span>{" "}
                    <span className="font-thin">seguindo</span>
                  </div>
                </div>

                {/* Descrição */}
                <div className="flex flex-col text-sm text-black">
                  <p className="font-thin">Natville</p>
                  <p>
                    <span className="font-thin ">Desde 1996</span>
                  </p>
                  <p className="text-black font-thin">
                    Da nossa família para a sua!
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <div className="w-full  ">
            <AnimatedSection>
              <iframe
                className="h-screen"
                src="http://127.0.0.1:5500/teste.html"
                width="100%"
                scrolling="no"
              ></iframe>{" "}
            </AnimatedSection>{" "}
          </div>
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
