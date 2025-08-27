import axios from "axios"
import { Produto } from "./produtoService";

export interface Compra {
    itens : ItemCompra[],
    desconto : number,
    dataCompra : string
}
export interface ItemCompra {
    quantidade : number,
    idProduto : number,
    valorUnitario : number,
    produto: Produto
}

export const postCompra = (compra : Compra) => {
    return axios.post(import.meta.env.VITE_API_URL +"/compra", compra);
}