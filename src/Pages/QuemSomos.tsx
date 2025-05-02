import logo from "../assets/QuemSomos/logoQuemSomos.png";
// import videoLogo from "../assets/Home/logoanimate11.webm";
import natville from "../assets/QuemSomos/natville.svg";
import capela from "../assets/QuemSomos/capela.svg";
import bg from "../assets/QuemSomos/bgProdutos.svg";

import logoF from "../assets/Footer/logoFooter.svg";
import valores from "../assets/QuemSomos/Valores.png";

//icons
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";
import { useLayoutEffect } from "react";

import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";

export function QuemSomos() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="bg-custom-white overflow-x-hidden w-full
    "
    >
      <section
        className=" flex-col items-center
       justify-center m-auto"
      >
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="h-screen w-screen flex items-center
          justify-center bg-cover m-auto
           bg-no-repeat max-md:bg-center  "
        >
          <div
            className=" items-center justify-center 
          flex-col max-w-7xl mm:max-md:-mt-28 -mt-40"
          >
            <AnimatedSection>
              <div className="flex items-center mm:max-md:flex-col">
                <img
                  className="mm:max-md:w-36 mm:max-md:hidden"
                  src={valores}
                  alt=""
                />
                <img
                  className="drop-shadow-xl max-w-2xl max-md:max-w-72"
                  src={logo}
                  alt="natville"
                />
                {/* <video
                  src={videoLogo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-8/12 mb-6 relative
                   z-10 max-md:max-w-72 drop-shadow-2xl "
                ></video> */}
                <img
                  className="mm:max-md:w-36 mm:max-md:block hidden"
                  src={valores}
                  alt=""
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${natville})` }}
          className="h-screen w-screen flex items-center
        justify-center m-auto
         bg-no-repeat bg-contain drop-shadow-2xl z-10 max-md:bg-center max-md:bg-cover  "
        >
          <div className="max-w-4xl -mt-16 max-md:-mt-16">
            <div
              className="items-end justify-end
             text-custom-blue-strong -mt-80"
            >
              <AnimatedY>
                <h1
                  className="uppercase font-mochari text-6xl 
                text-end max-md:text-center"
                >
                  nosso propósito
                </h1>
                <p
                  className=" font-roboto text-end 
                max-md:mx-8 max-md:text-justify 
                 bg-opacity-20 p-4 rounded-lg shadow mt-2 bg-white  "
                >
                  Somos o convite para uma jornada. esse caminho parte do nosso
                  desejo de transformar o mundo em um lugar melhor de se viver.
                  somos uma unida família do interior de sergipe, que dedica a
                  vida para produzir produtos do leite com qualidade.é a forma
                  que encontramos de dar vazão para a voz do bem e da família. é
                  essa marca que viemos deixar no mundo.
                </p>
              </AnimatedY>
            </div>
          </div>
        </div>
        <div
          className="max-w-4xl text-center flex-col
         items-center justify-center m-auto text-custom-blue-strong max-md:mx-8 max-md:mt-20"
        >
          <AnimatedNegative>
            <h1 className="uppercase font-mochari text-6xl text-center ">
              nossa comunidade e valores
            </h1>
          </AnimatedNegative>
          <div
            className="max-w-7xl text-center flex-col
            items-center justify-center m-auto"
          >
            <AnimatedSection>
              <p
                className="text-center text-custom-blue-strong
              font-roboto font-extralight text-2xl mb-20"
              >
                O pilar material
              </p>
            </AnimatedSection>
            <AnimatedY>
              <p
                className="text-justify text-custom-blue-strong
          font-light font-roboto mb-20"
              >
                Uma fábrica de leite localizada no Nordeste que valoriza a fé
                católica como pilar é mais que uma unidade de produção: é um
                empreendimento com propósito social e valores que reverberam na
                vida de seus funcionários e na comunidade. Essa fábrica gera
                emprego e renda para inúmeras famílias nordestinas, priorizando
                a contratação local e promovendo o desenvolvimento econômico
                regional. Com a missão de fortalecer a economia da região e
                oferecer oportunidades, ela investe em capacitação, segurança no
                trabalho e bem-estar dos colaboradores, criando um ambiente de
                trabalho digno e acolhedor. A fé católica inspira todos os
                aspectos dessa fábrica, desde a gestão até a produção,
                promovendo um ambiente de respeito, ética e solidariedade.
                Diariamente, reuniões e atividades incentivam os funcionários a
                se unirem em oração e celebrarem datas religiosas, criando uma
                cultura que une fé e trabalho. Esse compromisso com a fé e a
                comunidade é refletido em práticas de responsabilidade social,
                onde parte dos lucros é destinada a projetos de caridade,
                apoiando instituições locais e iniciativas voltadas para
                educação, saúde e moradia. Assim, além de produzir leite de
                qualidade, a fábrica se torna um símbolo de esperança, fé e
                oportunidade para as famílias nordestinas, demonstrando que o
                crescimento econômico e os valores espirituais podem caminhar
                juntos.
              </p>
            </AnimatedY>
          </div>
        </div>

        <AnimatedSection>
          <p
            className="text-center text-custom-blue-strong
         font-mochari font-extralight text-6xl mm:max-md:px-8"
          >
            O pilar espiritual
          </p>
        </AnimatedSection>

        <div
          style={{ backgroundImage: `url(${capela})` }}
          className="h-screen w-screen flex items-center
        justify-center m-auto
         bg-no-repeat bg-contain drop-shadow-xl z-10 max-md:bg-cover max-md:bg-center"
        ></div>

        <div
          className="max-w-4xl text-center flex-col
         items-center justify-center m-auto text-custom-blue-strong mt-20"
        >
          <AnimatedY>
            <p
              className="text-justify text-custom-blue-strong
          font-light font-roboto mb-20 max-md:mx-8"
            >
              Essa empresa de laticínios, com São Miguel Arcanjo como seu
              padroeiro, é dedicada não apenas à produção de alimentos de
              qualidade, mas também ao fortalecimento espiritual de seus
              funcionários e da comunidade. Inspirada pela proteção e coragem de
              São Miguel, a fábrica promove valores de fé e perseverança,
              colocando a espiritualidade no centro de suas atividades. Além
              disso, está engajada em um projeto de grande significado
              religioso: a construção do Santuário da Divina Misericórdia, que
              tem como madrinha Santa Faustina, a santa conhecida por sua
              profunda devoção à misericórdia divina.   O santuário é um lugar
              sagrado onde a fé é alimentada diariamente. Nele, missas são
              celebradas todos os dias, proporcionando aos fiéis e funcionários
              uma oportunidade para fortalecerem sua relação com Deus e buscarem
              renovação espiritual. Esses momentos litúrgicos são conduzidos com
              fervor e dedicação, oferecendo a todos um espaço de paz, oração e
              contemplação. A empresa incentiva a participação dos funcionários
              nas celebrações e nas atividades espirituais, proporcionando um
              ambiente de trabalho onde a carne e a fé se encontram.   Além do
              alimento para a alma, a fábrica valoriza o bem-estar físico dos
              colaboradores. Na hora das refeições, os funcionários desfrutam de
              um espaço acolhedor, onde podem se nutrir com refeições saudáveis
              e balanceadas. Essa união de nutrição material e espiritual
              fortalece o propósito da empresa de promover a saúde e a dignidade
              de seus trabalhadores, demonstrando que é possível nutrir o corpo
              e o espírito com igual atenção. Assim, cada dia de trabalho se
              transforma em uma experiência de comunhão, não só com os colegas,
              mas também com a fé, guiados pela intercessão de São Miguel e pelo
              exemplo de Santa Faustina.
            </p>
          </AnimatedY>
        </div>
        <footer
          className="w-full h-auto mb-5
            flex items-center justify-center m-auto"
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
              <a href="https://qrco.de/bfx729" target="_blacnk">
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
              </a>
              <a href="https://qrco.de/bfx729" target="_blacnk">
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
              </a>
            </div>
            <div className="w-full flex-col">
              <div className="border border-gray-300 mt-5"></div>
              <div className="text-gray-400">
                <p className="text-end font-light text-sm max-md:text-center">
                  &copy; 2024 JSDevelopers and Growth{" "}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
