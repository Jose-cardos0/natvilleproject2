import { useState, useEffect } from "react";
import logo from "../assets/Header/logo.png";

//router
import { Link } from "react-router-dom";

//icons
import { ImMenu2 } from "react-icons/im";

//animacoes
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";

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
          <div className="w-full flex items-center justify-between ">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <ImMenu2 size={40} color="#003FA5" />
            </button>

            <Link to={"/"}>
              <div className="cursor-pointer relative">
                <img className="drop-shadow-lg" src={logo} alt="natville" />
              </div>
            </Link>
          </div>

          {isOpen ? (
            <div
              className="absolute top-24 left-0 
              w-2/3 h-screen bg-custom-white 
              bg-opacity-95 flex flex-col justify-center
              items-center drop-shadow-lg  transition-all 
              duration-300"
            >
              <AnimatedSection>
                <div className="-mt-20 w-full ">
                  <ul>
                    <Link to={"/quemsomos"}>
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="font-roboto uppercase py-3 px-5 
                      cursor-pointer 
                   text-gray-800 hover:bg-blue-100 transition 
                   duration-300 rounded-lg flex items-center"
                      >
                        quem somos
                      </div>
                    </Link>
                  </ul>
                  <ul onClick={() => setIsOpenProduct((prev) => !prev)}>
                    <Link to={"#sliderProdutos"}>
                      <div className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center">
                        nossos produtos
                      </div>
                    </Link>
                    {isOpenProduct ? (
                      <AnimatedSection>
                        <div className="ml-4">
                          <Link to={"/leiteuht"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto uppercase py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg"
                            >
                              Linha leites
                            </div>
                          </Link>
                          <Link to={"/queijos"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto uppercase py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg"
                            >
                              Linha Queijos
                            </div>
                          </Link>
                        </div>
                      </AnimatedSection>
                    ) : (
                      ""
                    )}
                  </ul>
                  <ul>
                    <Link to={"/"}>
                      <div className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center">
                        notícias
                      </div>
                    </Link>
                  </ul>
                  <ul>
                    <Link to={"/"}>
                      <div className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center">
                        contato
                      </div>
                    </Link>
                  </ul>
                  <ul>
                    <Link to={"/"}>
                      <div className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center">
                        trabalhe conosco
                      </div>
                    </Link>
                  </ul>
                </div>
              </AnimatedSection>
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
