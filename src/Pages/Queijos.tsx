import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import queijosEx from "../assets/Produtos/Queijos/queijos.webp";
// import spinerCile from "../assets/Produtos/Leites/spinerCicle.png";
// import spinnerWord from "../assets/Produtos/Leites/spinerWord.png";
import mussarelaEx from "../assets/Produtos/Queijos/mussarela.png";
import pratoEx from "../assets/Produtos/Queijos/prato.png";
import coalhoEx from "../assets/Produtos/Queijos/coalho.png";
import logoF from "../assets/Footer/logoFooter.svg";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";

interface Produto {
  id: string;
  produto: string;
}

export function Queijos() {
  const [queijosProps, setQueijos] = useState<Produto[]>([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://apiprodutosnatville.vercel.app/produtos"
      );
      const data = await response.json();
      setQueijos(data);
    }

    getData();
  }, []);

  const queijosMussarela = queijosProps.length > 0 ? queijosProps[3] : null;
  const queijoPrato = queijosProps.length > 0 ? queijosProps[5] : null;
  const queijoDeCoalho = queijosProps.length > 0 ? queijosProps[4] : null;

  console.log(queijosProps);

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
            <img
              className="max-w-4xl drop-shadow-md max-md:w-80
               max-md:-mt-20 cursor-pointer hover:scale-105
                transition duration-700 "
              src={queijosEx}
              alt="queijo natville natville"
            />
            <div className="flex-col items-center justify-center ">
              <h1
                className="font-mochari text-9xl
               text-custom-blue-strong text-center max-md:text-7xl max-md:-mt-16"
              >
                linha
                <br />
                queijos
              </h1>
              {/* <div
                className="relative flex items-center
               justify-center mt-20 max-md:hidden"
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
              max-md:mx-8"
            >
              <div>
                <img
                  className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                  src={mussarelaEx}
                  alt="queijo natville integral"
                />
              </div>
              <div className="flex-col items-center justify-center  ">
                <h1 className="font-mochari text-7xl text-custom-blue-strong max-md:text-7xl ">
                  queijo <br />
                  mussarela
                </h1>
                <div>
                  <p className="text-custom-blue-strong text-justify mt-8">
                    O clássico que não pode faltar na sua mesa! O Queijo
                    Muçarela é conhecido por sua textura macia, sabor suave e
                    derretimento incrível, sendo a escolha perfeita para pizzas,
                    sanduíches, lasanhas e muito mais. Um queijo versátil que
                    transforma qualquer receita em uma explosão de sabor! <br />
                    <br /> ✅ Derrete na medida certa. <br /> ✅ Perfeito para
                    pizzas, lanches e receitas gratinadas. <br /> ✅ Rico em
                    proteínas e cálcio para sua saúde
                  </p>
                </div>
                <div className="max-md:w-full max-md:items-center max-md:justify-center">
                  <Link to={`/produtos/${queijosMussarela?.id}`}>
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
            </div>
            {/*leite desnataod inicio */}
            <div
              className="flex items-center justify-center
              gap-8 bg-custom-white my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
            >
              <div className="flex-col items-center justify-center">
                <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                  queijo prato
                </h1>
                <div>
                  <p className="text-custom-blue-strong text-justify mt-8">
                    Com sua coloração levemente dourada e textura macia, o
                    Queijo Prato é perfeito para quem busca um sabor equilibrado
                    e irresistível. Ele se destaca nos sanduíches, acompanhando
                    bem pães artesanais e derretendo de forma cremosa em
                    hambúrgueres e lanches quentes. <br />
                    <br /> ✅ Sabor levemente adocicado e cremosidade única.{" "}
                    <br /> ✅ Derrete facilmente, ideal para lanches e
                    hambúrgueres. <br /> ✅ Rico em cálcio e proteínas.
                  </p>
                </div>
                <div className="max-md:w-full max-md:items-center max-md:justify-center">
                  <Link to={`/produtos/${queijoPrato?.id}`}>
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
              <div>
                <img
                  className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                  src={pratoEx}
                  alt="queijo natville integral"
                />
              </div>
            </div>
            {/*zero lactose */}
            <div
              className="flex items-center justify-center
              gap-8 bg-custom-white max-md:flex-col
               max-md:mx-8  max-md:mt-32"
            >
              <div>
                <img
                  className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                  src={coalhoEx}
                  alt="queijo natville integral"
                />
              </div>
              <div className="flex-col items-center justify-center">
                <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                  queijo de coalho
                </h1>
                <div>
                  <p className="text-custom-blue-strong text-justify mt-8">
                    Se tem um queijo que combina com churrasco e momentos
                    especiais, é o Queijo Coalho! Com sua textura firme e sabor
                    levemente salgado, ele pode ser assado na brasa, grelhado na
                    frigideira ou consumido puro, trazendo um gostinho de
                    tradição e autenticidade para sua mesa. <br />
                    <br /> ✅ Dourado por fora, macio por dentro! <br /> ✅
                    Perfeito para churrascos e receitas típicas. <br /> ✅ Sabor
                    autêntico do Nordeste.
                  </p>
                </div>
                <div className="max-md:w-full max-md:items-center max-md:justify-center">
                  <Link to={`/produtos/${queijoDeCoalho?.id}`}>
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
                    className="min-w-56 hover:scale-105 transition duration-700 drop-shadow-lg"
                    src={logoF}
                    alt="natville"
                  />
                </div>
                <a href="https://qrco.de/bfx729" target="_blacnk">
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
                </a>
                <a href="https://qrco.de/bfx729" target="_blacnk">
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
                </a>
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
