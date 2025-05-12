import { Link } from "react-router-dom";
import condensado from "../../../src/Tools/SlidersImgWelcome/mockucondensado2x_11zon.webp";
import condensado2 from "../../assets/condensado2.png";

export function SliderCondensado() {
  return (
    <div
      className="max-w-4xl flex items-center justify-center m-auto
     gap-8 mm:max-md:flex-col  mt-16 max-md:mt-0"
    >
      <div className="w-full max-md:flex max-md:items-center max-md:justify-center max-md:m-auto">
        <img
          className="drop-shadow-md  max-w-96 ml-20
          object-cover max-md:w-44 max-lg:w-48 max-md:mt-10 max-md:mr-16"
          src={condensado2}
          alt="leite condensado natville"
        />
      </div>
      <div
        className="w-full flex-col items-end
       justify-end max-md:items-center 
       max-md:justify-center max-md:m-auto max-lg:px-32 max-lg:pl-8 "
      >
        <div className="flex items-end justify-end">
          <img
            src="https://i.ibb.co/2YqDf4dv/nome-Leitecondensado.png"
            alt="leite condensado"
            className="max-w-lg max-md:w-48 max-lg:w-72 
            max-md:items-center max-md:justify-center max-md:m-auto max-md:mb-4"
          />
        </div>
      </div>
    </div>
  );
}
