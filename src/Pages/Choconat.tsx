import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/Produtos/Achocolatado/bgChoconat.webp";
//itens

import logoF from "../assets/Footer/logoFooterWhite.png";

//choconat itens
import achocolatados from "../assets/Produtos/Achocolatado/bg1.webp";
import chocolat1L from "../assets/Produtos/Achocolatado/choconat1lFrente.webp";
import chocolat200ml from "../assets/Produtos/Achocolatado/choconat200mlLateral.webp";

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

export function Choconat() {
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

  const leiteUhtIntegral = leiteUht.length > 0 ? leiteUht[13] : null;
  const leiteUhtDesnatado = leiteUht.length > 0 ? leiteUht[13] : null;

  console.log(leiteUhtIntegral);

  return (
    <main
      className="w-full flex items-center
     justify-center m-auto bg-cover overflow-hidden relative "
    >
      {/*section info leite */}

      <section className="flex-col items-center justify-center bg-gradient-to-tl from-custom-choco via-amber-700 to-custom-choco ">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="h-screen w-screen flex items-center
         justify-center m-auto bg-cover bg-center
          bg-no-repeat z-10"
        >
          <div
            className="max-w-7xl 
        flex items-center justify-center  max-md:flex-col relative "
          >
            <AnimatedSection>
              <img
                className=" max-md:w-96 -mt-28 max-w-4xl
               max-md:-mt-32 cursor-pointer hover:scale-105 
               transition duration-700"
                src={achocolatados}
                alt="achocolatado choconat uht natville"
              />
            </AnimatedSection>
            {/* <div className="flex-col items-center justify-center absolute top-0 "> */}
            {/* <AnimatedNegative> */}
            {/* <img src={nomeLinha} alt="" /> */}
            {/* <h1
                  className="font-mochari text-9xl
               text-custom-white text-center
                max-md:text-7xl max-md:px-8 text-shadow   "
                >
                  linha
                  <br />
                  Achocolatados
                </h1> */}
            {/* </AnimatedNegative> */}
            {/* </div> */}
          </div>
        </div>
        {/*inicio leites */}
        <div
          className="h-auto w-screen flex-col items-center
             justify-center m-auto z-0 max-md:-mt-40"
        >
          <div
            className="max-w-7xl
        flex-col items-center
        justify-center m-auto mt-20"
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
                    className="max-w-7xl object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={chocolat1L}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-white max-md:text-7xl">
                    Choconat 1L
                  </h1>
                  <div>
                    <p className="text-white text-justify mt-8">
                      Que tal um chocolate delicioso e nutritivo para qualquer
                      momento do dia? Nossa Bebida Láctea UHT Sabor Chocolate
                      combina o melhor do leite com um toque irresistível de
                      cacau, trazendo uma explosão de sabor e energia para você
                      e sua família! Perfeita para o café da manhã, lanches ou
                      até como um reforço pós-treino, essa bebida é nutritiva,
                      cremosa e prática, ideal para quem busca uma opção gostosa
                      e revigorante a qualquer hora. <br /> <br /> ✅ Sabor
                      intenso de chocolate com a cremosidade do leite. <br /> ✅
                      Fonte de cálcio, proteínas e vitaminas essenciais. <br />{" "}
                      ✅ Praticidade UHT: pronto para beber a qualquer hora, sem
                      necessidade de refrigeração antes de abrir. <br /> ✅
                      Perfeito para crianças e adultos que amam um toque doce no
                      dia!
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteUhtIntegral?.id}`}>
                      <button
                        className="relative 
          overflow-hidden
           flex-shrink-0
    bg-white
    text-custom-choco py-3 
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
              gap-8   my-32 max-md:flex-col
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
                    className=" object-center drop-shadow-md max-w-72
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={chocolat200ml}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center ">
                  <h1
                    className="font-mochari text-8xl max-md:text-6xl
                   text-white"
                  >
                    Choconat 200ml
                  </h1>
                  <div>
                    <p className="text-white text-justify mt-8">
                      A Bebida Láctea UHT Sabor Chocolate é uma opção deliciosa
                      e nutritiva para quem busca sabor e energia no dia a dia.
                      Feita com leite submetido ao processo de
                      ultra-pasteurização (UHT), ela mantém boa parte dos
                      nutrientes essenciais, como proteínas e cálcio,
                      contribuindo para ossos e dentes fortes. Além disso, é
                      enriquecida com vitaminas, incluindo a vitamina D, que
                      auxilia na absorção do cálcio. Com um sabor irresistível
                      de chocolate, é perfeita para qualquer momento, seja no
                      café da manhã, no lanche ou após a prática de atividades
                      físicas.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteUhtDesnatado?.id}`}>
                      <button
                        className="relative 
          overflow-hidden
           flex-shrink-0
    bg-white
    text-custom-choco py-3 
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
            flex items-center justify-center m-auto max-md:-mt-40"
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
                    className="min-w-56 max-w-10 hover:scale-105 transition duration-700 drop-shadow-lg"
                    src={logoF}
                    alt="natville"
                  />
                </div>
                <div className="flex-col items-center justify-center ">
                  <p
                    className="text-white
                   text-center font-mochari text-4xl"
                  >
                    Acompanhe nossas
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <AiOutlineYoutube
                      size={25}
                      color="#fff"
                      className="cursor-pointer hover:scale-105 transition duration-300"
                    />
                    <CiFacebook
                      size={25}
                      color="#fff"
                      className="cursor-pointer hover:scale-105 transition duration-300"
                    />
                    <FaWhatsapp
                      size={25}
                      color="#fff"
                      className="cursor-pointer hover:scale-105 transition duration-300"
                    />
                    <FaInstagram
                      size={25}
                      color="#fff"
                      className="cursor-pointer hover:scale-105 transition duration-300"
                    />
                    <AiOutlineLinkedin
                      size={25}
                      color="#fff"
                      className="cursor-pointer hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p
                    className="text-white
                  text-center font-mochari text-4xl"
                  >
                    redes sociais
                  </p>
                </div>
                <div
                  className="font-mochari text-white
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
