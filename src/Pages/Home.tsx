import bgHome from "../assets/Home/bgHome.svg";

//slider
import { SlidersWelcome } from "../Tools/SlidersWelcome";

//imgs
import mussarela from "../assets/Home/mussarelaWelcome2x.png";

export function Home() {
  return (
    <main
      style={{ backgroundImage: `url(${bgHome})` }}
      className="w-full flex items-center
       justify-center m-auto bg-cover "
    >
      <section className="flex-col">
        <div
          className="max-w-7xl 
        flex-col items-center justify-center m-auto 
       "
        >
          <div className="w-full my-60">
            <SlidersWelcome />
          </div>
        </div>
        {/*FIM DO SLIDER */}
        <div
          className="max-w-7xl
        flex-col items-center justify-center m-auto py-40"
        >
          <h1
            className="font-mochari
           text-7xl text-custom-blue-strong
            text-center"
          >
            conheça nossas <br />
            linhas de produtos
          </h1>
          <div className="flex item justify-center gap-8 my-16">
            <img src={mussarela} alt="mussarela natville" />
            <div className="mt-8">
              <p className="font-roboto text-custom-blue-strong">
                Um dos mais importantes símbolos da culinária, sem dúvidas, é o
                queijo. E o queijo Natville conquista o paladar e o coração de
                quem experimenta. Conheça a linha completa!
              </p>
              <button
                className="relative 
          overflow-hidden
           flex-shrink-0
    bg-custom-blue-strong
    text-white py-3 
    px-14 rounded-md shadow-sm
    shadow-black font-light 
     border-none mt-8"
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
        </div>
        {/*FIM CONHEÇA NOSSA LINHA */}
      </section>
    </main>
  );
}
