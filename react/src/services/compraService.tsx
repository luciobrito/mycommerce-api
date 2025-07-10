import axios from "axios"

export interface Compra {
    itens : ItemCompra[],
    desconto : number,
    dataCompra : string
}
export interface ItemCompra {
    quantidade : number,
    idProduto : number,
    valorUnitario : number
}

export const postCompra = (compra : Compra) => {
    return axios.post("http://localhost:8080/compra", compra);
}