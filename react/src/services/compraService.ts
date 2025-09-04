import axios from "axios";
import { Produto } from "./produtoService";

export interface Compra {
  id?:number;
  itens: ItemCompra[];
  desconto: number;
  created_at?: string
}
export interface ItemCompra {
  quantidade: number;
  idProduto: number;
  valorUnitario: number;
  produto: Produto;
}
export const defaultCompra: Compra = {
  itens: [],
  desconto: 0,
};
export function getTotal(itens : any[]) : number{
    var total = 0;
    itens.forEach(x=> total+= x.valorUnitario * x.quantidade)
    return total;
}
const env = import.meta.env.VITE_API_URL
export const getCompra = (page : number) => {
  return axios.get(env + `/compra?page=${page}&size=6&sort=id,desc`)
}
export const postCompra = (compra: Compra) => {
  return axios.post(import.meta.env.VITE_API_URL + "/compra", compra);
};
