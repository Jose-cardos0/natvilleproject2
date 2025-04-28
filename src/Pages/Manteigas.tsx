import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import manteigas from "../assets/Produtos/Manteigas/manteiga.webp";
import menteigaMaior from "../assets/Produtos/Manteigas/500topo.webp";
import manteigaMenor from "../assets/Produtos/Manteigas/200topo.webp";
import manteiga5kg from "../assets/Produtos/Manteigas/manteiga5kg.webp";
import manteiga20kg from "../assets/Produtos/Manteigas/manteiga20kg.webp";

import logoF from "../assets/Footer/logoFooter.svg";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";

import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";
import { motion } from "framer-motion";

interface Produto {
  id: string;
  produto: string;
}

export function Manteigas() {
  const [leiteUht, setLeiteUht] = useState<Produto[]>([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://apiprodutosnatville.vercel.app/produtos"
      );
      const data = await response.json();
      setLeiteUht(data);
    }

    getData();
  }, []);

  const manteigaPrimeiraQualidade = leiteUht.length > 0 ? leiteUht[6] : null;

  console.log(manteigaPrimeiraQualidade);

  return (
    <main
      className="w-full flex items-center
     justify-center m-auto bg-cover overflow-hidden relative "
    >
      {/*section info leite */}

      <section className="flex-col items-center justify-center bg-custom-white">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="h-screen w-screen flex 
          items-center 
          justify-center m-auto -mt-8
           bg-contain bg-no-repeat bg-center bg-fixed z-10"
        >
          <div
            className="max-w-7xl 
        flex items-center justify-center gap-8 max-md:flex-col "
          >
            <AnimatedSection>
              <img
                className=" drop-shadow-md max-md:w-72
                cursor-pointer max-w-1xl
               hover:scale-105 transition duration-700 "
                src={manteigas}
                alt="leite uht natville"
              />
            </AnimatedSection>
            <div className="flex-col items-center justify-center ">
              <AnimatedNegative>
                <h1
                  className="font-mochari text-9xl
               text-custom-blue-strong text-center max-md:text-7xl max-md:-mt-8 "
                >
                  Linha
                  <br />
                  de manteigas
                </h1>
              </AnimatedNegative>
              {/* <div
                className="relative flex items-center
               justify-center mt-20 max-md:hidden animate-bounce hover:scale-105 transition duration-700"
              >
                <div className="mt-8">
                  <img
                    className="drop-shadow-md"
                    src={spinerCile}
                    alt="spiner cicle "
                  />
                </div>
                <div className="absolute custom-spin top-0 ">
                  <img className="" src={spinnerWord} alt="spiner word" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/*inicio leites */}
        <div
          className="h-auto w-screen flex-col items-center
             justify-center m-auto z-0"
        >
          <div
            className="max-w-7xl
        flex-col items-center
        justify-center m-auto mt-20 bg-custom-white"
          >
            {/*inicio leite integral */}
            <div
              className="flex items-center justify-center
              gap-8 bg-custom-white max-md:flex-col
               max-md:mx-8 max-md:-mt-30"
            >
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl object-center drop-shadow-md w-96
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={menteigaMaior}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-5xl text-custom-blue-strong">
                    Manteiga de <br />
                    Primeira qualidade 500g
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Seja no café da manhã, no preparo de receitas ou para dar
                      aquele toque especial aos seus pratos, a Manteiga de
                      Primeira Qualidade com Sal traz o equilíbrio perfeito
                      entre cremosidade, sabor autêntico e frescor incomparável.
                      Feita a partir de leite puro e selecionado, essa manteiga
                      tem um toque de sal na medida certa, realçando o sabor dos
                      alimentos e garantindo uma experiência única a cada
                      mordida. <br />
                      <br /> ✅ Textura cremosa e fácil de espalhar. <br /> ✅
                      Sabor rico e autêntico, com toque de sal na medida. <br />{" "}
                      ✅ Ideal para pães, torradas, receitas e finalizações
                      gourmet. <br /> ✅ Fonte natural de vitaminas A e D.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${manteigaPrimeiraQualidade?.id}`}>
                      <button
                        className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mt-8 max-md:w-full cursor-pointer"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          TABELA NUTRICIONAL +
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
              </AnimatedY>
            </div>
            {/*leite desnataod inicio */}
            <div
              className="flex items-center justify-center 
              gap-8 bg-custom-white my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
            >
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-5xl text-custom-blue-strong">
                    Manteiga de <br />
                    Primeira qualidade 200g
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Seja no café da manhã, no preparo de receitas ou para dar
                      aquele toque especial aos seus pratos, a Manteiga de
                      Primeira Qualidade com Sal traz o equilíbrio perfeito
                      entre cremosidade, sabor autêntico e frescor incomparável.
                      Feita a partir de leite puro e selecionado, essa manteiga
                      tem um toque de sal na medida certa, realçando o sabor dos
                      alimentos e garantindo uma experiência única a cada
                      mordida. <br />
                      <br /> ✅ Textura cremosa e fácil de espalhar. <br /> ✅
                      Sabor rico e autêntico, com toque de sal na medida. <br />{" "}
                      ✅ Ideal para pães, torradas, receitas e finalizações
                      gourmet. <br /> ✅ Fonte natural de vitaminas A e D.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${manteigaPrimeiraQualidade?.id}`}>
                      <button
                        className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mt-8 max-md:w-full cursor-pointer"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          TABELA NUTRICIONAL +
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
              </AnimatedY>
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl object-center drop-shadow-md w-96
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={manteigaMenor}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
            </div>
            {/* inicio manteiga 5kg */}
            <div
              className="flex items-center justify-center 
              gap-8 bg-custom-white my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
            >
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl object-center drop-shadow-md w-96
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={manteiga5kg}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-5xl text-custom-blue-strong">
                    Manteiga de <br />
                    Primeira qualidade 5kg
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Seja no café da manhã, no preparo de receitas ou para dar
                      aquele toque especial aos seus pratos, a Manteiga de
                      Primeira Qualidade com Sal traz o equilíbrio perfeito
                      entre cremosidade, sabor autêntico e frescor incomparável.
                      Feita a partir de leite puro e selecionado, essa manteiga
                      tem um toque de sal na medida certa, realçando o sabor dos
                      alimentos e garantindo uma experiência única a cada
                      mordida. <br />
                      <br /> ✅ Textura cremosa e fácil de espalhar. <br /> ✅
                      Sabor rico e autêntico, com toque de sal na medida. <br />{" "}
                      ✅ Ideal para pães, torradas, receitas e finalizações
                      gourmet. <br /> ✅ Fonte natural de vitaminas A e D.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${manteigaPrimeiraQualidade?.id}`}>
                      <button
                        className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mt-8 max-md:w-full cursor-pointer"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          TABELA NUTRICIONAL +
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
              </AnimatedY>
            </div>
            {/*manteiga 20kg */}
            <div
              className="flex items-center justify-center 
              gap-8 bg-custom-white my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
            >
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-5xl text-custom-blue-strong">
                    Manteiga de <br />
                    Primeira qualidade 20kg
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Seja no café da manhã, no preparo de receitas ou para dar
                      aquele toque especial aos seus pratos, a Manteiga de
                      Primeira Qualidade com Sal traz o equilíbrio perfeito
                      entre cremosidade, sabor autêntico e frescor incomparável.
                      Feita a partir de leite puro e selecionado, essa manteiga
                      tem um toque de sal na medida certa, realçando o sabor dos
                      alimentos e garantindo uma experiência única a cada
                      mordida. <br />
                      <br /> ✅ Textura cremosa e fácil de espalhar. <br /> ✅
                      Sabor rico e autêntico, com toque de sal na medida. <br />{" "}
                      ✅ Ideal para pães, torradas, receitas e finalizações
                      gourmet. <br /> ✅ Fonte natural de vitaminas A e D.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${manteigaPrimeiraQualidade?.id}`}>
                      <button
                        className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mt-8 max-md:w-full cursor-pointer"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          TABELA NUTRICIONAL +
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
              </AnimatedY>
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl object-center drop-shadow-md w-96
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={manteiga20kg}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
            </div>
          </div>

          {/*footer inicio */}
          <footer
            className="w-full h-auto mb-5 max-md:-mt-32
            flex items-center justify-center m-auto"
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
                  <p className="text-end font-light text-sm max-md:text-center">
                    &copy; 2024 JSDevelopers and Growth{" "}
                  </p>
                </div>
              </div>
            </div>
          </footer>
          {/*fim footer */}
        </div>
      </section>
    </main>
  );
}
