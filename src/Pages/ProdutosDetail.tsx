import { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDesktopDownload } from "react-icons/go";

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

interface NutritionalData {
  acucaresAdicionados: string;
  acucaresTotais: string;
  calcio: string;
  carbo: string;
  fibrasAlimentares: string;
  gordurasSaturadas: string;
  gordurasTotais: string;
  gordurasTrans: string;
  kcal: string;
  proteinas: string;
  sodio: string;
}

interface Porcoes {
  porcaoMenor: string;
  porcaoMiaor: string;
  porcao: string;
  porcaototal: string;
}

interface VD {
  acucaresAdicionados: string;
  acucaresTotais: string;
  calcio: string;
  carbo: string;
  fibrasAlimentares: string;
  gordurasSaturadas: string;
  gordurasTotais: string;
  gordurasTrans: string;
  kcal: string;
  proteinas: string;
  sodio: string;
}

interface Aviso {
  avisoTabela: string;
}

interface Informacoes {
  ingredientes: string;
  alergenicos: string;
  conservacaoFechado: string;
  conservacaoAberto: string;
  gtin13: string;
  gtin14: string;
  paletizacao: string;
  validade: string;
}

export interface ProdutoNutritionalData {
  id: string;
  imagem: string;
  imagem2: string;
  nutritional100g: NutritionalData;
  nutritional200g: NutritionalData;
  porcoes: Porcoes;
  produto: string;
  vd: VD;
  informacoes: Informacoes;
  aviso: Aviso;
}

