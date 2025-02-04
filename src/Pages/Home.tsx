import { useLayoutEffect } from "react";

import camp from "../assets/Home/camp.webp";

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
import noticia from "../assets/Home/noticias/noticia1.png";
import noticia2 from "../assets/Home/noticias/noticia2.png";
import noticia3 from "../assets/Home/noticias/noticia3.png";

import leiteZero from "../assets/Home/FamiliaZero.webp";
import videoLogo from "../assets/Home/logoanimate.webm";

//produtos
// import mussGrid from "../assets/Home/grid/mussarela.svg";
// import manteigaGrid from "../assets/Home/grid/manteiga.svg";
// import pratoGrid from "../assets/Home/grid/prato.svg";
import condensado from "../assets/Home/grid/condensado.webp";
import splashCondensado from "../assets/Home/grid/splashCondensado.webp";

//valores
// import valoresMensagem from "../assets/Home/valores/valores.svg";
import caranova from "../assets/Home/valores/caranova.webp";
import Fafe from "../assets/Home/valores/fe.png";
import Facasa from "../assets/Home/valores/casa.png";
import Facasal from "../assets/Home/valores/casal.png";
import Facoracao from "../assets/Home/valores/corcao.png";
import Fatarefa from "../assets/Home/valores/tarefa.png";
import Fafamilia from "../assets/Home/valores/familia.png";

//animacoes
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";
import { Link } from "react-router-dom";

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
      <section className="w-full bg-custom-blue max-md:h-height-full-96px relative z-10 ">
        <div
          className="max-w-7xl flex flex-col items-center
      justify-center m-auto  h-height-full-96px   "
        >
          {/* <img src={logoHome} alt="" className="max-w-3xl" /> */}
          {/* <span className="light-sweep text-7xl font-bold">Palavra Azul</span> */}
          <AnimatedY>
            <div className="flex w-full justify-center m-auto">
              <video
                src={videoLogo}
                autoPlay
                muted
                loop
                className="w-8/12 mb-6 relative z-10 max-md:w-11/12"
              ></video>
            </div>
          </AnimatedY>
        </div>
        <div className="-mt-40 relative z-10  max-md:items-end max-md:flex max-md:-mt-20 ">
          <img className="z-10" src={camp} alt="natville" />
        </div>
      </section>
      {/*SVG1 */}
      <section className=" -mt-44 max-md:-mt-10 max-md:mb-1 relative z-0 ">
        <svg
          className="drop-shadow-md rotate-180"
          width="100%"
          height="100%"
          viewBox="0 0 1920 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 39.7647L16.385 36.1419C210.847 -6.85543 411.925 -10.697 607.888 24.8414L1021.05 99.7683C1190.42 130.484 1363.81 131.818 1533.64 103.711L1920 39.7647V146.186H0V39.7647Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      {/*FIM SVG */}
      {/*1 PAINEL - FIM */}
      <section
        className="w-full -mt-52
        bg-custom-white max-md:mt-0 "
      >
        <AnimatedSection>
          <div
            className="max-w-7xl h-screen
         flex items-center justify-center m-auto"
          >
            <SliderProdutos />
          </div>
        </AnimatedSection>
      </section>
      {/*SVG2 */}
      <section className="-mt-32 max-md:-mt-0">
        <svg
          className="rotate-180 "
          width="100%"
          height="100%"
          viewBox="0 0 1863 321"
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
      <section
        className="relative -mt-32
       bg-custom-blue pb-20 z-10 max-md:-mt-2 max-md:px-8"
      >
        <div
          className="max-w-7xl flex items-center justify-center
         m-auto gap-20 max-md:flex-col"
        >
          <div className="flex-col w-full">
            <AnimatedSection>
              <div className="flex-col items-start mb-5 max-md:items-center">
                <h1 className="font-mochari text-white text-3xl">DE OLHO NA</h1>
                <img src={logo} alt="" />
              </div>
            </AnimatedSection>

            <AnimatedY>
              <div className="flex gap-8 overflow-hidden max-md:flex-col max-md:items-center max-md:m-auto max-md:gap-0">
                <img
                  className="rounded-md max-w-72 max-md:max-w-full drop-shadow-xl shadow-black"
                  src={noticia}
                  alt=""
                />
                <div className="max-w-96 text-custom-blue-strong">
                  <p className="mt-8 max-md:mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt vel praesentium ducimus nam, alias nesciunt cumque illo
                    natus voluptates, quod consequuntur error aliquid deleniti
                    facilis quas! Quibusdam iste maiores esse?
                  </p>
                  <a
                    href="https://www.instagram.com/natville.br/"
                    target="_blanck"
                  >
                    <button
                      className="relative 
    overflow-hidden
     flex-shrink-0
