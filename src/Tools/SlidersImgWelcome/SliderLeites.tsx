import { Link } from "react-router-dom";
import leites3 from "../../Tools/3leites.png";
import leites from "../../../src/Tools/SlidersImgWelcome/leiteSemidesnatado (1)_11zon.webp";

export function SliderLeites() {
  return (
    <div
      className="max-w-4xl flex items-center justify-center m-auto
     gap-8 mm:max-md:flex-col  "
    >
      <div
        className="w-full max-md:justify-center
       max-md:items-center max-md:m-auto max-md:ml-16 max-md:mt-12"
      >
        <img
          className="drop-shadow-md  mt-10
             object-cover ml-8 max-md:w-60 max-lg:w-72"
          src={leites3}
          alt="leite uht semidesnatado"
        />
      </div>
      {/* <div className="w-full flex-col items-end justify-end max-lg:pr-20">
        <div className="flex items-end justify-end max-md:items-center max-md:justify-center max-md:mb-2">
          <img
            src="https://i.ibb.co/8nvjjfXY/nome-Leite-UHt3x.png"
            alt="leite condensado"
            className="max-w-lg max-md:w-48 max-lg:w-60"
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
      </div> */}
    </div>
  );
}
