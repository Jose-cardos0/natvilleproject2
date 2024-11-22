import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

interface ProdutoNutritionalData {
  id: string;
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

  console.log(produtosDetail);
  console.log(produtosDetail);
  console.log(produtosDetail?.nutritional100g);
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
          className="flex items-center justify-center m-auto"
        >
          <div className=" flex items-center justify-center">
            <div>
              {/*TABELA NUTRICIONAL*/}
              <h1
                style={{ fontFamily: "Mocha Mattari W01 Regular" }}
                className="text-5xl text-blue-800 text-center"
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
                <table className="min-w-full border-collapse text-left ">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border-b-2 border-gray-300 px-4 py-2 uppercase"></th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        {produtosDetail?.porcoes.porcaoMenor}
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        {produtosDetail?.porcoes.porcaoMiaor}
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        % VD (*)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Valor energético (kcal)
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.kcal}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.kcal}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.kcal}
                      </td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Carboidratos totais (g)
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.carbo}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.carbo}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.carbo}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Açúcares totais (g)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.acucaresTotais}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.acucaresTotais}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.acucaresTotais}
                      </td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Açúcares adicionados (g)
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.acucaresAdicionados}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.acucaresAdicionados}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.acucaresAdicionados}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Proteínas (g)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.proteinas}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.proteinas}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.proteinas}
                      </td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras totais (g)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.gordurasTotais}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.gordurasTotais}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.gordurasTotais}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Gorduras saturadas (g)
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.gordurasSaturadas}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.gordurasSaturadas}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.gordurasSaturadas}
                      </td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras trans (g)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.gordurasTrans}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.gordurasTrans}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.gordurasTrans}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Fibra alimentar (g)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.fibrasAlimentares}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.fibrasAlimentares}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.fibrasAlimentares}
                      </td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Sódio (mg)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.sodio}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.sodio}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.sodio}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Cálcio (mg)</td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional100g.calcio}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.nutritional200g.calcio}
                      </td>
                      <td className="border px-4 py-2">
                        {produtosDetail?.vd.calcio}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-blue-100 p-2">
                  <p className="">{produtosDetail?.aviso.avisoTabela}</p>
                </div>
              </div>
            </div>

            <div className="flex-col w-1/3 items-center justify-center ml-4 mt-10">
              <div>
                <p className=" uppercase text-sm">
                  {produtosDetail?.porcoes?.porcao}
                </p>
                <p className=" uppercase text-sm">
                  {produtosDetail?.porcoes?.porcaototal}
                </p>
                <h2 className=" font-semibold text-xl uppercase mt-2">
                  Ingredientes
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
                  conservação
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
                  dados técnicos
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
    </section>
  );
}
