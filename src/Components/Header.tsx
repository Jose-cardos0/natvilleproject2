import { useState, useEffect } from "react";
import logo from "../assets/Header/logo.png";

//router
import { Link } from "react-router-dom";

//icons
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
//logo
import videoLogo from "../assets/Home/logoanimate11.webm";

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
      if (innerWidth <= 820) {
        setIsMobile(true);
      } else setIsMobile(false);
    }

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  });

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     if (isOpen) {
  //       setIsOpen(false);
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isOpen]);

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }}
      className="w-full h-16
     bg-custom-white  flex items-center justify-center
      drop-shadow-xl shadow-black fixed z-20    "
    >
      {isVisibleQuemSomos &&
        (isMobile ? (
          ""
        ) : (
          <div
            id="moving-shape"
            className="absolute bg-custom-white p-10 rounded-full w-36 h-36"
            style={{
              position: "absolute",
              top: "-100%",
              left: mouseX - 70, // Ajusta a posição horizontal com base na posição do mouse
              zIndex: -1,
            }}
          ></div>
        ))}
      {isMobile ? (
        <section className="w-full flex items-center justify-between mx-8">
          <div className="w-full flex items-center justify-between ">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? (
                <RxCross2 size={30} color="#003FA5" />
              ) : (
                <IoMenuOutline size={40} color="#003FA5" />
              )}
            </button>

            <Link to={"/"}>
              {/* <div className="cursor-pointer relative">
                <img className="drop-shadow-lg" src={logo} alt="natville" />
              </div> */}
              <div className="flex w-full justify-center m-auto">
                <video
                  src={videoLogo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" relative z-10 max-md:w-32"
                ></video>
              </div>
            </Link>
          </div>

          {isOpen ? (
            <div
              className="absolute top-16 left-0 
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
                        className="font-roboto  py-3 px-5 
                      cursor-pointer 
                   text-gray-800 hover:bg-blue-100 transition 
                   duration-300 rounded-lg flex items-center font-light"
                      >
                        Quem Somos
                      </div>
                    </Link>
                  </ul>
                  <ul onClick={() => setIsOpenProduct((prev) => !prev)}>
                    <Link to={"#sliderProdutos"}>
                      <div className="font-roboto  py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center font-light">
                        Nossos Produtos
                      </div>
                    </Link>
                    {isOpenProduct ? (
                      <AnimatedSection>
                        <div className="ml-4">
                          <Link to={"/leiteuht"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Leites UHT
                            </div>
                          </Link>
                          <Link to={"/queijos"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Queijos
                            </div>
                          </Link>
                          <Link to={"/manteigas"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Manteigas
                            </div>
                          </Link>
                          <Link to={"/choconat"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Achocolatados
                            </div>
                          </Link>
                          <Link to={"/bebidas"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Bebidas
                            </div>
                          </Link>
                          <Link to={"/reqcremoso"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Cremosos
                            </div>
                          </Link>
                          <Link to={"/condensados"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Condensado
                            </div>
                          </Link>
                          <Link to={"/empo"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Em pó
                            </div>
                          </Link>
                          <Link to={"/cremedeleite"}>
                            <div
                              onClick={() => setIsOpen((prev) => !prev)}
                              className="font-roboto  py-2 px-4 cursor-pointer text-gray-600 hover:bg-blue-50 transition duration-300 rounded-lg font-light"
                            >
                              Creme de Leite
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
                        className="font-roboto  py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center font-light"
                      >
                        Notícias
                      </div>
                    </Link>
                  </ul>
                  <ul>
                    <Link to={"/contato"}>
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="font-roboto  py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center font-light"
                      >
                        Contato
                      </div>
                    </Link>
                  </ul>
                  <ul>
                    <a
                      href="https://natville.vagas.solides.com.br/"
                      target="_blanck"
                    >
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="font-roboto  py-3 px-5 cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-300 rounded-lg flex items-center font-light"
                      >
                        Trabalhe Conosco
                      </div>
                    </a>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          ) : (
            ""
          )}
        </section>
      ) : (
        <section
          className="max-w-7xl flex
         items-center justify-center "
        >
          <Link to={"/"}>
            <div
              onClick={() => setIsOpen(false)}
              className="mr-8 cursor-pointer"
            >
              <img className="drop-shadow-lg" src={logo} alt="natville" />
            </div>
          </Link>

          <div
            className="w-full flex items-center 
          justify-center gap-3"
          >
            <Link to={"/quemsomos"}>
              <div
                onClick={() => setIsOpen(false)}
                className=" uppercase py-1 px-4
               cursor-pointer font-light hover:text-custom-blue"
              >
                quem somos
              </div>
            </Link>

            <div
              className={
                isOpen === true
                  ? "relative cursor-pointer font-light bg-custom-blue rounded-md text-white py-1 px-4 uppercase"
                  : "relative cursor-pointer font-light py-1 px-4 uppercase hover:text-custom-blue"
              }
              onClick={() => setIsOpen((prev) => !prev)}
            >
              nossos produtos
            </div>
            {isOpen === true ? (
              <div
                id="absolute-div"
                className="absolute top-full mr-72
                  bg-custom-white shadow-lg 
                  flex items-center justify-center bg-opacity-90 rounded-b-xl"
              >
                <div className=" justify-between flex-col  py-3 ">
                  <Link to={"/queijos"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full px-5 py-2 cursor-pointer uppercase 
                font-light hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      queijos
                    </div>
                  </Link>
                  <Link to={"/leiteuht"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
                   font-light hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      leites uht
                    </div>
                  </Link>
                  <Link to={"/Bebidas"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
            font-light  hover:bg-custom-bg-leiteIHT  hover:text-white"
                    >
                      bebidas lácteas
                    </div>
                  </Link>
                  <Link to={"/manteigas"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase
                   font-light  hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      Manteigas
                    </div>
                  </Link>
                  <Link to={"/choconat"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
                 font-light  hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      Achocolatado
                    </div>
                  </Link>
                  <Link to={"/reqcremoso"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
                 font-light  hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      Cremosos
                    </div>
                  </Link>
                  <Link to={"/condensados"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
                 font-light  hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      Condensado
                    </div>
                  </Link>
                  <Link to={"/empo"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
                 font-light  hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      Em Pó
                    </div>
                  </Link>
                  <Link to={"/cremedeleite"}>
                    <div
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="w-full  px-5 py-2 cursor-pointer uppercase 
                 font-light  hover:bg-custom-bg-leiteIHT hover:text-white"
                    >
                      Creme de Leite
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}

            <Link to={"/noticias"}>
              <div
                onClick={() => setIsOpen(false)}
                className="font-roboto uppercase py-1 px-4 cursor-pointer font-light hover:text-custom-blue "
              >
                notícias
              </div>
            </Link>

            <Link to={"/contato"}>
              <div
                onClick={() => setIsOpen(false)}
                className="font-roboto uppercase py-1 px-4 cursor-pointer  hover:text-custom-blue font-light"
              >
                contato
              </div>
            </Link>

            <a href="https://natville.vagas.solides.com.br/" target="_blanck">
              <div
                onClick={() => setIsOpen(false)}
                className="font-roboto uppercase py-1 px-4 cursor-pointer hover:text-custom-blue font-light"
              >
                trabalhe conosco
              </div>
            </a>
          </div>
        </section>
      )}
    </header>
  );
}
