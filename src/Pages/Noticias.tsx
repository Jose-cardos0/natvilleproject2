//animacoes
import { AnimatedNegative } from "../Tools/Animates/AnimatedNegative";
// import { AnimatedSection } from "../Tools/Animates/AnimatedSections";
import { AnimatedY } from "../Tools/Animates/AnimatedY";

import { InstagramEmbed } from "../Components/InstagramEmbedProps";

import { Footer } from "../Components/Footer";

//noticias

export function Noticias() {
  const posts = [
    "https://www.instagram.com/p/DI67UWoyq5B/",
    "https://www.instagram.com/p/DIJSofGOyc3/",
    "https://www.instagram.com/p/DI4WeHDyl7h/",
    "https://www.instagram.com/p/DJAM-pHyLrF/",
    "https://www.instagram.com/p/DIqvMHnuZeR/",
    "https://www.instagram.com/p/DGLZeqkuN5I/",
  ];

  return (
    <main
      className="w-full h-full flex flex-col
    items-center justify-center m-auto "
    >
      <div
        className=" max-w-7xl flex-col items-center 
      justify-center m-auto w-full h-full mt-12 "
      >
        <div className=" items-center justify-center flex-col">
          <div
            className="w-full flex items-center justify-center
           text-7xl max-md:text-5xl font-mochari text-custom-blue-strong"
          >
            <AnimatedNegative>
              <h1>Acompanhe nossas</h1>
              <h1 className="text-center">Redes sociais</h1>
            </AnimatedNegative>
          </div>
          <AnimatedY>
            <div
              className="mt-8 items-center 
               justify-center m-auto max-w-5xl grid rounded-xl
         grid-cols-3 max-md:grid-cols-1   "
            >
              {posts.map((url, index) => (
                <InstagramEmbed
                  key={index}
                  url={url}
                  maxWidth={320}
                  hideCaption={false}
                />
              ))}
            </div>
          </AnimatedY>
        </div>
      </div>
      {/*footer inicio */}
      <footer
        className="w-full h-auto mb-5
            flex items-center justify-center m-auto -mt-32 "
      >
        <div
          className="w-8/12 
               flex-col items-center
            "
        >
          <Footer />
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
      {/*fim footer */}
    </main>
  );
}
