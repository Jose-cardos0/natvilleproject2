import camp from "../assets/Home/camp.webp";
import naty from "../assets/Contato/naty.webp";
import qrCode from "../assets/Contato/qrCodeWhats.svg";

import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";
import logoF from "../assets/Footer/logoFooter.svg";

export function Contato() {
  return (
    <section className="h-screen w-full ">
      <div className="bg-custom-blue flex-col flex items-center justify-center m-auto max-md:pb-20 ">
        <div className="max-w-7xl my-14 relative z-10">
          <div className="w-full items-center justify-center flex m-auto">
            <a href="https://w.app/vkpthd" target="_blanck">
              <img
                className="max-w-96 hover:scale-105 transition duration-300 max-md:w-44 "
                src={qrCode}
                alt=""
              />
            </a>
            <div>
              <img className="max-w-96 max-md:w-44" src={naty} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center m-auto">
            <form className="w-full max-w-5xl bg-custom-blue-strong bg-opacity-10 p-8 rounded-2xl shadow-2xl max-md:w-11/12">
              <div className="w-full mb-6">
                <label className="block text-white font-roboto font-semibold mb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-blue-50 px-4 py-3 outline-none border border-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="w-full mb-6">
                <label className="block text-white font-roboto font-semibold mb-2">
                  Contato:
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl bg-blue-50 px-4 py-3 outline-none border border-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
                  placeholder="Digite seu telefone"
                />
              </div>

              <div className="w-full mb-6">
                <label className="block text-white font-roboto font-semibold mb-2">
                  E-mail:
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl bg-blue-50 px-4 py-3 outline-none border border-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="w-full mb-6">
                <label className="block text-white font-roboto font-semibold mb-2">
                  Destinatário:
                </label>
                <select className="w-full rounded-xl bg-blue-50 px-4 py-3 outline-none border border-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition">
                  <option value="">Selecione uma opção</option>
                  <option value="compas">SETOR COMPAS</option>
                  <option value="contas">SETOR CONTAS À PAGAR</option>
                  <option value="comercial">SETOR COMERCIAL</option>
                  <option value="financeiro">SETOR FINANCEIRO</option>
                </select>
              </div>

              <div className="w-full mb-6">
                <label className="block text-white font-roboto font-semibold mb-2">
                  Mensagem:
                </label>
                <textarea
                  className="w-full rounded-xl bg-blue-50 px-4 py-3 outline-none border border-transparent h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>

              <div className="w-full mb-6">
                <label className="block text-white font-roboto font-semibold mb-2">
                  Anexar arquivo:
                </label>
                <input
                  type="file"
                  className="w-full rounded-xl bg-blue-50 px-4 py-3 outline-none border border-transparent file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-white file:font-bold file:bg-custom-blue-strong file:cursor-pointer hover:file:bg-blue-700 transition"
                />
              </div>

              <div className="w-full flex justify-center">
                <button className="bg-custom-blue-strong hover:bg-blue-700 transition-all py-4 px-8 rounded-xl text-white font-bold text-lg w-full shadow-lg">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="-mt-32 relative z-0 ">
          <img className="z-10" src={camp} alt="" />
        </div>
      </div>
      <section className="-mt-32 ">
        <svg
          className=""
          width="100%"
          height="100%"
          viewBox="0 0 1952 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0H1951.5V218.5V218.5C1707.85 318.961 1440.1 345.827 1181.35 295.776L634.5 190L483.896 159.026C319.101 125.133 147.617 151.376 0.5 233V233V0Z"
            fill="#55BECD"
          />
        </svg>
      </section>
      <footer
        className="w-full h-auto -mt-20
            flex items-center justify-center m-auto max-md:mt-11"
      >
        <div
          className="w-8/12 
               flex-col items-center
            "
        >
          <div
            className="w-full flex justify-between mt-28
               max-md:flex-col  max-md:gap-5"
          >
            <div>
              <img
                className="min-w-56 hover:scale-105 transition duration-700 drop-shadow-lg"
                src={logoF}
                alt="natville"
              />
            </div>
            <div className="flex-col items-center justify-center ">
              <p
                className="text-custom-blue-strong
                   text-center font-mochari text-4xl"
              >
                Acompanhe nossas
              </p>
              <div className="flex items-center justify-center gap-2">
                <AiOutlineYoutube
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <CiFacebook
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <FaWhatsapp
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <FaInstagram
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
                <AiOutlineLinkedin
                  size={25}
                  className="cursor-pointer hover:scale-105 transition duration-300"
                />
              </div>
              <p
                className="text-custom-blue-strong 
                  text-center font-mochari text-4xl"
              >
                redes sociais
              </p>
            </div>
            <div
              className="font-mochari text-custom-blue-strong
                 flex-col items-center justify-center "
            >
              <p className="text-end text-4xl max-md:text-center">
                fale conosco
              </p>
              <div className="flex items-center justify-between gap-3 max-md:justify-center">
                <div>
                  <FiPhoneForwarded size={37} />
                </div>
                <div
                  className="flex-col text-2xl 
                    items-center justify-center "
                >
                  <p>0800 7213245</p>
                  <p className="text-xl -mt-3">natville.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col">
            <div className="border border-gray-300 mt-5"></div>
            <div className="text-gray-400">
              <p className="text-end font-light text-sm max-md:text-center pb-3">
                &copy; 2024 JSDevelopers and Growth{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
