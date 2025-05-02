import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens

import reqCremoso from "../assets/Produtos/ReqCremoso/bgcremoso.png";

import reqTrad from "../assets/Produtos/ReqCremoso/tradicional.webp";
import reqCebola from "../assets/Produtos/ReqCremoso/cebolaesalsa2.webp";
import reqCheddar from "../assets/Produtos/ReqCremoso/cheddar2.webp";
import reqZero from "../assets/Produtos/ReqCremoso/zerolact2.webp";
import reqReduzido from "../assets/Produtos/ReqCremoso/light2.webp";

import { Footer } from "../Components/Footer";

import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";
import { motion } from "framer-motion";

interface Produto {
  id: string;
  produto: string;
}

export function ReqCremoso() {
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

  const queijoPrcoessadoTradicional = leiteUht.length > 0 ? leiteUht[14] : null;
  const queiijoProcessadoCS = leiteUht.length > 0 ? leiteUht[15] : null;
  const queijoProcessadoCheddar = leiteUht.length > 0 ? leiteUht[16] : null;
  const queijoProcessadoReduzido = leiteUht.length > 0 ? leiteUht[18] : null;
  const queijoProcessadoZeroLact = leiteUht.length > 0 ? leiteUht[17] : null;

  console.log(queijoPrcoessadoTradicional);

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
        flex items-center justify-center m-auto max-md:flex-col "
          >
            <AnimatedSection>
              <img
                className=" drop-shadow-md max-md:w-72 w-3/4
                cursor-pointer hover:scale-105 transition duration-700"
                src={reqCremoso}
                alt="leite uht natville"
              />
            </AnimatedSection>
            <div className="flex-col items-center justify-center ">
              <AnimatedNegative>
                <h1
                  className="font-mochari text-9xl
               text-custom-blue-strong text-center max-md:text-7xl max-md:-mt-6"
                >
                  linha
                  <br />
                  Cremosos
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
             justify-center m-auto z-0 "
        >
          <div
            className="max-w-5xl
        flex-col items-center
        justify-center m-auto mt-20 "
          >
            {/*inicio leite integral */}
            <div
              className="flex items-center justify-center
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
                    className="max-w-1xl object-center drop-shadow-md w-width-bebida
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={reqTrad}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    Queijo processado <br />
                    tradicional
                  </h1>
                  <div>
                    <p
                      className="text-custom-blue-strong text-justify
                     mt-8"
                    >
                      Se você busca um queijo suave, cremoso e versátil, o
                      Queijo Processado Tradicional é a escolha perfeita! Com
                      textura leve e sabor equilibrado, ele é ideal para o café
                      da manhã, lanches e até mesmo para deixar suas receitas
                      ainda mais saborosas.
                      <br />
                      <br />
                      ✅ Textura macia e cremosa. <br />
                      ✅ Sabor equilibrado para qualquer ocasião. <br />✅
                      Perfeito para pães, torradas e sanduíches.
                    </p>
                  </div>
                  <div
                    className="max-md:w-full max-md:items-center
                   max-md:justify-center"
                  >
                    <Link to={`/produtos/${queijoPrcoessadoTradicional?.id}`}>
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
            {/*leite queijo cebola e salsa */}
            {isMobile ? (
              <div
                className="flex items-center justify-center
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
                      className=" object-center drop-shadow-md w-width-bebida
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={reqCebola}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong "
                    >
                      Queijo processado
                      <br />
                      Cebola e Salsa
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong mt-8">
                        O toque especial da cebola e da salsa transforma esse
                        queijo processado em uma opção cheia de personalidade!
                        Ideal para quem gosta de um sabor mais intenso e
                        diferenciado, perfeito para aperitivos e receitas
                        especiais.
                        <br />
                        <br />
                        ✅ Combinação irresistível de temperos. <br />
                        ✅ Sabor marcante e delicioso. <br />✅ Ótimo para
                        petiscos, recheios e canapés.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${queiijoProcessadoCS?.id}`}>
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
                className="flex items-center justify-center
              gap-8  my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
              >
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong "
                    >
                      Queijo processado
                      <br />
                      Cebola e Salsa
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong mt-8">
                        O toque especial da cebola e da salsa transforma esse
                        queijo processado em uma opção cheia de personalidade!
                        Ideal para quem gosta de um sabor mais intenso e
                        diferenciado, perfeito para aperitivos e receitas
                        especiais.
                        <br />
                        <br />
                        ✅ Combinação irresistível de temperos. <br />
                        ✅ Sabor marcante e delicioso. <br />✅ Ótimo para
                        petiscos, recheios e canapés.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${queiijoProcessadoCS?.id}`}>
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
                      className=" object-center drop-shadow-md w-width-bebida
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={reqCebola}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
              </div>
            )}

            {/*zero lactose */}
            <div
              className="flex items-center justify-center
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
                    src={reqCheddar}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    Queijo processado <br />
                    cheddar
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Com sua cor vibrante e sabor inconfundível, o Queijo
                      Processado Cheddar é perfeito para quem ama um toque mais
                      intenso e cremoso. Derrete na medida certa, sendo ideal
                      para hambúrgueres, batatas, nachos e muito mais!
                      <br />
                      <br />
                      ✅ Sabor marcante e cremosidade incrível. <br />
                      ✅ Perfeito para lanches, hambúrgueres e molhos. <br />✅
                      Experimente quente para um derretimento irresistível!
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${queijoProcessadoCheddar?.id}`}>
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
            {/*REQ light */}
            {isMobile ? (
              <div
                className="flex items-center justify-center
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
                      className=" object-center drop-shadow-md w-width-bebida
                    max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={reqReduzido}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                    text-custom-blue-strong "
                    >
                      Queijo processado
                      <br />
                      light
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong mt-8">
                        Se você quer um queijo cremoso, mas com menos gordura, o
                        Queijo Processado Light é a melhor opção! Com a mesma
                        cremosidade e sabor, mas com menos calorias, ele é
                        perfeito para quem busca uma alimentação mais
                        equilibrada sem abrir mão do prazer.
                        <br />
                        <br />
                        ✅ Menos gordura, mesma cremosidade! <br />
                        ✅ Opção ideal para dietas equilibradas. <br />✅ Sabor
                        delicioso com menos calorias.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${queijoProcessadoReduzido?.id}`}>
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
                className="flex items-center justify-center
             gap-8  my-32 max-md:flex-col
              max-md:mx-8 max-md:my-32"
              >
                <AnimatedY>
                  <div className="flex-col items-center justify-center ">
                    <h1
                      className="font-mochari text-8xl max-md:text-7xl
                  text-custom-blue-strong "
                    >
                      Queijo processado
                      <br />
                      light
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong mt-8">
                        Se você quer um queijo cremoso, mas com menos gordura, o
                        Queijo Processado Light é a melhor opção! Com a mesma
                        cremosidade e sabor, mas com menos calorias, ele é
                        perfeito para quem busca uma alimentação mais
                        equilibrada sem abrir mão do prazer.
                        <br />
                        <br />
                        ✅ Menos gordura, mesma cremosidade! <br />
                        ✅ Opção ideal para dietas equilibradas. <br />✅ Sabor
                        delicioso com menos calorias.
                      </p>
                    </div>
                    <div className="max-md:w-full max-md:items-center max-md:justify-center">
                      <Link to={`/produtos/${queijoProcessadoReduzido?.id}`}>
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
                      className=" object-center drop-shadow-md w-width-bebida
                  max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                      src={reqReduzido}
                      alt="leite uht integral"
                    />
                  </div>
                </AnimatedNegative>
              </div>
            )}
            {/*REQ REDUZIDO */}
            <div
              className="flex items-center justify-center
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
                    src={reqZero}
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
                    Queijo processado
                    <br />
                    zero lactose
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Agora, quem tem intolerância à lactose pode aproveitar
                      todo o sabor e cremosidade do nosso Queijo Processado Zero
                      Lactose! Feito especialmente para quem busca uma
                      alimentação inclusiva sem abrir mão do sabor.
                      <br />
                      <br />
                      ✅ Zero lactose, mas com muito sabor! <br />
                      ✅ Perfeito para intolerantes à lactose. <br />✅ Cremoso
                      e nutritivo como o tradicional.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${queijoProcessadoZeroLact?.id}`}>
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
            flex items-center justify-center m-auto -mt-32"
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
