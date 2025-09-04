import axios from "axios"
export interface SomaDiaria{
    ano : number,
    dia : number,
    mes : number,
    total : number
}
const url = import.meta.env.VITE_API_URL
export const getSomaVendasDia = () => axios.get(url+"/venda/somaDiaria")