export function ProdutoDetail() {
  const { id } = useParams();
  const [produtos, setProduto] = useState<ProdutoNutritionalData[]>([]);
  const [produtosDetail, setprodutosDetail] =
    useState<ProdutoNutritionalData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWidth, setIsWidth] = useState<boolean>(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth <= 480) {
        setIsWidth(true);
      } else {
        setIsWidth(false);
      }
    }
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://apiprodutosnatville.vercel.app/produtos`
      );
      const data = await response.json();
      setProduto(data);
    }

    getData();
  }, []);

  useEffect(() => {
    if (produtos.length > 0) {
      const produtoEncontrado = produtos.find((produto) => produto.id === id);
      setprodutosDetail(produtoEncontrado || null);
    }
  }, [produtos, id]);

  if (!produtosDetail) {
    return (
      <div
        className="h-screen 
     bg-custom-white flex items-center justify-center flex-col"
      >
        <h1 className="text-custom-blue-strong font-mochari text-2xl mt-4">
          Carregando..
        </h1>
      </div>
    );
  }

  const images = [produtosDetail.imagem, produtosDetail.imagem2];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <section
      id={id}
      className=" flex-col items-center justify-center
      m-auto"
    >
      <div className="max-w-7xl flex-col items-center justify-center m-auto">
        <div className="flex items-center justify-center m-auto">
          <AnimatedNegative>
            <h1
              style={{ fontFamily: "Mocha Mattari W01 Regular" }}
              className="text-8xl text-center w-full text-blue-800 mt-10 mb-10 max-md:mt-10 max-md:text-6xl max-md:px-8 "
            >
              {produtosDetail?.produto}
            </h1>
          </AnimatedNegative>
        </div>
        <div
          id="leiteIntegralScroll"
          className="flex items-center
           justify-center m-auto"
        >
          <div
            className=" flex items-center 
          justify-center max-md:flex-col max-md:px-8"
          >
            <AnimatedSection>
              {isWidth ? (
                <div
                  className="max-w-96
            flex flex-col items-center mr-8 mm:max-md:mr-0 max-md:mb-10"
                >
                  <div className="relative">
                    <div
                      className="absolute z-10
                  cursor-pointer
                 transition duration-300
                  hover:scale-150
                "
                    >
                      <GoDesktopDownload color="indigo" />
                    </div>
                    <img
                      src={images[currentImageIndex]}
                      alt=""
                      className="w-full drop-shadow-2xl px-9 max-w-full"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2
                   transform -translate-y-1/2 bg-custom-blue
                    text-white p-2 rounded-full cursor-pointer 
                    shadow-lg hover:bg-custom-blue-strong"
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 transform
                   -translate-y-1/2 bg-custom-blue
                    text-white p-2 rounded-full cursor-pointer 
                    shadow-lg hover:bg-custom-blue-strong"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </AnimatedSection>
            <AnimatedSection>
              <div className="mm:max-md:hidden overflow-hidden">
                <div
                  className="max-w-96
            flex flex-col items-center mr-8 mm:max-md:mr-0 max-md:mb-10"
                >
                  <div className="relative">
                    <div
                      className="absolute z-10
                  cursor-pointer
                 transition duration-300 left-2 top-2
                  hover:scale-150 
                "
                    >
                      <a href={`${produtosDetail.imagem}`} target="_blank">
                        <GoDesktopDownload color="indigo" />
                      </a>
                    </div>
                    <img
                      src={images[currentImageIndex]}
                      alt=""
                      className="w-full drop-shadow-2xl px-9 max-w-full"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2
                   transform -translate-y-1/2 bg-custom-blue
                    text-white p-2 rounded-full cursor-pointer 
                    shadow-lg hover:bg-custom-blue-strong"
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 transform
                   -translate-y-1/2 bg-custom-blue
                    text-white p-2 rounded-full cursor-pointer 
                    shadow-lg hover:bg-custom-blue-strong"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <div>
              <AnimatedY>
                {/*TABELA NUTRICIONAL*/}
                <h1
                  style={{ fontFamily: "Mocha Mattari W01 Regular" }}
                  className="text-5xl text-blue-800 text-center mm:max-md:mb-8"
                >
                  tabela nutricional
                </h1>
                <div className="overflow-x-auto shadow-2xl">
                  <div className="bg-blue-100 p-2">
                    {/* <p className=" uppercase text-sm">
                    {produtosDetail?.porcoes?.porcao}
                  </p>
                  <p className=" uppercase text-sm">
                    {produtosDetail?.porcoes?.porcaototal}
                  </p> */}
                  </div>
                  <table className="min-w-full border-collapse text-left max-md:text-xs ">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="border-b-2 border-gray-300  uppercase"></th>
                        <th className="border-b-2 border-gray-300  ">
                          {produtosDetail?.porcoes.porcaoMenor}
                        </th>
                        <th className="border-b-2 border-gray-300   ">
                          {produtosDetail?.porcoes.porcaoMiaor}
                        </th>
                        <th className="border-b-2 border-gray-300 px-1 ">
                          % VD (*)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white">
                        <td className="border px-4 py-2">
                          Valor energético (kcal)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.kcal}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.kcal}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.kcal}
                        </td>
                      </tr>
                      <tr className="bg-blue-100">
                        <td className="border px-4 py-2">
                          Carboidratos totais (g)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.carbo}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.carbo}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.carbo}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border px-4 py-2">
                          Açúcares totais (g)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.acucaresTotais}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.acucaresTotais}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.acucaresTotais}
                        </td>
                      </tr>
                      <tr className="bg-blue-100">
                        <td className="border px-4 py-2">
                          Açúcares adicionados (g)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.acucaresAdicionados}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.acucaresAdicionados}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.acucaresAdicionados}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border px-4 py-2">Proteínas (g)</td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.proteinas}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.proteinas}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.proteinas}
                        </td>
                      </tr>
                      <tr className="bg-blue-100">
                        <td className="border px-4 py-2">
                          Gorduras totais (g)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.gordurasTotais}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.gordurasTotais}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.gordurasTotais}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border px-4 py-2">
                          Gorduras saturadas (g)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.gordurasSaturadas}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.gordurasSaturadas}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.gordurasSaturadas}
                        </td>
                      </tr>
                      <tr className="bg-blue-100">
                        <td className="border px-4 py-2">Gorduras trans (g)</td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.gordurasTrans}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.gordurasTrans}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.gordurasTrans}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border px-4 py-2">
                          Fibra alimentar (g)
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.fibrasAlimentares}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.fibrasAlimentares}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.fibrasAlimentares}
                        </td>
                      </tr>
                      <tr className="bg-blue-100">
                        <td className="border px-4 py-2">Sódio (mg)</td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.sodio}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.sodio}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.sodio}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border px-4 py-2">Cálcio (mg)</td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional100g.calcio}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.nutritional200g.calcio}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {produtosDetail?.vd.calcio}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-blue-100 p-2 max-md:text-xs">
                    <p className="">{produtosDetail?.aviso.avisoTabela}</p>
                  </div>
                </div>
              </AnimatedY>
            </div>

            <div
              className="flex-col w-1/3 items-center 
            justify-center ml-4 mt-10 max-md:w-full max-md:text-xs max-md:mb-10"
            >
              <AnimatedY>
                <div>
                  <p className=" uppercase text-sm max-md:text-xs">
                    {produtosDetail?.porcoes?.porcao}
                  </p>
                  <p className=" uppercase text-sm max-md:text-xs">
                    {produtosDetail?.porcoes?.porcaototal}
                  </p>
                  <h2 className=" font-semibold text-xl uppercase mt-2 ">
                    Ingredientes:
                  </h2>
                  <p className=" uppercase text-sm">
                    {produtosDetail?.informacoes.ingredientes}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold uppercase my-2">
                    {produtosDetail?.informacoes.alergenicos}
                  </h2>
                </div>
                <div>
                  <h2 className=" font-semibold text-xl uppercase">
                    conservação:
                  </h2>
                  <p className="uppercase">
                    {produtosDetail?.informacoes.conservacaoFechado}
                  </p>
                  <p className="uppercase mb-2">
                    {produtosDetail?.informacoes.conservacaoAberto}
                  </p>
                </div>
                <div>
                  <h2 className=" font-semibold text-xl uppercase">
                    dados técnicos:
                  </h2>
                  <div className="uppercase">
                    <p>GTIN-13: {produtosDetail?.informacoes.gtin13}</p>
                    <p>GTIN-14: {produtosDetail?.informacoes.gtin14}</p>
                    <p>
                      Paletização: {produtosDetail?.informacoes.paletizacao}
                    </p>
                    <p>Validade: {produtosDetail?.informacoes.validade}</p>
                  </div>
                </div>
              </AnimatedY>
            </div>
          </div>
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
    </section>
  );
}
