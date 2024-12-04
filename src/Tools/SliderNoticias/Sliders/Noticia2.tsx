import noticias1 from "../Noticias1.jpg";

export function Noticia2() {
  return (
    <main className="w-full h-full flex items-center justify-center m-auto">
      <section className="w-full h-full flex-col flex items-center justify-center m-auto">
        <div className="flex items-center justify-center w-full gap-8 mm:max-md:flex-col">
          <div className="w-full">
            <img
              className="w-full object-contain rounded-lg drop-shadow-xl shadow-black"
              src={noticias1}
              alt=""
            />
          </div>
          <div className=" flex-col items-start justify-start w-full">
            <div className="flex-col items-start justify-start">
              <h1 className="font-bold font-roboto text-7xl">Titulos</h1>
              <p className="mt-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                beatae, culpa recusandae at corrupti perferendis, possimus et
                ipsa doloremque commodi nisi sapiente provident soluta, quaerat
                exercitationem error dolores fugit. Dolor!
              </p>
            </div>
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
        </div>
      </section>
    </main>
  );
}
