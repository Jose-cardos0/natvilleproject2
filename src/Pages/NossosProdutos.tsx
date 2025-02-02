import { Link } from "react-router-dom";

import bg1 from "../assets/QuemSomos/bgProdutos.svg";

//imgs
import bgLeites from "../assets/Produtos/BgProdutos/leites_1.png";
import bgBebidas from "../assets/Produtos/BgProdutos/bebidaslac.png";
import cremeDleite from "../assets/Produtos/BgProdutos/cremeDeLeite.png";
import emPoBg from "../assets/Produtos/BgProdutos/empo.png";
import bgCondensado from "../assets/Produtos/BgProdutos/leiteCondens.png";
import bgReqCremoso from "../assets/Produtos/BgProdutos/queijoProcess.png";
import bgQuijos from "../assets/Produtos/BgProdutos/queijos.png";
import manteigas from "../assets/Produtos/BgProdutos/manteigas.png";

import desntBg from "../assets/Produtos/BgProdutos/desnBg_1.png";
import inteBg from "../assets/Produtos/BgProdutos/integralBg2.png";
import zeroBg from "../assets/Produtos/BgProdutos/zeroBg_1.png";

export function NossosProdutos() {
  return (
    <main className="bg-custom-white ">
      <section
        style={{ backgroundImage: `url(${bg1})` }}
        className="w-full h-full flex items-center 
          justify-center m-auto bg-fixed pt-20 max-md:-mt-72 flex-col "
      >
        <h1 className="font-mochari text-8xl text-custom-blue-strong text-center -mt-10 mb-8 flex items-center justify-center">
          {/* <img className="max-w-52" src={vaaca} alt="" /> */}
          nossos produtos
        </h1>
        <div
          className="max-w-7xl grid grid-cols-4
         mm:max-md:grid-cols-1 gap-14 max-md:mt-96"
        >
          {/*GRID 1 */}
          <Link to={"/leiteuht"}>
            <div
              style={{ backgroundImage: `url(${inteBg})` }}
              className="py-6 px-8 bg-cover
             bg-center rounded-lg shadow-2xl relative w-80 h-80"
            >
              <h1
                className="font-mochari text-custom-white text-6xl
             text-center mb-3  "
              >
                leites uht
              </h1>
              <div className="w-full h-full flex items-center justify-center cursor-pointer">
                <img
                  className="w-40 mb-24 drop-shadow-xl hover:scale-105  transition duration-700"
                  src={bgLeites}
                  alt="queijos natville"
                />
              </div>

              <Link to={"/leiteuht"}>
                <div className="absolute left-3 -bottom-4">
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
              </Link>
            </div>
          </Link>
          {/*FIM GRID 1 */}
          {/*GRID 2 */}
          <div
            style={{ backgroundImage: `url(${desntBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-6xl
             text-center mb-4"
            >
              Bebidas
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className="w-52 mb-24 drop-shadow-xl hover:scale-105 transition duration-700"
                src={bgBebidas}
                alt="queijos natville"
              />
            </div>

            <Link to={"/bebidas"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>

          {/*FIM GRID 2 */}
          {/*GRID 3 */}

          <div
            style={{ backgroundImage: `url(${zeroBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-6xl
             text-center  "
            >
              Leite em pó
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className="w-64 mb-24 drop-shadow-xl hover:scale-105 transition duration-700"
                src={emPoBg}
                alt="queijos natville"
              />
            </div>

            <Link to={"/nossosprodutos"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>
          {/*FIM GRID 3 */}
          {/*GRID 4 */}

          <div
            style={{ backgroundImage: `url(${inteBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-6xl
             text-center mb-6 "
            >
              queijos
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className=" mb-24 drop-shadow-xl hover:scale-105  transition duration-700"
                src={bgQuijos}
                alt="queijos natville"
              />
            </div>

            <Link to={"/queijos"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>
          {/*FIM GRID 4 */}
          {/*GRID 5 */}

          <div
            style={{ backgroundImage: `url(${zeroBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-5xl
             text-center -mb-2"
            >
              Leite condensado
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className="w-44 mb-24 drop-shadow-xl hover:scale-105  transition duration-700"
                src={bgCondensado}
                alt="queijos natville"
              />
            </div>

            <Link to={"/condensados"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>

          {/*FIM GRID 5 */}
          {/*GRID 6 */}

          <div
            style={{ backgroundImage: `url(${desntBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-6xl
             text-center mb-3 "
            >
              culinário
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className="w-56 mb-24 drop-shadow-xl hover:scale-105  transition duration-700"
                src={cremeDleite}
                alt="queijos natville"
              />
            </div>

            <Link to={"/nossosprodutos"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>

          {/*FIM GRID 6 */}
          {/*GRID 7 */}

          <div
            style={{ backgroundImage: `url(${inteBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-6xl
             text-center mb-2 "
            >
              cremosos
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className="w-48 mb-24 drop-shadow-xl hover:scale-105  transition duration-700"
                src={bgReqCremoso}
                alt="queijos natville"
              />
            </div>

            <Link to={"/reqcremoso"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>

          {/*FIM GRID 7 */}
          {/*GRID 8 */}

          <div
            style={{ backgroundImage: `url(${zeroBg})` }}
            className="py-6 px-8 bg-cover bg-center rounded-lg shadow-2xl relative w-80 h-80"
          >
            <h1
              className="font-mochari text-custom-white text-6xl
             text-center mb-2"
            >
              cremosos
            </h1>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <img
                className="w-40 mb-24 drop-shadow-xl hover:scale-105  transition duration-700"
                src={manteigas}
                alt="queijos natville"
              />
            </div>

            <Link to={"/manteigas"}>
              <div className="absolute left-3 -bottom-4">
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
            </Link>
          </div>

          {/*FIM GRID 8 */}
        </div>
      </section>
    </main>
  );
}
