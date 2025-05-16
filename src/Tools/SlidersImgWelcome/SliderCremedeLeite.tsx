// import { Link } from "react-router-dom";
import cremeDeLeite from "../../../src/assets/Produtos/Leites/zerolateral_11zon.webp";

export function SliderCremedeLeite() {
  return (
    <div
      className="max-w-2xl flex items-center justify-center m-auto
   gap-8 mm:max-md:flex-col  "
    >
      <div
        className="w-full flex max-md:justify-center
     max-md:items-center max-md:m-auto max-md:ml-16 max-md:mt-12"
      >
        <img
          className="drop-shadow-md max-w-max-w-leiuht -mt-60 ml-96
             max-md:w-60 max-lg:w-72 "
          src={cremeDeLeite}
          alt="leite uht zero lactose"
        />
        <img
          className="h-36 mt-32"
          src="https://i.ibb.co/JRHWsQ6n/zerolactose.png"
          alt=""
        />
      </div>
    </div>
  );
}
