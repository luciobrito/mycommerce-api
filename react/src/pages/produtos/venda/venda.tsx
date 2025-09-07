import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { defaultVenda, ItemVenda, Venda } from "../../../services/vendaService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";
import "./venda.scss";
import { Loader, TextInput, Title } from "@mantine/core";
import FinalizarForm from "./FinalizarForm";
export default function VendaPage() {
  const storedVenda = JSON.parse(localStorage.getItem("venda") ?? JSON.stringify(defaultVenda));
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]),
    [valorBusca, setValorBusca] = useState<string>(""),
    [venda, setVenda] = useState<Venda>(storedVenda),
    [buscaLdng, setBuscaLdng] = useState<boolean>(false);
    let timer:number;
  useEffect(() => {
    timer = setTimeout(() => {
          setBuscaLdng(true);
    buscarProdutos(valorBusca)
      .then((res) => {
        setProdutosBusca(res.data);
        console.debug(buscaLdng);
      })
      .finally(() => {
        setBuscaLdng(false);
        console.debug(buscaLdng);
      });
    },300);

  }, [valorBusca, venda.itens]);
localStorage.setItem("venda", JSON.stringify(venda))
  const adicionarItem = (item: ItemVenda) => {
    var vendaObj = { ...venda };
    vendaObj.itens.push(item);
    setVenda(vendaObj);
  };

  const removerItem = (id: number) => {
    var vendaObj = { ...venda };
    var index = vendaObj.itens.findIndex((x) => x.idProduto == id);
    vendaObj.itens.splice(index, 1);
    setVenda(vendaObj);
  };
  //localStorage.setItem("ItemVenda", JSON.stringify(itensVenda));

  console.debug(venda);
  return (
    <div className="containerVenda">
      <Title>Nova Venda</Title>
      <TextInput
        label="Buscar produtos"
        size="md"
        placeholder="Busca por nome ou código"
        onChange={(e) => {
             clearTimeout(timer)
          setValorBusca(e.target.value);
        }}
      />
      <div style={{ marginTop: 10 }}>
        <ListaProdutos
          produtos={produtosBusca}
          adicionar={adicionarItem}
          itens={venda.itens}
        />
        {buscaLdng ? <Loader /> : ""}
      </div>
      <ListaItens venda={venda} removerItem={removerItem} setVenda={setVenda} />
      <FinalizarForm venda={venda} setVenda={setVenda} />
    </div>
  );
}
