// import bgHome from "../assets/Home/bgHome.svg";
import bg1 from "../assets/Home/BG/bg1.svg";
import bg2 from "../assets/Home/BG/bg2.svg";
import bg3 from "../assets/Home/BG/bg3.svg";
import bgFooter from "../assets/Home/BG/bgFooter.svg";

//slider
import { SlidersWelcome } from "../Tools/SlidersWelcome";

//imgs
import mussarela from "../assets/Home/mussarelaWelcome2x.png";

export function Home() {
  return (
    <main
      // style={{ backgroundImage: `url(${bgHome})` }}
      className="w-full flex items-center
       justify-center m-auto bg-cover "
    >
      <section className="flex-col bg-custom-blue">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="min-h-screen w-screen flex items-center
       justify-center m-auto bg-cover z-0 relative"
        >
          <div
            className="max-w-7xl 
        flex-col items-center justify-center m-auto 
       "
          >
            <div className="w-full">
              <SlidersWelcome />
            </div>
          </div>
        </div>
        {/*FIM DO SLIDER */}
        <div
          style={{
            backgroundImage: `url(${bg2})`,
          }}
          className="h-auto w-screen flex items-center
             justify-center 
             m-auto bg-cover bg-no-repeat
              z-10 absolute -mt-32"
        >
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
              <img
                className="hover:drop-shadow-2xl cursor-pointer drop-shadow-lg transition duration-300"
                src={mussarela}
                alt="mussarela natville"
              />
              <div className="mt-8">
                <p className="font-roboto text-custom-blue-strong">
                  Um dos mais importantes símbolos da culinária, sem dúvidas, é
                  o queijo. E o queijo Natville conquista o paladar e o coração
                  de quem experimenta. Conheça a linha completa!
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
        </div>
        {/*FIM CONHEÇA NOSSA LINHA */}
      </section>
    </main>
  );
}
