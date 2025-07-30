import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { ItemVenda, postVenda, Venda } from "../../../services/vendaService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";
import "./venda.scss"
import { Loader, TextInput, Title } from "@mantine/core";
import FinalizarForm from "./FinalizarForm";
export default function VendaPage() {
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]),
    [valorBusca, setValorBusca] = useState<string>(""),
    [venda, setVenda] = useState<Venda>({itens: [], dataVenda: "", desconto: 0, formaPagamento: ""}),
    [isLoading, setIsLoading] = useState<boolean>(false),
    [buscaLdng, setBuscaLdng] = useState<boolean>(false);
  useEffect(() => {
    setBuscaLdng(true);
    buscarProdutos(valorBusca).then((res) => {setProdutosBusca(res.data);console.log(buscaLdng)}).finally(()=>{setBuscaLdng(false);console.log(buscaLdng)});
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
        itens={venda.itens}
        
        />
        { buscaLdng ? <Loader /> : ""}
      </div>
      <ListaItens venda={venda} removerItem={removerItem} setVenda={setVenda}/>
      <FinalizarForm venda={venda} setVenda={setVenda}/>
    </div>
  );
}
