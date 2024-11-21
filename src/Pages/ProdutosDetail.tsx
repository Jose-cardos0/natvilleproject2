export function ProdutoDetail() {
  return (
    <section
      id="leiteIntegral"
      className="flex-col  min-w-full items-center justify-center min-h-screen m-auto mt-44"
    >
      <div className="flex items-center justify-center">
        <h1
          style={{ fontFamily: "Mocha Mattari W01 Regular" }}
          className="text-8xl text-center w-full text-blue-800 "
        >
          leite uht integral
        </h1>
      </div>
      <div
        id="leiteIntegralScroll"
        className="flex items-center justify-center m-auto"
      >
        <div className="w-3/6 flex items-center justify-center">
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
                <p className="">Porções por embalagem: 5</p>
                <p className="">Porção: 200ml (1 copo)</p>
              </div>
              <table className="min-w-full border-collapse text-left ">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border-b-2 border-gray-300 px-4 py-2 uppercase"></th>
                    <th className="border-b-2 border-gray-300 px-4 py-2">
                      100 ml
                    </th>
                    <th className="border-b-2 border-gray-300 px-4 py-2">
                      200 ml
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
                    <td className="border px-4 py-2">57</td>
                    <td className="border px-4 py-2">114</td>
                    <td className="border px-4 py-2">6</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border px-4 py-2">
                      Carboidratos totais (g)
                    </td>
                    <td className="border px-4 py-2">4,5</td>
                    <td className="border px-4 py-2">9</td>
                    <td className="border px-4 py-2">3</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">Açúcares totais (g)</td>
                    <td className="border px-4 py-2">4,5</td>
                    <td className="border px-4 py-2">9</td>
                    <td className="border px-4 py-2">3</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border px-4 py-2">
                      Açúcares adicionados (g)
                    </td>
                    <td className="border px-4 py-2">0</td>
                    <td className="border px-4 py-2">0</td>
                    <td className="border px-4 py-2">0</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">Proteínas (g)</td>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">8</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border px-4 py-2">Gorduras totais (g)</td>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">11</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">Gorduras saturadas (g)</td>
                    <td className="border px-4 py-2">1,8</td>
                    <td className="border px-4 py-2">3,6</td>
                    <td className="border px-4 py-2">16</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border px-4 py-2">Gorduras trans (g)</td>
                    <td className="border px-4 py-2">0</td>
                    <td className="border px-4 py-2">0</td>
                    <td className="border px-4 py-2">0</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">Fibra alimentar (g)</td>
                    <td className="border px-4 py-2">0</td>
                    <td className="border px-4 py-2">0</td>
                    <td className="border px-4 py-2">0</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="border px-4 py-2">Sódio (mg)</td>
                    <td className="border px-4 py-2">56</td>
                    <td className="border px-4 py-2">112</td>
                    <td className="border px-4 py-2">5</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2">Cálcio (mg)</td>
                    <td className="border px-4 py-2">88</td>
                    <td className="border px-4 py-2">176</td>
                    <td className="border px-4 py-2">18</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-blue-100 p-2">
                <p className="">
                  *Percentual de valores diários fornecidos pela porção.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-col items-center justify-center ml-4">
            <div>
              <h2 className="text-white font-semibold text-xl uppercase">
                Ingredientes
              </h2>
              <p className="">
                Ingredientes: Leite UHT Integral, estabilizantes: <br /> citrato
                de sódio-INS331III, fosfato <br /> trissódico-INS339lll efosfato
                dissódico-INS339lll.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">
                NÃO CONTÉM GLÚTEN. <br />
                ALÉRGICOS: CONTÉM LEITE, <br />
                CONTÉM LACTOSE.
              </h2>
            </div>
            <div>
              <h2 className="text-white font-semibold text-xl uppercase">
                conservação
              </h2>
              <p className="">• Conservar em local seco e arejado.</p>
              <p className="">
                • Após aberto, conserve refrigerado por até 2 dias.
              </p>
              <p className="">• Não é necessário ferver este leite.</p>
            </div>
            <div>
              <h2 className="text-white font-semibold text-xl uppercase">
                dados técnicos
              </h2>
              <div>
                <p>Embalagem: 1 litro</p>
                <p>GTIN-13: 7898387220380</p>
                <p>Peso por caixa: 12 litros</p>
                <p>GTIN-14: 17898387120387</p>
                <p>Paletização: 15 x 5 caixas</p>
                <p>Validade: 180 dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
