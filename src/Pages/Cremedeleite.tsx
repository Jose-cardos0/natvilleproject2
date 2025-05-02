import { useEffect, useState, useLayoutEffect } from "react";

//router dom
import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//itens
import leitesUht from "../assets/Produtos/CremeDeLeite/cremedeleitemockuplateral.webp";

import condensado from "../assets/Produtos/CremeDeLeite/frontalcremedeleite.webp";

import { Footer } from "../Components/Footer";

import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";
import { motion } from "framer-motion";

interface Produto {
  id: string;
  produto: string;
}

export function CremeDeLeite() {
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

  const cremeDeLeite = leiteUht.length > 0 ? leiteUht[25] : null;

  console.log(cremeDeLeite);

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
                className=" drop-shadow-md max-md:w-60 w-96
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
                  Linha <br />
                  Creme de leite
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
               max-md:mx-8 max-md:-mt-36"
            >
              <AnimatedNegative>
                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xs object-center drop-shadow-md
                   max-md:w-40 cursor-pointer hover:scale-105 transition duration-700"
                    src={condensado}
                    alt="leite uht integral"
                  />
                </div>
              </AnimatedNegative>
              <AnimatedY>
                <div className="flex-col items-center justify-center">
                  <h1
                    className="font-mochari text-8xl text-custom-blue-strong
                   max-md:text-6xl"
                  >
                    Creme de leite leve uht
                  </h1>
                  <div>
                    <p className="text-custom-blue-strong text-justify mt-8">
                      Quem resiste ao toque suave e encorpado do creme de leite?
                      Agora você pode dar mais sabor e textura às suas receitas
                      com nosso Creme de Leite Leve UHT, que possui 15% de
                      gordura. Uma opção mais leve, mas com toda a cremosidade
                      que suas preparações merecem!
                      <br />
                      <br />
                      ✅ Textura cremosa com menos gordura! <br />
                      ✅ Perfeito para molhos, sobremesas, tortas e pratos
                      especiais. <br />✅ Mais leve, ideal para quem busca
                      equilíbrio na cozinha sem abrir mão do sabor.
                    </p>
                  </div>
                  <div className="max-md:w-full max-md:items-center max-md:justify-center">
                    <Link to={`/produtos/${cremeDeLeite?.id}`}>
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
            {/* <div
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
            </div> */}
            {/*zero lactose */}
            {/* <div
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
            </div> */}
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
