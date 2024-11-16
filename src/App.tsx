import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { QuemSomos } from "./Pages/QuemSomos";
import { ProdutoDetail } from "./Pages/ProdutosDetail";

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
        path: "/quemsomos",
        element: <QuemSomos />,
      },
      {
        path: "/produtos/:id",
        element: <ProdutoDetail />,
      },
    ],
  },
]);
