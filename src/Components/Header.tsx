import { useState } from "react";
import logo from "../assets/Header/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="w-full h-24
     bg-custom-white flex items-center justify-center
      drop-shadow-xl shadow-black fixed z-50"
    >
      <section className="max-w-7xl flex items-center justify-center ">
        <div className="mr-8">
          <img src={logo} alt="natville" />
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          <div className="font-roboto uppercase py-1 px-4 ">quem somos</div>

          <div
            className={
              isOpen === true
                ? "relative cursor-pointer bg-custom-blue-strong rounded-md text-white py-1 px-4 uppercase"
                : "relative cursor-pointer py-1 px-4 uppercase"
            }
            onClick={() => setIsOpen((prev) => !prev)}
          >
            nossos produtos
          </div>
          {isOpen === true ? (
            <div
              className="absolute top-full w-full left-0
                  bg-custom-white shadow-lg 
                  flex items-center justify-center bg-opacity-30 "
            >
              <div className=" items-center justify-between flex w-7/12 py-3 ">
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue-strong text-center">
                  queijos
                </div>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue-strong text-center">
                  leites
                </div>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue-strong text-center">
                  bebidas lácteas
                </div>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue-strong text-center">
                  queijos processados
                </div>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue-strong text-center">
                  soro em pó
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="font-roboto uppercase py-1 px-4">notícias</div>

          <div className="font-roboto uppercase py-1 px-4">contato</div>

          <div className="font-roboto uppercase py-1 px-4">
            trabalhe conosco
          </div>
        </div>
      </section>
    </header>
  );
}
