import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";

import videoLogo from "../assets/Home/logoanimate11.webm";

export function Footer() {
  return (
    <div
      className="w-full flex justify-between 
               max-md:flex-col  max-md:gap-5 mt-48 max-md:mt-40"
    >
      <div>
        {/* <img
                className="min-w-56 hover:scale-105 transition 
                duration-700 drop-shadow-lg"
                src={logoF}
                alt="natville"
              /> */}
        <video
          src={videoLogo}
          autoPlay
          muted
          loop
          playsInline
          className="relative z-10 w-56 drop-shadow-xl max-md:w-96"
        ></video>
      </div>
      <a href="https://qrco.de/bfx729" target="_blacnk">
        <div className="flex-col items-center justify-center cursor-pointer ">
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
      </a>
      <a href="https://qrco.de/bfx729" target="_blacnk">
        <div
          className="font-mochari text-custom-blue-strong
                 flex-col items-center justify-center "
        >
          <p className="text-end text-4xl max-md:text-center">fale conosco</p>
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
      </a>
    </div>
  );
}
