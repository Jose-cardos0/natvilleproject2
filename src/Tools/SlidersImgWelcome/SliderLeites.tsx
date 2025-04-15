import { Link } from "react-router-dom";
import leites from "../../../src/Tools/SlidersImgWelcome/leiteSemidesnatado (1)_11zon.webp";

export function SliderLeites() {
  return (
    <div
      className="max-w-4xl flex items-center justify-center m-auto
     gap-8 mm:max-md:flex-col  "
    >
      <div className="w-full">
        <img
          className="drop-shadow-md max-w-sx
             object-cover ml-8"
          src={leites}
          alt="leite uht semidesnatado"
        />
      </div>
      <div className="w-full flex-col items-end justify-end">
        <div className="flex items-end justify-end">
          <img
            src="https://i.ibb.co/8nvjjfXY/nome-Leite-UHt3x.png"
            alt="leite condensado"
            className="max-w-lg"
          />
        </div>

        <div className="w-full flex items-end justify-end max-md:justify-center -mt-8">
          <Link to={"/leiteuht"}>
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
