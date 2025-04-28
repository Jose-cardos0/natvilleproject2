import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import leitesUht from "../assets/Produtos/LeiteEmPo/bgLeites.webp";

import leiteUhtEx from "../assets/Produtos/LeiteEmPo/INTEGRAL200.webp";
import leiteUhtExDes from "../assets/Produtos/LeiteEmPo/DESNATADO200.webp";
import leiteUhtExZero from "../assets/Produtos/LeiteEmPo/ZERO202gg.webp";
import leiteEmPo25 from "../assets/Produtos/LeiteEmPo/LeiteEmPo25.webp";
import sorodeleite from "../assets/Produtos/LeiteEmPo/soromockup.webp";
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

export function LeitesEmPo() {
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

  const leiteUhtIntegral = leiteUht.length > 0 ? leiteUht[12] : null;
  const leiteUhtDesnatado = leiteUht.length > 0 ? leiteUht[20] : null;
  const leiteUhtZero = leiteUht.length > 0 ? leiteUht[21] : null;
  const leiteInte25 = leiteUht.length > 0 ? leiteUht[22] : null;
  const soroEmPo = leiteUht.length > 0 ? leiteUht[23] : null;

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
                  leite em pó
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
            className="max-w-6xl
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
                    className="max-w-48 object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteUhtEx}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    leite em pó <br />
                    integral
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Nosso Leite em Pó Integral é feito com leite puro,
                      preservando todos os nutrientes essenciais, como cálcio,
                      proteínas e vitaminas. Com um sabor inconfundível e
                      textura cremosa, ele é perfeito para o dia a dia, desde o
                      café da manhã até o preparo de receitas deliciosas.
                      <br />
                      <br />
                      ✅ Sabor e cremosidade incomparáveis. <br />
                      ✅ Rico em cálcio e proteínas. <br />✅ Perfeito para
                      café, achocolatados, receitas e muito mais.
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
              <AnimatedY>
                <div className="flex-col items-center justify-center text-end ">
                  <h1
                    className="font-mochari text-8xl max-md:text-7xl
                   text-custom-blue-strong"
                  >
                    leite em pó
                    <br />
                    desnatado instantâneo
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-end mt-8 ">
                      Se você busca uma opção mais leve, mas com todos os
                      benefícios do leite, o Leite em Pó Desnatado Instantâneo é
                      a escolha ideal! Com menos gordura, ele preserva cálcio,
                      proteínas e vitaminas essenciais, garantindo uma
                      alimentação equilibrada sem abrir mão do sabor.
                      <br />
                      <br />
                      ✅ Menos gordura, mais leveza! <br />
                      ✅ Dissolução instantânea para mais praticidade. <br />✅
                      Ideal para dietas equilibradas e receitas mais leves.
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
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="max-w-48 object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteUhtExDes}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
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
                    className="max-w-48 object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteUhtExZero}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    leite em pó <br />
                    zero lactose instantâneo
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Agora, quem tem intolerância à lactose pode aproveitar
                      todo o sabor e os nutrientes do leite com o nosso Leite em
                      Pó Zero Lactose Instantâneo! Feito especialmente para quem
                      busca uma alternativa saudável e acessível, sem abrir mão
                      da qualidade.
                      <br />
                      <br />
                      ✅ Zero lactose, mas com muito sabor! <br />
                      ✅ Rico em cálcio e proteínas essenciais. <br />✅
                      Dissolve rapidamente, perfeito para o dia a dia.
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
            {/*SACO DE 25KG */}
            <div
              className="flex items-center justify-center mt-28
              gap-8  max-md:flex-col
               max-md:mx-8  max-md:mt-32"
            >
              <AnimatedY>
                <div className="flex-col items-center justify-center text-end">
                  <h1
                    className="font-mochari text-8xl
                   text-custom-blue-strong max-md:text-7xl "
                  >
                    leite em pó <br />
                    integral 25 kg
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-end mt-8">
                      O Leite em Pó Integral 25kg é a escolha ideal para
                      indústrias que necessitam de qualidade superior, alto
                      rendimento e pureza em suas formulações. Produzido a
                      partir de leite fresco selecionado, ele mantém todas as
                      propriedades naturais, garantindo um produto rico em
                      cálcio, proteínas e vitaminas essenciais.
                      <br />
                      <br />
                      ✅ Matéria-prima de alta qualidade para produtos
                      alimentícios. <br />
                      ✅ Excelente solubilidade e cremosidade. <br />
                      ✅ Ideal para panificação, laticínios, confeitaria,
                      sorvetes e muito mais. <br />✅ Padrão industrial com
                      consistência e confiabilidade.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${leiteInte25?.id}`}>
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
                    className="max-w-80 object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={leiteEmPo25}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
            </div>
            {/*SACO DE SORO 25KG */}
            <div
              className="flex items-center justify-center mt-28
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
                    className="max-w-80 object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={sorodeleite}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-5xl">
                    Soro de leite em pó <br />
                    parcialmente desmineralizado 40%
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      O soro de leite em pó parcialmente desmineraizado é a
                      escolha ideal para indústrias que necessitam de qualidade
                      superior, alto rendimento e pureza em suas formulações.
                      Produzido a partir de leite fresco selecionado, ele mantém
                      todas as propriedades naturais, garantindo um produto rico
                      em cálcio, proteínas e vitaminas essenciais.
                      <br />
                      <br />
                      ✅ Matéria-prima de alta qualidade para produtos
                      alimentícios. <br />
                      ✅ Excelente solubilidade e cremosidade. <br />
                      ✅ Ideal para panificação, laticínios, confeitaria,
                      sorvetes e muito mais. <br />✅ Padrão industrial com
                      consistência e confiabilidade.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${soroEmPo?.id}`}>
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
