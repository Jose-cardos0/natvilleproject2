import vaca from "../assets/Contato/naty.webp";

export function NotFound() {
  return (
    <div className="flex max-md:flex-col items-center justify-center m-auto bg-custom-blue h-screen">
      <img className="max-w-96 max-md:w-72" src={vaca} alt="" />
      <p className="text-white uppercase font-mochari text-7xl max-md:text-center max-md:text-4xl">
        Aguarde... <br />
        Estamos em construção!
      </p>
    </div>
  );
}
