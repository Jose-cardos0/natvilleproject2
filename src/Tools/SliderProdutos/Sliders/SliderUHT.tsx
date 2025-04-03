import { Link } from "react-router-dom";
import leites from "../../../assets/Sliders/leites.webp";

export function SliderUHT() {
  return (
    <div
      className="max-w-7xl flex items-center justify-between
   gap-8 mm:max-md:flex-col "
    >
      <div className="w-full">
        <img
          className="drop-shadow-md cursor-pointer
         hover:scale-105 duration-300 transition"
          src={leites}
          alt=""
        />
      </div>
      <div className="w-full flex-col items-end justify-end">
        <div className="flex items-end justify-end">
          <h1
            className="font-mochari
   text-9xl text-custom-blue-strong
    text-end mm:max-md:text-6xl mm:max-md:text-center mm:max-md:w-full"
          >
            LEITES UHT
          </h1>
        </div>
        <div className="py-8 mm:max-md:py-3">
          <p className="font-roboto text-custom-blue-strong text-end mm:max-md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea,
            itaque adipisci laudantium dolorum obcaecati illum officiis
            consequuntur aliquid? Magni aspernatur veritatis, officiis enim
            veniam nisi quaerat sapiente vitae qui! Porro repudiandae deserunt
          </p>
        </div>
        <div className="w-full flex items-end justify-end max-md:justify-center">
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
