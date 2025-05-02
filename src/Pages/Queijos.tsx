import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import queijosEx from "../assets/Produtos/Queijos/queijos.webp";
import mussarelaEx from "../assets/Produtos/Queijos/mussarela.png";
import pratoEx from "../assets/Produtos/Queijos/prato.png";
import coalhoEx from "../assets/Produtos/Queijos/coalho.png";

//pagina
import { Footer } from "../Components/Footer";

//animacoes
import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";

interface Produto {
  id: string;
  produto: string;
}

export function Queijos() {
  const [queijosProps, setQueijos] = useState<Produto[]>([]);

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
          <AnimatedY>
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
               text-custom-blue-strong text-center
                max-md:text-7xl max-md:-mt-44"
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
          </AnimatedY>
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
            {/*inicio queijo mussarela */}
            <div
              className="flex items-center justify-center
              gap-8 bg-custom-white max-md:flex-col
              max-md:mx-8"
            >
              <AnimatedSection>
                <div>
                  <img
                    className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                    src={mussarelaEx}
                    alt="queijo natville integral"
                  />
                </div>
              </AnimatedSection>
              <AnimatedY>
                <div className="flex-col items-center justify-center  ">
                  <h1 className="font-mochari text-7xl text-custom-blue-strong max-md:text-7xl ">
                    queijo <br />
                    mussarela
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      O clássico que não pode faltar na sua mesa! O Queijo
                      Muçarela é conhecido por sua textura macia, sabor suave e
                      derretimento incrível, sendo a escolha perfeita para
                      pizzas, sanduíches, lasanhas e muito mais. Um queijo
                      versátil que transforma qualquer receita em uma explosão
                      de sabor! <br />
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
              </AnimatedY>
            </div>
            {/*leite queijo prato */}
            {isMobile ? (
              <div
                className="flex items-center justify-center
              gap-8 bg-custom-white my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
              >
                <AnimatedSection>
                  <div>
                    <img
                      className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                      src={pratoEx}
                      alt="queijo natville integral"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedY>
                  <div className="flex-col items-center justify-center">
                    <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                      queijo prato
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong text-justify mt-8">
                        Com sua coloração levemente dourada e textura macia, o
                        Queijo Prato é perfeito para quem busca um sabor
                        equilibrado e irresistível. Ele se destaca nos
                        sanduíches, acompanhando bem pães artesanais e
                        derretendo de forma cremosa em hambúrgueres e lanches
                        quentes. <br />
                        <span className="text-start">
                          <br /> ✅ Cremosidade únida. <br /> ✅ Derrete
                          facilmente, ideal para lanches e hambúrgueres. <br />{" "}
                          ✅ Rico em cálcio e proteínas.
                        </span>
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
                </AnimatedY>
              </div>
            ) : (
              <div
                className="flex items-center justify-center
              gap-8 bg-custom-white my-32 max-md:flex-col
               max-md:mx-8 max-md:my-32"
              >
                <AnimatedSection>
                  <div className="flex-col items-center justify-center">
                    <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                      queijo prato
                    </h1>
                    <div>
                      <p className="text-custom-blue-strong text-justify mt-8">
                        Com sua coloração levemente dourada e textura macia, o
                        Queijo Prato é perfeito para quem busca um sabor
                        equilibrado e irresistível. Ele se destaca nos
                        sanduíches, acompanhando bem pães artesanais e
                        derretendo de forma cremosa em hambúrgueres e lanches
                        quentes. <br />
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
                </AnimatedSection>
                <AnimatedNegative>
                  <div>
                    <img
                      className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                      src={pratoEx}
                      alt="queijo natville integral"
                    />
                  </div>
                </AnimatedNegative>
              </div>
            )}

            {/*zero lactose */}
            <div
              className="flex items-center justify-center
              gap-8 bg-custom-white max-md:flex-col
               max-md:mx-8  max-md:mt-32"
            >
              <AnimatedSection>
                <div>
                  <img
                    className="max-w-2xl object-center drop-shadow-md
                   max-md:w-72 cursor-pointer hover:scale-105 transition duration-700"
                    src={coalhoEx}
                    alt="queijo natville integral"
                  />
                </div>
              </AnimatedSection>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1 className="font-mochari text-8xl text-custom-blue-strong max-md:text-7xl">
                    queijo de coalho
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Se tem um queijo que combina com churrasco e momentos
                      especiais, é o Queijo Coalho! Com sua textura firme e
                      sabor levemente salgado, ele pode ser assado na brasa,
                      grelhado na frigideira ou consumido puro, trazendo um
                      gostinho de tradição e autenticidade para sua mesa. <br />
                      <br /> ✅ Dourado por fora, macio por dentro! <br /> ✅
                      Perfeito para churrascos e receitas típicas. <br /> ✅
                      Sabor autêntico do Nordeste.
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
              </AnimatedY>
            </div>
          </div>

          {/*footer inicio */}
          <AnimatedY>
            <footer
              className="w-full h-auto mb-5
            flex items-center justify-center m-auto"
            >
              <div
                className="w-8/12 
               flex-col items-center
            "
              >
                <div>
                  <Footer />
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
          </AnimatedY>
          {/*fim footer */}
        </div>
      </section>
    </main>
  );
}
