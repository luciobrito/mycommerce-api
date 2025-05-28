import { Produto } from "./produtoService";

export interface Compra {
    produtos : Produto[],
    desconto : number,
    dataCompra : Date
}