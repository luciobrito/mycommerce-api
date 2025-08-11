import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import {
  Compra,
  ItemCompra,
  postCompra,
} from "../../../services/compraService";
import "./compra.scss"
import ListaItens from "./listaItens";
import CadastroProduto from "../cadastro/cadastro";
import ListaProdutos from "./listaProdutos";
import { Button, Loader, Modal, Text, TextInput, Title } from "@mantine/core";
import FinalizarCompra from "./FinalizarCompra";

export default function CompraPage() {
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]);
  const [valorBusca, setValorBusca] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [compra, setCompra] = useState<Compra>(JSON.parse(localStorage.getItem("compra") ?? JSON.stringify({dataCompra:"",desconto:0,itens:[]})))
  const [buscaLdng, setBuscaLdng] = useState<boolean>(false)
  let timer : number;
  localStorage.setItem("compra", JSON.stringify(compra));
  useEffect(() => {
    timer = setTimeout(()=>{
      setBuscaLdng(true)
      buscarProdutos(valorBusca).then((res) => setProdutosBusca(res.data)).finally(()=>{setBuscaLdng(false)});
    },300)
    
  }, [valorBusca]);
  const adicionarItem = (item : ItemCompra) => {
    var compraObj = {...compra}
    compraObj.itens.push(item);
    setCompra(compraObj)
  };
  const removerItem = (id : number) => {
    var compraObj = {...compra}
    var index = compraObj.itens.findIndex(x => x.idProduto == id)
    compraObj.itens.splice(index,1)
    setCompra(compraObj)
  };
  const finalizarCompra = () => {
    //Salvar alterações e esvaziar arrays
    postCompra(compra);
    //setCompra({...compra, itens:[]});
  };
  return (
    <div>
      <Title>Nova Compra</Title>
      <TextInput
        label="Buscar produtos"
        size="md"
        placeholder="Busca por nome ou código de barra"
        onChange={(e) => {
          clearTimeout(timer)
          setValorBusca(e.target.value);
        }}
      />
      <Button onClick={()=>{setModalOpen(true)}}>Novo Produto</Button>
      <Modal opened={modalOpen} onClose={()=>{setModalOpen(false)}} title={<Text fw={700} size="xl">Cadastrar um novo produto</Text>} centered size={"lg"}>
          <CadastroProduto close={()=>{setModalOpen(false)}}/>
        </Modal>
      <ListaProdutos addItem={adicionarItem} itens={compra.itens} produtos={produtosBusca}/>
      {buscaLdng ? <Loader /> : ""}
      <Title>Finalização</Title>
      <ListaItens
        itens={compra.itens}   
        removerItem={removerItem}
      />
      <FinalizarCompra itens={compra.itens} finalizarCompra={finalizarCompra}/>
    </div>
  );
}
