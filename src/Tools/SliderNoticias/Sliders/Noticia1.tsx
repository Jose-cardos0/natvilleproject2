import noticias1 from "../Noticias1.jpg";

export function Noticia1() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full gap-12 mm:max-md:flex-col p-6">
          {/* Imagem com efeito aprimorado */}
          <div className="w-full max-w-lg">
            <img
              className="w-full h-auto object-cover rounded-xl shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105"
              src={noticias1}
              alt="Janea Mota recebe título"
            />
          </div>

          {/* Conteúdo textual aprimorado */}
          <div className="w-full max-w-lg">
            <h1 className="text-3xl font-bold font-roboto leading-snug text-gray-900 mm:max-md:text-2xl">
              Reconhecimento e Gratidão:
              <span className="text-custom-blue-strong">
                {" "}
                Janea Mota Recebe Título de Cidadã Feiranovense
              </span>
            </h1>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Ontem, <strong>02 de dezembro de 2024</strong>,
              <span className="text-custom-blue-strong font-medium">
                {" "}
                Janea Maria Mota Santos Dantas
              </span>
              , fundadora e presidente da Natville, recebeu o título de Cidadã
              Feiranovense em uma cerimônia emocionante.
            </p>

            {/* Botão aprimorado */}
            <button className="relative bg-custom-blue-strong text-white py-3 px-10 rounded-lg shadow-md font-medium mt-6 transition-all duration-300 hover:bg-custom-blue-light hover:shadow-lg">
              <span className="relative z-10 flex items-center justify-center">
                VEJA MAIS &rsaquo;
              </span>
              <span className="absolute inset-0 bg-white/20 transform translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
