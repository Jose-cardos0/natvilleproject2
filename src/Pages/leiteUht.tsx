import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import leitesUht from "../assets/Produtos/Leites/leitesUht.webp";

import leiteUhtEx from "../assets/Produtos/Leites/leiteUhtExemplo.webp";
import leiteUhtExDes from "../assets/Produtos/Leites/leiteUhtDesn.webp";
import leiteUhtExZero from "../assets/Produtos/Leites/leiteUhtZero.webp";
import leiteSemi from "../assets/Produtos/Leites/semidesnatado.webp";
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

export function LeitesUht() {
  const [leiteUht, setLeiteUht] = useState<Produto[]>([]);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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

  const leiteUhtIntegral = leiteUht.length > 0 ? leiteUht[0] : null;
  const leiteUhtDesnatado = leiteUht.length > 0 ? leiteUht[1] : null;
  const leiteUhtZero = leiteUht.length > 0 ? leiteUht[2] : null;

  console.log(leiteUhtIntegral);

  return (
    <main
      className="w-full flex items-center
     justify-center m-auto bg-cover overflow-hidden relative "
    >
      {/*section info leite */}

      <section className="flex-col items-center justify-center bg-custom-white">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="h-screen w-screen flex items-center 
          justify-center m-auto -mt-8 bg-cover bg-center bg-fixed z-10"
        >
          <div
            className="max-w-7xl 
        flex items-center justify-center gap-8 max-md:flex-col "
          >
            <AnimatedSection>
              <img
                className=" drop-shadow-md max-md:w-72 max-w-2xl
                cursor-pointer hover:scale-105 transition duration-700"
                src={leitesUht}
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
                  leite uht
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
            className="max-w-7xl
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
                    className="max-w-7xl object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteUhtEx}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    leite uht <br />
                    integral
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Se você busca um leite encorpado, cheio de sabor e rico em
                      nutrientes, o Leite UHT Integral é a escolha certa! Com um
                      equilíbrio perfeito entre proteínas, cálcio e vitaminas
                      essenciais, ele fortalece os ossos e dá energia para o seu
                      dia. Perfeito para consumir puro, com café, achocolatado
                      ou em receitas deliciosas. <br /> <br />
                      ✅ Fonte natural de cálcio e vitamina D <br />
                      ✅ Textura cremosa e sabor marcante <br />✅ Ideal para
                      toda a família!
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteUhtIntegral?.id}`}>
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
                    className="max-w-7xl object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteUhtExDes}
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
                    leite uht
                    <br />
                    desnatado
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Quer manter uma alimentação equilibrada, mas sem abrir mão
                      dos nutrientes essenciais? O Leite UHT Desnatado tem baixo
                      teor de gordura e é repleto de proteínas e cálcio para
                      cuidar da sua saúde. A opção perfeita para quem busca
                      leveza, sem perder os benefícios do leite! <br /> <br />{" "}
                      ✅ Menos gordura, mais saúde! <br />✅ Rico em cálcio e
                      proteínas <br /> ✅ Perfeito para dietas e estilo de vida
                      saudável
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteUhtDesnatado?.id}`}>
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
                    className="max-w-7xl object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteUhtExZero}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    leite uht <br />
                    zero lactose
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Para quem tem intolerância à lactose ou busca uma digestão
                      mais leve, o Leite UHT Zero Lactose mantém todo o sabor e
                      os nutrientes do leite tradicional, mas com lactase
                      adicionada, facilitando a digestão e evitando
                      desconfortos. Agora você pode saborear sem preocupações!{" "}
                      <br /> <br />
                      ✅ 100% sabor, 0% lactose! <br /> ✅ Fácil digestão, sem
                      abrir mão do cálcio e das proteínas. <br /> ✅ Perfeito
                      para quem busca bem-estar e saúde digestiva.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteUhtZero?.id}`}>
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
            {/*SEMIDESNATADO */}
            <div
              className="flex items-center justify-center
              gap-8  max-md:flex-col my-32
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
                    className="max-w-7xl object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteSemi}
                    alt="leite uht semidesnatado"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    leite uht <br />
                    semidesnatado
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Se você busca um meio-termo entre sabor e leveza, o Leite
                      UHT Semidesnatado é a melhor escolha! Com menos gordura
                      que o integral e mais cremosidade que o desnatado, ele
                      traz o melhor dos dois mundos, mantendo todos os
                      benefícios do leite. <br /> <br /> ✅ O equilíbrio
                      perfeito entre sabor e leveza. <br /> ✅ Mantém proteínas
                      e cálcio essenciais. <br /> ✅ Ótimo para o dia a dia da
                      sua família
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteUhtZero?.id}`}>
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
            {/*fim semindesnatado */}
          </div>

          {/*footer inicio */}
          <footer
            className="w-full h-auto mb-5
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
                    className="min-w-56 hover:scale-105
                     transition duration-700 drop-shadow-lg"
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