bg-custom-blue-strong
text-white py-2
px-8 rounded-md shadow-sm
shadow-black font-light 
border-none mt-8 mm:max-md:w-full max-md:mt-2"
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
                  </a>
                </div>
              </div>
            </AnimatedY>

            <AnimatedSection>
              <div className="flex gap-8 mt-8 max-md:flex-col max-md:items-center max-md:m-auto max-md:hidden ">
                <div className="max-w-96 text-custom-blue-strong">
                  <p className="mt-8 text-end">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elite
                    Sunt vel praesentium ducimus nam, alias nesciunt cumque illo
                    natus voluptates, quod consequuntur error aliquid deleniti
                    facilis quas! Quibusdam iste maiores esse?
                  </p>
                  <div className="w-full flex justify-end">
                    <a
                      href="https://www.instagram.com/natville.br/"
                      target="_blanck"
                    >
                      <button
                        className="relative 
    overflow-hidden
     flex-shrink-0
bg-custom-blue-strong
text-white py-2
px-8 rounded-md shadow-sm
shadow-black font-light 
border-none mt-8 mm:max-md:w-full max-md:mt-2"
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
                    </a>
                  </div>
                </div>
                <img
                  className="rounded-md max-w-72 drop-shadow-xl shadow-black"
                  src={noticia2}
                  alt=""
                />
              </div>
            </AnimatedSection>

            <AnimatedY>
              <div className="flex gap-8 mt-8 overflow-hidden max-md:flex-col max-md:items-center max-md:m-auto max-md:mt-20 max-md:gap-0">
                <img
                  className="rounded-md max-w-72 max-md:max-w-full drop-shadow-xl shadow-black "
                  src={noticia3}
                  alt=""
                />
                <div className="max-w-96 text-custom-blue-strong max-md:max-w-full">
                  <p className="mt-8 max-md:mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt vel praesentium ducimus nam, alias nesciunt cumque illo
                    natus voluptates, quod consequuntur error aliquid deleniti
                    facilis quas! Quibusdam iste maiores esse?
                  </p>

                  <a
                    href="https://www.instagram.com/natville.br/"
                    target="_blanck"
                  >
                    <button
                      className="relative 
    overflow-hidden
     flex-shrink-0
