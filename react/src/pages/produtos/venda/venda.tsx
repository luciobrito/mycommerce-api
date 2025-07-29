import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { ItemVenda, postVenda, Venda } from "../../../services/vendaService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";
import "./venda.scss"
import { TextInput, Title } from "@mantine/core";
export default function VendaPage() {
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]),
    [valorBusca, setValorBusca] = useState<string>(""),
    [venda, setVenda] = useState<Venda>({itens: [], dataVenda: "", desconto: 0, formaPagamento: ""}),
    [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    buscarProdutos(valorBusca).then((res) => setProdutosBusca(res.data));
  }, [valorBusca]);

  const adicionarItem = (item: ItemVenda) => {
    var vendaObj = {...venda};
    vendaObj.itens.push(item);
    setVenda(vendaObj)
  };

  const removerItem = (id : number) =>{
    var vendaObj = {...venda}
    var index = vendaObj.itens.findIndex(x => x.idProduto == id)
    vendaObj.itens.splice(index,1)
    setVenda(vendaObj)
  }
  //localStorage.setItem("ItemVenda", JSON.stringify(itensVenda));
  
  const finalizarVenda = () => {
    postVenda(venda, setIsLoading)
  };
  console.log(venda);
  return (
    <div className="containerVenda">
      <Title>Nova Venda</Title>
      <TextInput
        label="Buscar produtos"
        size="md"
        placeholder="Busca por nome ou código"
        onChange={(e) => {
          setValorBusca(e.target.value);
        }}
      />
      <div style={{marginTop: 10}}>
      <ListaProdutos
        produtos={produtosBusca}
        adicionar={adicionarItem}
        venda={venda}
        
        />
        {produtosBusca.length == 0 && valorBusca ? `Nenhum produto com "${valorBusca}" encontrado.` : ""}
      </div>
      <ListaItens venda={venda} finalizarVenda={finalizarVenda} loading={isLoading} removerItem={removerItem} setVenda={setVenda}/>
    </div>
  );
}
