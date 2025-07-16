import axios from "axios"
export interface SomaDiaria{
    ano : number,
    dia : number,
    mes : number,
    total : number
}

export const getSomaVendasDia = () => axios.get("http://localhost:8080/venda/somaDiaria")
