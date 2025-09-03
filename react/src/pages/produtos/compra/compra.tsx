import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import {
  Compra,
  defaultCompra,
  ItemCompra,
  postCompra,
} from "../../../services/compraService";
import "./compra.scss";
import ListaItens from "./listaItens";
import CadastroProduto from "../cadastro/cadastro";
import ListaProdutos from "./listaProdutos";
import { Button, Loader, Modal, Text, TextInput, Title } from "@mantine/core";
import FinalizarCompra from "./FinalizarCompra";
import { toBrazilianReal } from "../../../services/maskService";

export default function CompraPage() {
  const storedCompra = JSON.parse(localStorage.getItem("venda") ?? JSON.stringify(defaultCompra)) 
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]);
  const [valorBusca, setValorBusca] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [compra, setCompra] = useState<Compra>(storedCompra );
  const [buscaLdng, setBuscaLdng] = useState<boolean>(false);
  localStorage.setItem("compra", JSON.stringify(compra));
  var total: number = 0;
  compra.itens.forEach((x) => {
    total += x.valorUnitario * x.quantidade;
  });

  let timer: number;
  useEffect(() => {
    timer = setTimeout(() => {
      setBuscaLdng(true);
      buscarProdutos(valorBusca)
        .then((res) => setProdutosBusca(res.data))
        .finally(() => {
          setBuscaLdng(false);
        });
    }, 300);
  }, [valorBusca, compra.itens]);
  const adicionarItem = (item: ItemCompra) => {
    var compraObj = { ...compra };
    compraObj.itens.push(item);
    setCompra(compraObj);
  };
  const removerItem = (id: number) => {
    var compraObj = { ...compra };
    var index = compraObj.itens.findIndex((x) => x.idProduto == id);
    compraObj.itens.splice(index, 1);
    setCompra(compraObj);
  };
  const updateCompra = (valor: Partial<Compra>) => {
    setCompra({ ...compra, ...valor });
    console.log(compra);
  };
  const updateItem = (valor: Partial<ItemCompra>, id: number) => {
    var obj = { ...compra };
    var index = obj.itens.findIndex((x) => x.idProduto == id);
    obj.itens[index] = { ...obj.itens[index], ...valor };
    setCompra(obj);
    console.log(compra);
  };
  const finalizarCompra = () => {
    //Salvar alterações e esvaziar arrays
    postCompra(compra);
    //setCompra({...compra, itens:[]});
  };
  return (
    <div>
      <Title>Nova Compra</Title>
            <Button
      style={{marginTop:10, marginBottom:10}}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Novo Produto +
      </Button>
      <TextInput
        label="Buscar produtos"
        size="md"
        placeholder="Busca por nome ou código de barra"
        onChange={(e) => {
          clearTimeout(timer);
          setValorBusca(e.target.value);
        }}
      />

      <Modal
        opened={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        title={
          <Text fw={700} size="xl">
            Cadastrar um novo produto
          </Text>
        }
        centered
        size={"lg"}
      >
        <CadastroProduto
          close={() => {
            setModalOpen(false);
          }}
        />
      </Modal>
      <ListaProdutos
        addItem={adicionarItem}
        itens={compra.itens}
        produtos={produtosBusca}
      />
      {buscaLdng && <Loader /> }
      <Title>Finalização</Title>
      <ListaItens
        itens={compra.itens}
        removerItem={removerItem}
        updateItem={updateItem}
      />
      <Title order={3}>Total:</Title>
      <Text size="lg">{toBrazilianReal(total)}</Text>
      <FinalizarCompra
        itens={compra.itens}
        finalizarCompra={finalizarCompra}
        updateCompra={updateCompra}
      />
    </div>
  );
}
