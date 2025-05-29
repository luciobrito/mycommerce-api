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