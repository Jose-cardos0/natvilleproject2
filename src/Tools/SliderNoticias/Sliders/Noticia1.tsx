import noticias1 from "../Noticias1.jpg";

export function Noticia1() {
  return (
    <main className="w-full h-full flex items-center justify-center bg-gray-50">
      <section className="w-full h-full flex flex-col items-center justify-center px-6 py-12">
        <div className="flex items-center justify-center w-full gap-12 mm:max-md:flex-col p-6">
          {/* Imagem com efeito aprimorado */}
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
              Reconhecimento e Gratidão:
              <span className="text-custom-blue-strong">
                {" "}
                Janea Mota Recebe Título de Cidadã Feiranovense
              </span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Ontem, <strong>02 de dezembro de 2024</strong>,
              <span className="text-custom-blue-strong font-semibold">
                {" "}
                Janea Maria Mota Santos Dantas
              </span>
              , fundadora e presidente da Natville, recebeu o título de Cidadã
              Feiranovense em uma cerimônia emocionante.
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
