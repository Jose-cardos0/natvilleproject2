import { useLayoutEffect } from "react";

// import bgHome from "../assets/Home/bgHome.svg";
import bg1 from "../assets/Produtos/bgProdutos.svg";
import bg2 from "../assets/Home/BG/bg2.svg";
import bg3 from "../assets/Home/BG/bg3.svg";
import bgFooter from "../assets/Footer/bgFooter.svg";

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
import { SlidersWelcome } from "../Tools/SlidersWelcome";

//imgs
import mussarela from "../assets/Home/mussarelaWelcome2x.png";

//animacoes
import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";

export function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main
      className="w-full flex items-center
       justify-center m-auto bg-cover overflow-hidden "
    >
      <section className="flex-col bg-custom-blue">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="min-h-screen w-screen flex items-center
       justify-center m-auto bg-cover z-0 relative overflow-hidden mm:max-md:bg-center "
        >
          <div
            className="max-w-7xl 
        flex-col items-center justify-center m-auto 
       "
          >
            <AnimatedNegative>
              <div className="w-full max-md:-mt-44">
                <SlidersWelcome />
              </div>
            </AnimatedNegative>
          </div>
        </div>
        {/*FIM DO SLIDER */}
        <div
          style={{
            backgroundImage: `url(${bg2})`,
          }}
          className="h-auto w-screen flex-col items-center
             justify-center 
             m-auto  
              z-10  -mt-36 overflow-hidden "
        >
          <AnimatedNegative>
            <div
              className="max-w-7xl
        flex-col items-center justify-center
         m-auto pt-40 mm:max-md:mx-8"
            >
              <h1
                className="font-mochari
           text-9xl text-custom-blue-strong
            text-center mm:max-md:text-5xl"
              >
                conheça nossas <br />
                linhas de produtos
              </h1>
              <div className="flex item justify-center gap-8 my-16 mm:max-md:flex-col">
                <img
                  className="hover:scale-105 cursor-pointer drop-shadow-2xl transition duration-300"
                  src={mussarela}
                  alt="mussarela natville"
                />
                <div className="mt-8">
                  <p className="font-roboto text-custom-blue-strong">
                    Um dos mais importantes símbolos da culinária, sem dúvidas,
                    é o queijo. E o queijo Natville conquista o paladar e o
                    coração de quem experimenta. Conheça a linha completa!
                  </p>
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
            </div>
          </AnimatedNegative>
          {/*INICIO BG3 */}
          <div
            style={{ backgroundImage: `url(${bg3})` }}
            className="h-auto flex items-center
          justify-center m-auto z-20 bg-custom-white 
          overflow-hidden mm:max-md:bg-cover mm:max-md:-mt-0"
          >
            <div id="sliderProdutos" className="max-w-7xl  ">
              <AnimatedSection>
                <SliderProdutos />
              </AnimatedSection>
            </div>
          </div>
          {/*INICO BGFOOTER */}
          <footer
            style={{ backgroundImage: `url(${bgFooter})` }}
            className="w-full h-auto 
           bg-cover min-h-96 z-30 bg-custom-blue flex
            items-center justify-center m-auto overflow-hidden mm:max-md:bg-cover mm:max-md:-mt-1"
          >
            <div
              className="w-8/12 
               flex-col items-center
            "
            >
              <AnimatedY>
                <div className="w-full flex justify-between mt-28 mm:max-md:flex-col">
                  <div className="mm:max-md:mb-8">
                    <img
                      className="min-w-56 drop-shadow-lg"
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
                    className="font-mochari
                 text-custom-blue-strong flex-col
                  items-center justify-center mm:max-md:mt-8 "
                  >
                    <p className="text-end text-4xl mm:max-md:text-center">
                      fale conosco
                    </p>
                    <div className="flex items-center justify-between gap-3 mm:max-md:justify-center ">
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
              </AnimatedY>
              <div className="w-full flex-col">
                <div className="border border-gray-300 mt-5"></div>
                <div className="text-gray-400">
                  <p className="text-end font-light text-sm max-md:text-center mm:max-md:mb-4">
                    &copy; 2024 JSDevelopers and Growth
                  </p>
                </div>
              </div>
            </div>
          </footer>
          {/**fim bg footer */}
        </div>
        {/*FIM CONHEÇA NOSSA LINHA */}
      </section>
    </main>
  );
}
