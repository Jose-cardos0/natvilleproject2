import { Link } from "react-router-dom";
import cremeDeLeite from "../../../src/Tools/SlidersImgWelcome/creme de leite frontal_11zon.webp";

export function SliderCremedeLeite() {
  return (
    <div
      className="max-w-4xl flex items-center justify-center m-auto
     gap-8 mm:max-md:flex-col mt-16 "
    >
      <div className="w-full">
        <img
          className="drop-shadow-md max-w-sx
             object-cover "
          src={cremeDeLeite}
          alt="creme de leite natville"
        />
      </div>
      <div className="w-full flex-col items-end justify-end">
        <div className="flex items-end justify-end">
          <img
            src="https://i.ibb.co/qL0vFCSq/Nomecreme-De-Leite.png"
            alt="leite condensado"
            className="max-w-lg"
          />
        </div>

        <div className="w-full flex items-end justify-end max-md:justify-center -mt-5">
          <Link to={"/reqcremoso"}>
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
