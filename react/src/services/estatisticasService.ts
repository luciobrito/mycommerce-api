import axios from "axios"
export interface SomaDiaria{
    ano : number,
    dia : number,
    mes : number,
    total : number
}
export interface ProdutosMaisVendidos{
    id : number,
    qntVendida:number,
    codigo_barra : string,
    total : number,
    preco : number,
    nome : string
}
const url = import.meta.env.VITE_API_URL
export const getSomaVendasDia = () => axios.get(url+"/venda/somaDiaria")
export const getProdutosMaisVendidos = (mes : number, ano : number) => 
    axios.get(url + `/venda/maisVendidos?mes=${mes}&ano=${ano}`)