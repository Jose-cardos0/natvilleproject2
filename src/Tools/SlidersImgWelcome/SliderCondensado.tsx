import { Link } from "react-router-dom";
import condensado from "../../../src/Tools/SlidersImgWelcome/mockucondensado2x_11zon.webp";

export function SliderCondensado() {
  return (
    <div
      className="max-w-4xl flex items-center justify-center m-auto
     gap-8 mm:max-md:flex-col mt-16 max-md:mt-0"
    >
      <div className="w-full max-md:flex max-md:items-center max-md:justify-center max-md:m-auto">
        <img
          className="drop-shadow-md  max-w-64 ml-20
          object-cover max-md:w-44 max-md:mt-10 max-md:mr-16"
          src={condensado}
          alt="leite condensado natville"
        />
      </div>
      <div className="w-full flex-col items-end justify-end max-md:items-center max-md:justify-center max-md:m-auto">
        <div className="flex items-end justify-end">
          <img
            src="https://i.ibb.co/2YqDf4dv/nome-Leitecondensado.png"
            alt="leite condensado"
            className="max-w-lg max-md:w-48 
            max-md:items-center max-md:justify-center max-md:m-auto max-md:mb-4"
          />
        </div>

        <div className="w-full flex items-end justify-end max-md:justify-center -mt-8">
          <Link to={"/condensados"}>
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
                ESPECIFICAÇÕES &rsaquo;
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
          </Link>
        </div>
      </div>
    </div>
  );
}
