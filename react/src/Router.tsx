import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/page";
import Login from "./pages/login/page";
import Produtos from "./pages/produtos/produtos";
import CadastroProduto from "./pages/produtos/cadastro/cadastro";

export default function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/produtos" element={<Produtos/>}/> 
            <Route path="/cadastro" element={<CadastroProduto/>} />
        </Routes>
    
    </BrowserRouter>
}