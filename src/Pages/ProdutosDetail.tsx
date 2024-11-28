import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDesktopDownload } from "react-icons/go";

import leit from "../assets/Produtos/Leites/leitedoce.jpg";

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
  const [isWidth, setIsWidth] = useState(false);

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth <= 480) {
        setIsWidth(true);
      } else setIsWidth(false);
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
    return <div>Carregando...</div>;
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
      className="w-screen flex-col items-center justify-center
       h-screen m-auto"
    >
      <div className="max-w-7xl flex-col items-center justify-center m-auto">
        <div className="flex items-center justify-center m-auto">
          <h1
            style={{ fontFamily: "Mocha Mattari W01 Regular" }}
            className="text-8xl text-center w-full text-blue-800 mt-36 mb-10 "
          >
            {produtosDetail?.produto}
          </h1>
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
                    className="w-full drop-shadow-2xl px-9"
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

            <div>
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
                      <td className="border px-4 py-2">Açúcares totais (g)</td>
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
                      <td className="border px-4 py-2">Gorduras totais (g)</td>
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
                      <td className="border px-4 py-2">Fibra alimentar (g)</td>
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
            </div>

            <div
              className="flex-col w-1/3 items-center 
            justify-center ml-4 mt-10 max-md:w-full max-md:text-xs max-md:mb-10"
            >
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
                  <p>Paletização: {produtosDetail?.informacoes.paletizacao}</p>
                  <p>Validade: {produtosDetail?.informacoes.validade}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*inicio div de receitas */}
      <div className="-mt-52 max-md:-mt-20">
        <svg viewBox="0 0 950 160 " className="wave-svg max-md:h-52">
          <path
            fill="#55BECD"
            d="M0,64L30,74.7C60,85,120,107,180,117.3C240,128,300,128,360,128C420,128,480,128,540,117.3C600,107,660,85,720,80C780,75,840,85,900,101.3C960,117,1020,139,1080,149.3C1140,160,1200,160,1260,160C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
        <div
          className="bg-custom-blue
         flex items-center justify-center pb-20 max-md:-mt-1 "
        >
          {isWidth ? (
            ""
          ) : (
            <div
              className="max-w-96
            flex flex-col items-center mr-8 mt-20 mm:max-md:mr-0 mm:max-md:mt-0"
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
                  className="w-full drop-shadow-2xl px-9"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2
                   transform -translate-y-1/2 bg-custom-blue-strong
                    text-white p-2 rounded-full cursor-pointer 
                    shadow-lg  hover:bg-custom-white hover:text-black"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 transform
                   -translate-y-1/2 bg-custom-blue-strong
                    text-white p-2 rounded-full cursor-pointer 
                    shadow-lg hover:bg-custom-white hover:text-black"
                >
                  <IoIosArrowForward className="" />
                </button>
              </div>
            </div>
          )}
          <div className="flex-col items-center justify-center">
            <div className="text-center  max-md:mt-0">
              <h1
                className="font-mochari text-custom-blue-strong
               text-7xl drop-shadow-md text-center"
              >
                RECEITAS
              </h1>
              <p className="font-roboto text-white mb-10">
                Aproveite com toda sua família!
              </p>
            </div>
            {/*cire um card melhor */}
            {/*card1 */}
            <div
              className="w-full flex items-center
             justify-center gap-8 max-md:flex-col "
            >
              <div className="w-full flex justify-center">
                <div
                  className="bg-custom-blue h-96 rounded-xl 
                shadow-xl w-64 flex flex-col items-center 
                justify-center relative overflow-hidden max-md:w-80"
                >
                  <div className="h-4/6">
                    <img
                      className="object-cover rounded-t-lg w-full h-full"
                      src={leit}
                      alt="Imagem do Card"
                    />
                  </div>

                  <div className="bg-custom-blue w-full flex flex-col items-start p-4">
                    <h2 className="text-xl text-white font-bold mb-2">
                      Título do Card
                    </h2>
                    <p className="text-white text-sm mb-4">
                      Uma breve descrição do conteúdo que será apresentado.
                    </p>
                    <div className="w-full flex items-end justify-end">
                      <button
                        className="relative overflow-hidden flex-shrink-0
                       bg-custom-blue-strong text-white py-3
                        px-6 rounded-md shadow-sm shadow-black
                         font-light border-none mt-4 mm:max-md:w-full max-md:mb-10"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          VER MAIS &rsaquo;
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-black transform translate-x-full transition-transform duration-300 ease-in-out z-0 opacity-20"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*card 2*/}
              <div className="w-full flex justify-center">
                <div
                  className="bg-custom-blue h-96 rounded-xl 
                shadow-xl w-64 flex flex-col items-center 
                justify-center relative overflow-hidden max-md:w-80"
                >
                  <div className="h-4/6">
                    <img
                      className="object-cover rounded-t-lg w-full h-full"
                      src={leit}
                      alt="Imagem do Card"
                    />
                  </div>

                  <div className="bg-custom-blue w-full flex flex-col items-start p-4">
                    <h2 className="text-xl text-white font-bold mb-2">
                      Título do Card
                    </h2>
                    <p className="text-white text-sm mb-4">
                      Uma breve descrição do conteúdo que será apresentado.
                    </p>
                    <div className="w-full flex items-end justify-end">
                      <button
                        className="relative overflow-hidden flex-shrink-0
                       bg-custom-blue-strong text-white py-3
                        px-6 rounded-md shadow-sm shadow-black
                         font-light border-none mt-4 mm:max-md:w-full max-md:mb-10"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          VER MAIS &rsaquo;
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-black transform translate-x-full transition-transform duration-300 ease-in-out z-0 opacity-20"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*card 3 */}
              <div className="w-full flex justify-center">
                <div
                  className="bg-custom-blue h-96 rounded-xl 
                shadow-xl w-64 flex flex-col items-center 
                justify-center relative overflow-hidden max-md:w-80"
                >
                  <div className="h-4/6">
                    <img
                      className="object-cover rounded-t-lg w-full h-full"
                      src={leit}
                      alt="Imagem do Card"
                    />
                  </div>

                  <div className="bg-custom-blue w-full flex flex-col items-start p-4">
                    <h2 className="text-xl text-white font-bold mb-2">
                      Título do Card
                    </h2>
                    <p className="text-white text-sm mb-4">
                      Uma breve descrição do conteúdo que será apresentado.
                    </p>
                    <div className="w-full flex items-end justify-end">
                      <button
                        className="relative overflow-hidden flex-shrink-0
                       bg-custom-blue-strong text-white py-3
                        px-6 rounded-md shadow-sm shadow-black
                         font-light border-none mt-4 mm:max-md:w-full max-md:mb-10"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          VER MAIS &rsaquo;
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-black transform translate-x-full transition-transform duration-300 ease-in-out z-0 opacity-20"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*card 4 */}
              <div className="w-full flex justify-center">
                <div
                  className="bg-custom-blue h-96 rounded-xl 
                shadow-xl w-64 flex flex-col items-center 
                justify-center relative overflow-hidden max-md:w-80"
                >
                  <div className="h-4/6">
                    <img
                      className="object-cover rounded-t-lg w-full h-full"
                      src={leit}
                      alt="Imagem do Card"
                    />
                  </div>

                  <div className="bg-custom-blue w-full flex flex-col items-start p-4">
                    <h2 className="text-xl text-white font-bold mb-2">
                      Título do Card
                    </h2>
                    <p className="text-white text-sm mb-4">
                      Uma breve descrição do conteúdo que será apresentado.
                    </p>
                    <div className="w-full flex items-end justify-end">
                      <button
                        className="relative overflow-hidden flex-shrink-0
                       bg-custom-blue-strong text-white py-3
                        px-6 rounded-md shadow-sm shadow-black
                         font-light border-none mt-4 mm:max-md:w-full max-md:mb-10"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          VER MAIS &rsaquo;
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-black transform translate-x-full transition-transform duration-300 ease-in-out z-0 opacity-20"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*card 5 */}
              {/**fim cards */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
