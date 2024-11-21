import { useState } from "react";
import logo from "../assets/Header/logo.png";

//router
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="w-full h-24
     bg-custom-white flex items-center justify-center
      drop-shadow-xl shadow-black fixed z-50 "
    >
      <section className="max-w-7xl flex items-center justify-center ">
        <Link to={"/"}>
          <div className="mr-8">
            <img src={logo} alt="natville" />
          </div>
        </Link>
        <div className="w-full flex items-center justify-center gap-3">
          <div className="font-roboto uppercase py-1 px-4 ">quem somos</div>

          <div
            className={
              isOpen === true
                ? "relative cursor-pointer bg-custom-blue rounded-md text-white py-1 px-4 uppercase"
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
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue text-center">
                  queijos
                </div>
                <Link to={"/leiteuht"}>
                  <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue text-center">
                    leites
                  </div>
                </Link>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue text-center">
                  bebidas lácteas
                </div>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue text-center">
                  queijos processados
                </div>
                <div className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2 hover:border-custom-blue text-center">
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
