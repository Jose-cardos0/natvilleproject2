import queijos from "../../../assets/Sliders/queijos.png";

export function SliderChess() {
  return (
    <div className="max-w-7xl flex items-center justify-between gap-8">
      <div className="w-full">
        <img
          className="drop-shadow-md cursor-pointer hover:scale-105 duration-300 transition"
          src={queijos}
          alt=""
        />
      </div>
      <div className="w-full flex-col items-end justify-end">
        <div className="flex items-end justify-end">
          <h1
            className="font-mochari
     text-9xl text-custom-blue-strong
      text-end"
          >
            LINHA
            <br />
            QUEIJOS
          </h1>
        </div>
        <div className="py-8">
          <p className="font-roboto text-custom-blue-strong text-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea,
            itaque adipisci laudantium dolorum obcaecati illum officiis
            consequuntur aliquid? Magni aspernatur veritatis, officiis enim
            veniam nisi quaerat sapiente vitae qui! Porro repudiandae deserunt
            voluptatem ad eius? Perspiciatis eveniet consequatur cupiditate
            dolor illum voluptatum tempora voluptates eum natus est vero quos
            id, consequuntur ullam accusamus quia, culpa sequi sint. Quae, ad?
          </p>
        </div>
        <div className="w-full flex items-end justify-end">
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
        </div>
      </div>
    </div>
  );
}