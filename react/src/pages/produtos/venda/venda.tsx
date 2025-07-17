import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { ItemVenda } from "../../../services/vendaService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";

export default function Venda() {
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]),
    [valorBusca, setValorBusca] = useState<string>(""),
    [itensVenda, setItensVenda] = useState<ItemVenda[]>([]),
    [produtosVenda, setProdutosVenda] = useState<Produto[]>([])
    ;
  useEffect(() => {
    buscarProdutos(valorBusca).then((res) => setProdutosBusca(res.data));
  }, [valorBusca]);
  const adicionarItem = (item : ItemVenda) => {
    var itens = [...itensVenda]
    itens.push(item)
    setItensVenda(itens)
  }
  const enviar = () =>{
    produtosVenda.map(x => setItensVenda([...itensVenda, {quantidade:0, idProduto: x.id, valorUnitario: x.preco}]))
  }
  console.log(itensVenda)
  return (
    <div>
      <Typography variant="h5">Nova Venda</Typography>
      <TextField label="Buscar produtos" placeholder="Busca por nome ou código" value={','} onChange={(e)=>{setValorBusca(e.target.value)}}/>
      <ListaProdutos produtos={produtosBusca} adicionar={adicionarItem}/>
      <ListaItens/>
    </div>
  );
}
