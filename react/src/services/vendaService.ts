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
export const defaultVenda : Venda ={
      itens: [],
      dataVenda: new Date().toISOString(),
      desconto: 0,
      formaPagamento: "Pix",
    }
export function getTotal(venda : Venda) : number{
    var total = 0;
    venda.itens.forEach(x=> total+= x.valor_unitario * x.quantidade)
    return total;
}
export function getItemVendaStorage(): ItemVenda[]{
    const storage = localStorage.getItem("ItemVenda")
    var value = storage == null ? [] : JSON.parse(storage)
    return value
}
const url = import.meta.env.VITE_API_URL + "/venda"

export const postVenda = (venda : Venda, update : (isLoading: boolean) => void, success : any, setVenda: any) => {
    axios.post(url, venda).then(()=>{success(true); setVenda()}).catch().finally(()=> {update(false)});
}