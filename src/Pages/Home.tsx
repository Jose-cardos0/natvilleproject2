// import bgHome from "../assets/Home/bgHome.svg";
import bg1 from "../assets/Home/BG/bg1.svg";
import bg2 from "../assets/Home/BG/bg2.svg";
import bg3 from "../assets/Home/BG/bg3.svg";
import bgFooter from "../assets/Home/BG/bgFooter.svg";
import leites from "../assets/Home/leites.png";
import logo from "../assets/Header/logo.png";

//icons
import { FaYoutube } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

//slider
import { SlidersWelcome } from "../Tools/SlidersWelcome";

//imgs
import mussarela from "../assets/Home/mussarelaWelcome2x.png";

export function Home() {
  return (
    <main
      // style={{ backgroundImage: `url(${bgHome})` }}
      className="w-full flex items-center
       justify-center m-auto bg-cover "
    >
      <section className="flex-col bg-custom-blue">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="min-h-screen w-screen flex items-center
       justify-center m-auto bg-cover z-0 relative"
        >
          <div
            className="max-w-7xl 
        flex-col items-center justify-center m-auto 
       "
          >
            <div className="w-full">
              <SlidersWelcome />
            </div>
          </div>
        </div>
        {/*FIM DO SLIDER */}
        <div
          style={{
            backgroundImage: `url(${bg2})`,
          }}
          className="h-auto w-screen flex-col items-center
             justify-center 
             m-auto  
              z-10 absolute -mt-36"
        >
          <div
            className="max-w-7xl
        flex-col items-center justify-center m-auto py-40"
          >
            <h1
              className="font-mochari
           text-9xl text-custom-blue-strong
            text-center"
            >
              conheça nossas <br />
              linhas de produtos
            </h1>
            <div className="flex item justify-center gap-8 my-16">
              <img
                className="hover:scale-105 cursor-pointer drop-shadow-2xl transition duration-300"
                src={mussarela}
                alt="mussarela natville"
              />
              <div className="mt-8">
                <p className="font-roboto text-custom-blue-strong">
                  Um dos mais importantes símbolos da culinária, sem dúvidas, é
                  o queijo. E o queijo Natville conquista o paladar e o coração
                  de quem experimenta. Conheça a linha completa!
                </p>
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
                    VEJA MAIS &rsaquo;
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
          {/*INICIO BG3 */}
          <div
            style={{ backgroundImage: `url(${bg3})` }}
            className="h-auto flex items-center
          justify-center m-auto z-20"
          >
            <div className="max-w-7xl flex items-center justify-between gap-8 mt-56">
              <div className="w-full">
                <img
                  className="drop-shadow-2xl cursor-pointer hover:scale-105 duration-300 transition"
                  src={leites}
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
                    LEITE UHT
                  </h1>
                </div>
                <div className="py-8">
                  <p className="font-roboto text-custom-blue-strong text-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ea, itaque adipisci laudantium dolorum obcaecati
                    illum officiis consequuntur aliquid? Magni aspernatur
                    veritatis, officiis enim veniam nisi quaerat sapiente vitae
                    qui! Porro repudiandae deserunt voluptatem ad eius?
                    Perspiciatis eveniet consequatur cupiditate dolor illum
                    voluptatum tempora voluptates eum natus est vero quos id,
                    consequuntur ullam accusamus quia, culpa sequi sint. Quae,
                    ad?
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
          </div>
          {/*INICO BGFOOTER */}
          <div
            style={{ backgroundImage: `url(${bgFooter})` }}
            className="w-screen flex items-center
          justify-center bg-cover z-30 "
          >
            <div className="w-full flex items-center justify-around">
              <img src={logo} alt="natville" />
              <div className="flex-col items-center justify-center ">
                <p className="text-custom-blue-strong text-center font-mochari">
                  Acompanhe nossas
                </p>
                <div className="flex items-center justify-center gap-2">
                  <FaYoutube />
                  <RiFacebookBoxFill />
                  <FaWhatsappSquare />
                  <FaLinkedin />
                  <FaInstagramSquare />
                </div>
                <p className="text-custom-blue-strong text-center font-mochari">
                  redes sociais
                </p>
              </div>
              <div className="">
                <p>fale conosco</p>
                <div className="flex items-center justify-center">
                  <div>
                    <FaPhoneVolume />
                  </div>
                  <div className="flex-col items-center justify-center">
                    <p>0800 7213245</p>
                    <p>natville.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**fim bg footer */}
        </div>
        {/*FIM CONHEÇA NOSSA LINHA */}
      </section>
    </main>
  );
}
