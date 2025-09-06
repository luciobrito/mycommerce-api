import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/page";
import Login from "./pages/login/page";
import Produtos from "./pages/produtos/produtos";
import CompraPage from "./pages/produtos/compra/compra";
import Venda from "./pages/produtos/venda/venda";
import Estatisticas from "./pages/estatisticas/estatisticas";
import Historico from "./pages/historico/Historico";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/venda"
          children={[<Route path="" element={<Venda />} />]}
        />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/compra" element={<CompraPage />} />
        <Route path="/estatisticas" element= {<Estatisticas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export const routerConst = createBrowserRouter([
  
  {path:"/",
    element: <Home/>
   }
   ,
   {
    path:"/compra",
    element: <CompraPage/>,
   },
   {path:"/venda", element:<Venda/>},
   {path:"/estatisticas", element:<Estatisticas/>},
   {path:"/historico",element:<Historico/>}
])
