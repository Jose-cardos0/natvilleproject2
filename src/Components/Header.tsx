import { useState, useEffect } from "react";
import logo from "../assets/Header/logo.png";

//router
import { Link } from "react-router-dom";

//icons
import { ImMenu2 } from "react-icons/im";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenProduct, setIsOpenProduct] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleSize() {
      if (innerWidth < 480) {
        setIsMobile(true);
      } else setIsMobile(false);
    }

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  });

  return (
    <header
      className="w-full h-24
     bg-custom-white flex items-center justify-center
      drop-shadow-xl shadow-black fixed z-20 "
    >
      {isMobile ? (
        <section className="w-full flex items-center justify-between mx-8">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <ImMenu2 size={40} color="#003FA5" />
          </button>
          <Link to={"/"}>
            <div className="cursor-pointer relative">
              <img className="drop-shadow-lg" src={logo} alt="natville" />
            </div>
          </Link>
          {isOpen ? (
            <div
              className="absolute top-24 left-0 
             w-2/3 h-screen bg-custom-white 
             opacity-75 flex flex-col justify-center items-center drop-shadow-lg"
            >
              <div className="-mt-20">
                <ul>
                  <Link to={"/quemsomos"}>
                    <div className="font-roboto uppercase py-1 px-4 cursor-pointer ">
                      quem somos
                    </div>
                  </Link>
                </ul>
                <ul onClick={() => setIsOpenProduct((prev) => !prev)}>
                  <Link to={"#sliderProdutos"}>
                    <div className="font-roboto uppercase py-1 px-4 cursor-pointer ">
                      nossos produtos
                    </div>
                  </Link>
                  {isOpenProduct ? (
                    <div>
                      <Link to={"/leiteuht"}>
                        <div className="font-roboto uppercase py-1 px-4 cursor-pointer ml-4 ">
                          Linha leites
                        </div>
                      </Link>
                      <Link to={"/queijos"}>
                        <div className="font-roboto uppercase py-1 px-4 cursor-pointer ml-4 ">
                          Linha Queijos
                        </div>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
                <ul>
                  <Link to={"/"}>
                    <div className="font-roboto uppercase py-1 px-4 cursor-pointer ">
                      notícias
                    </div>
                  </Link>
                </ul>
                <ul>
                  <Link to={"/"}>
                    <div className="font-roboto uppercase py-1 px-4 cursor-pointer ">
                      contato
                    </div>
                  </Link>
                </ul>
                <ul>
                  <Link to={"/"}>
                    <div className="font-roboto uppercase py-1 px-4 cursor-pointer ">
                      trabalhe conosco
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
      ) : (
        <section className="max-w-7xl flex items-center justify-center ">
          <Link to={"/"}>
            <div className="mr-8 cursor-pointer">
              <img className="drop-shadow-lg" src={logo} alt="natville" />
            </div>
          </Link>

          <div className="w-full flex items-center justify-center gap-3">
            <Link to={"/quemsomos"}>
              <div className="font-roboto uppercase py-1 px-4 cursor-pointer ">
                quem somos
              </div>
            </Link>

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
                  <Link to={"/queijos"}>
                    <div
                      className="w-full px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center"
                    >
                      queijos
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                   hover:border-custom-blue text-center"
                    >
                      leites
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center"
                    >
                      bebidas lácteas
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center"
                    >
                      queijos processados
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center"
                    >
                      soro em pó
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="font-roboto uppercase py-1 px-4 cursor-pointer">
              notícias
            </div>

            <div className="font-roboto uppercase py-1 px-4 cursor-pointer">
              contato
            </div>

            <div className="font-roboto uppercase py-1 px-4 cursor-pointer">
              trabalhe conosco
            </div>
          </div>
        </section>
      )}
    </header>
  );
}
