import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import {
  Compra,
  ItemCompra,
  postCompra,
} from "../../../services/compraService";

import ListaItens from "./listaItens";
import CadastroProduto from "../cadastro/cadastro";
import ListaProdutos from "./listaProdutos";
import { Button, Modal, Text, TextInput, Title } from "@mantine/core";

export default function CompraPage() {
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]);
  const [valorBusca, setValorBusca] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [compra, setCompra] = useState<Compra>({dataCompra:"",desconto:0,itens:[]})
  useEffect(() => {
    buscarProdutos(valorBusca).then((res) => setProdutosBusca(res.data));
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
        onChange={(e) => {
          setValorBusca(e.target.value);
        }}
      />
      <Button onClick={()=>{setModalOpen(true)}}>Cadastrar</Button>
      <Modal opened={modalOpen} onClose={()=>{setModalOpen(false)}} title={<Text fw={700} size="xl">Cadastrar um novo produto</Text>} centered size={"lg"}>
          <CadastroProduto close={()=>{setModalOpen(false)}}/>
        </Modal>
      <ListaProdutos addItem={adicionarItem} itens={compra.itens} produtos={produtosBusca}/>
      <Title>Lista de produtos:</Title>
      <ListaItens
        itens={compra.itens}   
        finalizarCompra={finalizarCompra}
        removerItem={removerItem}
      />
    </div>
  );
}
