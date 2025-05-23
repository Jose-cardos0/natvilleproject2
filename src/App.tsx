import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
// import { QuemSomos } from "./Pages/QuemSomos";
// import { ProdutoDetail } from "./Pages/ProdutosDetail";
// import { LeitesUht } from "./Pages/leiteUht";
// import { Queijos } from "./Pages/Queijos";
// import { Manteigas } from "./Pages/Manteigas";
// import { Noticias } from "./Pages/Noticias";
// import { Choconat } from "./Pages/Choconat";
// import { Bebidas } from "./Pages/Bebidas";
// import { ReqCremoso } from "./Pages/ReqCremoso";
// import { Condensados } from "./Pages/Condensado";
// import { NossosProdutos } from "./Pages/NossosProdutos";
// import { Contato } from "./Pages/Contato";
// import { LeitesEmPo } from "./Pages/LeitesEmPo";
// import { CremeDeLeite } from "./Pages/Cremedeleite";

//header
import { Layout } from "./Components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      // {
      //   path: "/quemsomos",
      //   element: <QuemSomos />,
      // },
      // {
      //   path: "/leiteuht",
      //   element: <LeitesUht />,
      // },
      // {
      //   path: "/queijos",
      //   element: <Queijos />,
      // },
      // {
      //   path: "/produtos/:id",
      //   element: <ProdutoDetail />,
      // },
      // {
      //   path: "/manteigas",
      //   element: <Manteigas />,
      // },
      // {
      //   path: "/noticias",
      //   element: <Noticias />,
      // },
      // {
      //   path: "/choconat",
      //   element: <Choconat />,
      // },
      // {
      //   path: "/bebidas",
      //   element: <Bebidas />,
      // },
      // {
      //   path: "/reqcremoso",
      //   element: <ReqCremoso />,
      // },
      // {
      //   path: "/condensados",
      //   element: <Condensados />,
      // },
      // {
      //   path: "/nossosprodutos",
      //   element: <NossosProdutos />,
      // },
      // {
      //   path: "/contato",
      //   element: <Contato />,
      // },
      // {
      //   path: "/empo",
      //   element: <LeitesEmPo />,
      // },
      // {
      //   path: "/cremedeleite",
      //   element: <CremeDeLeite />,
      // },
    ],
  },
]);
