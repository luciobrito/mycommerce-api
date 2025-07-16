import axios from "axios";

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
    valorUnitario : number,
}

export const postVenda = (venda : Venda) => {
    axios.post("", venda);
}