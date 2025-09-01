import axios from "axios";
import { Produto } from "./produtoService";

export interface Compra {
  id?:number;
  itens: ItemCompra[];
  desconto: number;
  dataCompra: string;
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
  dataCompra: new Date().toISOString(),
};
const env = import.meta.env.VITE_API_URL
export const getCompra = (page : number) => {
  return axios.get(env + `/compra?page=${page-1}`)
}
export const postCompra = (compra: Compra) => {
  return axios.post(import.meta.env.VITE_API_URL + "/compra", compra);
};
