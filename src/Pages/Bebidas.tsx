import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import bebidasBanner from "../assets/Produtos/Bebidas/bg1.webp";
import bebidaMorango from "../assets/Produtos/Bebidas/morsngo2.webp";
import bebidaAmeixa from "../assets/Produtos/Bebidas/ameixa2.webp";
import BebidaCoco from "../assets/Produtos/Bebidas/coco2.webp";
import graviola from "../assets/Produtos/Bebidas/graviola2.webp";
import bandeja from "../assets/Produtos/Bebidas/bandeija.webp";

import { Footer } from "../Components/Footer";

import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";
import { motion } from "framer-motion";

interface Produto {
  id: string;
  produto: string;
}

export function Bebidas() {
  const [leiteUht, setLeiteUht] = useState<Produto[]>([]);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    function handleSize() {
      if (innerWidth < 480) {
        setIsMobile(true);
      } else setIsMobile(false);
    }

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

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

  const morango = leiteUht.length > 0 ? leiteUht[7] : null;
  const ameixa = leiteUht.length > 0 ? leiteUht[8] : null;
  const coco = leiteUht.length > 0 ? leiteUht[9] : null;
  const graviolaInfo = leiteUht.length > 0 ? leiteUht[10] : null;
  const bandejaInfo = leiteUht.length > 0 ? leiteUht[11] : null;

  console.log(morango);

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
        flex items-center justify-center max-md:flex-col "
          >
            <AnimatedSection>
              <img
                className=" drop-shadow-md max-md:w-72
                cursor-pointer hover:scale-105 transition duration-700"
                src={bebidasBanner}
                alt="leite uht natville"
              />
            </AnimatedSection>

            <div className="flex-col items-center justify-center ">
              <AnimatedNegative>
                <h1
                  className="font-mochari text-9xl max-md:-mt-16 
               text-custom-blue-strong text-center max-md:text-7xl"
                >
                  linha
                  <br />
                  bebidas
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
             justify-center m-auto z-0  "
        >
          <div
            className="max-w-5xl
        flex-col items-center
        justify-center m-auto mt-20 "
          >
            {/*inicio leite integral */}
            <div
              className="max-w-6xl flex items-center justify-center
              gap-8  max-md:flex-col
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
                    className=" object-center drop-shadow-md w-width-bebida2
                   max-md:w-40 cursor-pointer 
                   hover:scale-105 transition duration-700"
                    src={bebidaMorango}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    Bebida sabor <br />
                    Morango
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      A combinação perfeita do leite com o sabor vibrante e
                      adocicado do morango! Uma bebida cremosa e leve, ideal
                      para quem busca um toque frutado e refrescante no dia a
                      dia. <br />
                      <br />✅ Sabor suave e cremoso. <br /> ✅ Fonte de cálcio
                      e proteínas. <br /> ✅ Ideal para lanches rápidos e
                      nutritivos.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${morango?.id}`}>
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
            {/*leite ameixa */}
            {isMobile ? (
              <div
                className=" max-w-6xl flex items-center justify-center
              gap-8  my-32 max-md:flex-col
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
                      className=" object-center drop-shadow-md  w-width-bebida
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={bebidaAmeixa}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong"
                    >
                      bebida sabor
                      <br />
                      ameixa
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong text-justify mt-8">
                        O sabor marcante da ameixa combinado com a cremosidade
                        do leite resulta em uma bebida deliciosa e cheia de
                        benefícios. Além de saborosa, a ameixa é conhecida por
                        auxiliar no bom funcionamento do intestino!
                        <br />
                        <br />
                        ✅ Sabor encorpado e equilibrado. <br />
                        ✅ Ajuda na digestão e no bem-estar intestinal. <br />✅
                        Rica em nutrientes essenciais.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${ameixa?.id}`}>
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
            ) : (
              <div
                className=" max-w-6xl flex items-center justify-center
              gap-8  my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
              >
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong"
                    >
                      bebida sabor
                      <br />
                      ameixa
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong text-justify mt-8">
                        O sabor marcante da ameixa combinado com a cremosidade
                        do leite resulta em uma bebida deliciosa e cheia de
                        benefícios. Além de saborosa, a ameixa é conhecida por
                        auxiliar no bom funcionamento do intestino!
                        <br />
                        <br />
                        ✅ Sabor encorpado e equilibrado. <br />
                        ✅ Ajuda na digestão e no bem-estar intestinal. <br />✅
                        Rica em nutrientes essenciais.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${ameixa?.id}`}>
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
                      className=" object-center drop-shadow-md  w-width-bebida
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={bebidaAmeixa}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
              </div>
            )}
            {/*zero lactose */}
            <div
              className="max-w-6xl flex items-center justify-center
              gap-8  max-md:flex-col
               max-md:mx-8  max-md:mt-32"
            >
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className=" object-center drop-shadow-md w-width-bebida
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={BebidaCoco}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    bebida sabor <br />
                    coco
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Se você ama o sabor suave e marcante do coco, essa bebida
                      é para você! Combinando a leveza do leite com a
                      cremosidade e o aroma irresistível do coco, essa opção é
                      perfeita para quem busca algo diferente e delicioso.
                      <br />
                      <br />
                      ✅ Sabor tropical e levemente adocicado. <br />
                      ✅ Cremosa e nutritiva. <br />✅ Uma experiência
                      refrescante a cada gole.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${coco?.id}`}>
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
            {/*GRAVIOLA */}
            {isMobile ? (
              <div
                className=" max-w-6xl flex items-center justify-center
               gap-8  my-32 max-md:flex-col
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
                      className=" object-center drop-shadow-md w-width-bebida2
                    max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={graviola}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                    text-custom-blue-strong"
                    >
                      bebida sabor
                      <br />
                      graviola
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong text-justify mt-8">
                        O irresistível sabor tropical da graviola em uma bebida
                        láctea equilibrada e cheia de benefícios. Uma escolha
                        deliciosa para quem gosta de sabores autênticos e
                        refrescantes! <br />
                        <br /> ✅ Toque tropical com sabor único. <br /> ✅
                        Textura cremosa e leve. <br /> ✅ Rica em cálcio para
                        fortalecer os ossos.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${graviolaInfo?.id}`}>
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
            ) : (
              <div
                className=" max-w-6xl flex items-center justify-center
              gap-8  my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
              >
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong"
                    >
                      bebida sabor
                      <br />
                      graviola
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong text-justify mt-8">
                        O irresistível sabor tropical da graviola em uma bebida
                        láctea equilibrada e cheia de benefícios. Uma escolha
                        deliciosa para quem gosta de sabores autênticos e
                        refrescantes! <br />
                        <br /> ✅ Toque tropical com sabor único. <br /> ✅
                        Textura cremosa e leve. <br /> ✅ Rica em cálcio para
                        fortalecer os ossos.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${graviolaInfo?.id}`}>
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
                      className=" object-center drop-shadow-md w-width-bebida2
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={graviola}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
              </div>
            )}
            {/*bandeja */}
            <div
              className=" max-w-6xl flex items-center justify-center
              gap-8  my-32 max-md:flex-col
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
                    className=" object-center drop-shadow-md max-w-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700 "
                    src={bandeja}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center ">
                  <h1
                    className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong"
                  >
                    bebida sabor
                    <br />
                    morango 540g
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Um leite UHT integral saudável e rico em cálcio é aquele
                      que mantém boa parte dos nutrientes naturais do leite
                      fresco, como proteínas, vitaminas (especialmente a
                      vitamina D, que auxilia na absorção do cálcio) e, claro, o
                      próprio cálcio, essencial para ossos e dentes fortes. Esse
                      tipo de leite é submetido a um processo de
                      ultra-pasteurização (UHT), onde é aquecido a altas
                      temperaturas por poucos segundos, eliminando bactérias
                      prejudiciais sem alterar muito seu perfil nutricional.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${bandejaInfo?.id}`}>
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
          </div>

          {/*footer inicio */}
          <footer
            className="w-full h-auto mb-5
            flex items-center justify-center m-auto max-md:-mt-28"
          >
            <div
              className="w-8/12 
               flex-col items-center
            "
            >
              <Footer />

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
