import axios from "axios";

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidadeEstoque?: number;
  codigoBarra: string;
  descricao: string;
}

const url = import.meta.env.VITE_API_URL + "/produto";

export const getProdutos = () => {
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
  return axios.get(url);
};

export const postProduto = (produto: Produto) => {
  return axios.post(url, produto);
};

export const buscarProdutos = (valor : string) => {
  var urlBusca = valor == "" ? "/-" : "/" + valor;
  return axios.get(url + urlBusca);
}