import axios from "axios";
import { Produto } from "./produtoService";

export interface Venda {
    id? : number,
    desconto : number,
    formaPagamento : string,
    dataVenda : string,
    itens: ItemVenda[]
}
export interface ItemVenda {
    quantidade : number,
    idProduto? : number,
    valor_unitario : number,
    produto : Produto
}
export interface Err {
    isLoading : boolean
}
export function getItemVendaStorage(): ItemVenda[]{
    const storage = localStorage.getItem("ItemVenda")
    var value = storage == null ? [] : JSON.parse(storage)
    return value
}
const url = import.meta.env.VITE_API_URL + "/venda"

export const postVenda = (venda : Venda, update : (isLoading: boolean) => void) => {
    axios.post(url, venda).then(() => {update(true)}).catch().finally(()=> {update(true)});
}