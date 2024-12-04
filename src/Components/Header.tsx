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

  const [isVisibleQuemSomos, setIsVisibleQuemSomos] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  const handleMouseEnter = () => {
    setIsVisibleQuemSomos(true);
  };

  const handleMouseLeave = () => {
    setIsVisibleQuemSomos(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    setMouseX(event.clientX); // Atualiza a posição X do mouse
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }}
      className="w-full h-24
     bg-custom-white flex items-center justify-center
      drop-shadow-xl shadow-black fixed z-20   "
    >
      {isVisibleQuemSomos && (
        <div
          className="absolute bg-custom-white p-10 rounded-full w-36 h-36"
          style={{
            position: "absolute",
            top: "-30%",
            left: mouseX - 70, // Ajusta a posição horizontal com base na posição do mouse
            zIndex: -1,
          }}
        ></div>
      )}
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
                          <Link to={"/manteigas"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto uppercase py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg"
                            >
                              Linha Manteigas
                            </div>
                          </Link>
                        </div>
                      </AnimatedSection>
                    ) : (
                      ""
                    )}
                  </ul>
                  <ul>
                    <Link to={"/noticias"}>
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center"
                      >
                        notícias
                      </div>
                    </Link>
                  </ul>
                  <ul>
                    <Link to={"/"}>
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center"
                      >
                        contato
                      </div>
                    </Link>
                  </ul>
                  <ul>
                    <Link to={"/"}>
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="font-roboto uppercase py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center"
                      >
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
              <div className="font-roboto uppercase py-1 px-4 cursor-pointer font-medium">
                quem somos
              </div>
            </Link>

            <div
              className={
                isOpen === true
                  ? "relative cursor-pointer font-medium bg-custom-blue rounded-md text-white py-1 px-4 uppercase"
                  : "relative cursor-pointer font-medium py-1 px-4 uppercase"
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
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center font-medium"
                    >
                      queijos
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                   hover:border-custom-blue text-center font-medium"
                    >
                      leites
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center font-medium  "
                    >
                      bebidas lácteas
                    </div>
                  </Link>
                  <Link to={"/manteigas"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center font-medium "
                    >
                      Manteigas
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase hover:border-b-2
                 hover:border-custom-blue text-center font-medium "
                    >
                      soro em pó
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}

            <Link to={"/noticias"}>
              <div className="font-roboto uppercase py-1 px-4 cursor-pointer">
                notícias
              </div>
            </Link>

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