bg-custom-blue-strong
text-white py-2
px-8 rounded-md shadow-sm
shadow-black font-light 
border-none mt-8 mm:max-md:w-full max-md:mt-2"
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
                  </a>
                </div>
              </div>
            </AnimatedY>
          </div>

          <AnimatedY>
            <div className="overflow-hidden ">
              <img
                src={leiteZero}
                alt="leite zero lactose"
                className="drop-shadow shadow-black max-w-xl"
              />
            </div>
          </AnimatedY>
        </div>
      </section>
      {/*SVG3 */}

      <section className="-mt-44 max-md:-mt-10 ">
        <svg
          className="drop-shadow-md rotate-180"
          width="100%"
          height="100%"
          viewBox="0 0 1920 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 39.7647L16.385 36.1419C210.847 -6.85543 411.925 -10.697 607.888 24.8414L1021.05 99.7683C1190.42 130.484 1363.81 131.818 1533.64 103.711L1920 39.7647V146.186H0V39.7647Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      <section className="max-w-7xl flex-col -mt-32  m-auto max-md:px-8 ">
        <AnimatedY>
          <div
            className="w-full flex items-center justify-center
           m-auto mt-40 max-md:flex-col max-md:mt-48"
          >
            <div className="relative">
              <img
                src={splashCondensado}
                alt="leite condensado natville"
                className="absolute -top-32 right-96 max-w-72 
                max-md:w-40 max-md:right-44 max-md:-top-14"
              />
              <img
                src={condensado}
                alt="leite condensado natville"
                className="max-w-xl max-md:w-80"
              />
            </div>
            <div>
              <div>
                <h1
                  className="font-mochari text-7xl
                 text-custom-blue-strong text-end max-md:text-center max-md:text-4xl max-md:mt-8"
                >
                  Leite condensado <br /> semidesnatado{" "}
                </h1>
              </div>
              <div className="w-full flex items-end justify-end max-md:-mt-4 max-md:mb-8">
                <Link to={"/condensados"}>
                  <button
                    className="relative 
               overflow-hidden
                flex-shrink-0
           bg-custom-blue-strong
           text-white py-3 
           px-14 rounded-md shadow-sm
           shadow-black font-light 
           border-none mt-8 mm:max-md:w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      ESPECIFICAÇÕES &rsaquo;
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
                </Link>
              </div>
            </div>
          </div>
        </AnimatedY>
        {/* <AnimatedY>
          <h2 className="font-mochari text-6xl text-custom-blue-strong mb-2 max-md:text-center">
            conheça
            <br /> nossos produtos
          </h2>
        </AnimatedY>
        <div className="w-full m-auto grid-cols-4 max-md:grid-cols-1 grid max-md:gap-8">
          <AnimatedSection>
            <div className="relative">
              <img src={mussGrid} alt="" className=" max-h-96 " />
              <div className="absolute bottom-4 left-4 ">
                <p className="font-mochari text-white text-2xl -mb-8">
                  mussarela
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
          </AnimatedSection>
          <AnimatedY>
            <div className="relative">
              <img src={manteigaGrid} alt="" className=" max-h-96 " />
              <div className="absolute  bottom-4 left-4 ">
                <p className="font-mochari text-white text-2xl -mb-8">
                  manteiga
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
          </AnimatedY>
          <AnimatedY>
            <div className="relative overflow-hidden">
              <img src={pratoGrid} alt="" className="max-h-96 " />
              <div className="absolute  bottom-4 left-4 ">
                <p className="font-mochari text-white text-2xl -mb-8">prato</p>
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
          </AnimatedY>
          <AnimatedSection>
            <div className="relative">
              <img src={mussGrid} alt="" className=" max-h-96 " />
              <div className="absolute  bottom-4 left-4 ">
                <p className="font-mochari text-white text-2xl -mb-8">
                  mussarela
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
          </AnimatedSection>
        </div> */}
      </section>
      <section className=" ">
        <svg
          className="rotate-180 "
          width="100%"
          height="100%"
          viewBox="0 0 1952 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0H1951.5V218.5V218.5C1707.85 318.961 1440.1 
                     345.827 1181.35 295.776L634.5 190L483.896 159.026C319.101 
                     125.133 147.617 151.376 0.5 233V233V0Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      <section
        className="bg-custom-blue w-full mb-20 pb-16 max-md:mb-0 
      relative z-10"
      >
        <section className="max-w-7xl flex items-center justify-center -mt-32 m-auto relative z-10 max-md:-mt-2 ">
          <div className="w-full flex items-center justify-center m-auto gap-8 max-mm:flex-col max-md:flex-col max-md:px-8">
            <AnimatedSection>
              <div className="w-72 max-md:w-full flex-col items-center justify-center m-auto">
                <h2 className="font-mochari text-white text-2xl mb-2 max-md:text-lg max-md:text-center">
                  quem somos
                </h2>
                <div className="w-full flex justify-center">
                  <img
                    src={logoF}
                    alt="natville"
                    className="w-full max-md:w-60"
                  />
                </div>

                <div className="flex w-full items-center gap-5 mt-8">
                  <img
                    src={Facasal}
                    alt="natville"
                    className="max-w-16 max-md:w-14"
                  />
                  <p
                    className="font-DKLeomn text-custom-blue-strong uppercase 
                  text-lg max-md:text-lg"
                  >
                    Somos uma família SERTANEJA trabalhadora, guiada pela fé que
                    permeia o nosso coração.
                  </p>
                </div>
                <div className="flex w-full items-center gap-5 mt-4">
                  <p className="font-DKLeomn text-custom-blue-strong uppercase text-lg text-end max-md:text-lg">
                    Acreditamos na dedicação e responsabilidade em cada etapa do
                    nosso processo.
                  </p>
                  <img
                    src={Fatarefa}
                    alt="natville"
                    className="max-w-10 max-md:w-10"
                  />
                </div>

                <div className="flex w-full items-center gap-5 mt-4">
                  <img
                    src={Fafe}
                    alt="natville"
                    className="max-w-16 max-md:w-20"
                  />
                  <p className="font-DKLeomn text-custom-blue-strong uppercase text-lgmax-md:text-lg">
                    A fé nos guia desde a coleta do leite, ATÉ A CHEGADA DO
                    PRODUTO EM SUA CASA.
                  </p>
                </div>
                <div className="flex w-full items-center gap-5 mt-6">
                  <p className="font-DKLeomn text-custom-blue-strong uppercase text-lg text-end max-md:text-lg">
                    Investimos em ações sociais com a comunidade, contribuindo
                    para momentos de amor e união.
                  </p>
                  <img
                    src={Facasa}
                    alt="natville"
                    className="max-w-16 max-md:w-24"
                  />
                </div>
                <div className="flex w-full items-center gap-5 mt-3">
                  <img
                    src={Facoracao}
                    alt="natville"
                    className="max-w-16 max-md:w-14"
                  />
                  <p className="font-DKLeomn text-custom-blue-strong uppercase text-lg max-md:text-lg">
                    É como um amor de mãe, cheio de fé no futuro, de crença na
                    importância do que fazemos.
                  </p>
                </div>

                <div className="flex w-full items-center gap-5 mt-3">
                  <p className="font-DKLeomn text-custom-blue-strong uppercase text-lg text-end max-md:text-lg">
                    Nutrimos laços. Celebramos famílias. Como amor de mãe.
                  </p>
                  <img
                    src={Fafamilia}
                    alt="natville"
                    className="max-w-24 max-md:w-24"
                  />
                </div>
              </div>
            </AnimatedSection>
            {/* <AnimatedY>
              <div className="max-w-96  max-md:pl-0">
                <h2 className="font-mochari text-4xl text-custom-blue-strong max-md:text-center">
                  o pilar espiritual <br /> e o pilar material
                </h2>
                <p className="text-custom-blue-strong font-roboto mt-8 max-md:text-center max-md:mb-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  nisi, voluptatum, maiores impedit dolore beatae adipisci iste
                  delectus voluptatibus recusandae a dolorum culpa quidem, nobis
                  facilis error dolores molestias. Sit! Recusandae, beatae
                  aspernatur, dicta magnam dolores repellendus porro ipsam
                  explicabo atque dolorem enim ex repellat officia quo corporis,
                  neque numquam adipisci blanditiis quidem dolorum velit. Quidem
                  est consequuntur laboriosam culpa.
                </p>
              </div>
            </AnimatedY> */}
            {/* <AnimatedNegative>
              <div className="overflow-hidden max-w-7xl">
                <img src={condensadoValores} alt="" className="" />
              </div>
            </AnimatedNegative> */}
            <AnimatedY>
              <div>
                <img
                  src={caranova}
                  alt=""
                  className="max-w-2xl max-md:w-72 drop-shadow-md"
                />
              </div>
            </AnimatedY>
          </div>
        </section>
      </section>
      <section className=" -mt-64 max-md:-mt-10 relative z-0  ">
        <svg
          className="drop-shadow-md rotate-180"
          width="100%"
          height="100%"
          viewBox="0 0 1920 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 39.7647L16.385 36.1419C210.847 -6.85543 411.925 -10.697 607.888 24.8414L1021.05 99.7683C1190.42 130.484 1363.81 131.818 1533.64 103.711L1920 39.7647V146.186H0V39.7647Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      <footer
        className="w-full h-auto mt-20
            flex items-center justify-center m-auto "
      >
        <div
          className="w-8/12 
               flex-col items-center   "
        >
          <div
            className="w-full flex justify-between -mt-10
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
