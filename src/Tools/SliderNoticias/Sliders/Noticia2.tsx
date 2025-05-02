import noticias1 from "../noticia2.png";

export function Noticia2() {
  return (
    <main className="w-full h-full flex items-center justify-center bg-gray-50">
      <section className="w-full h-full flex flex-col items-center justify-center px-6 py-12">
        <div className="flex items-center justify-center w-full gap-12 mm:max-md:flex-col p-6">
          {/* Imagem aprimorada */}
          <div className="w-full max-w-lg overflow-hidden rounded-xl shadow-lg">
            <img
              className="w-full h-auto object-contain rounded-xl"
              src={noticias1}
              alt="Janea Mota recebe título"
            />
          </div>

          {/* Conteúdo textual aprimorado */}
          <div className="w-full max-w-lg space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight font-roboto text-center">
              Natville:
              <span className="text-custom-blue-strong">
                O Maior Destaque do Ano 2024 em Laticínios!
              </span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Na <strong>17ª edição do Top Correio</strong>, a Natville foi
              eleita o grande destaque do ano no segmento de laticínios em
              Sergipe! Essa conquista reflete a qualidade e dedicação que
              entregamos diariamente à sua mesa.
              <br />
              <span className="text-custom-blue-strong font-semibold">
                Obrigado, Sergipe, por confiar em nós e fazer parte dessa
                história de sucesso!
              </span>
            </p>

            {/* Botão aprimorado */}
            <div className="text-center">
              <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-full shadow-lg font-medium mt-6 transition-all duration-300 hover:bg-custom-blue-light hover:shadow-xl hover:scale-105">
                <span className="relative z-10">VEJA MAIS &rsaquo;</span>
                <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
