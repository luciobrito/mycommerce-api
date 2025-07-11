import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import {
  Compra,
  ItemCompra,
  postCompra,
} from "../../../services/compraService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";

export default function CompraPage() {
  const [produtosBusca, setProdutosBusca] = useState<Produto[]>([]);
  const [valorBusca, setValorBusca] = useState("");
  const [itensCompra, setItensCompra] = useState<ItemCompra[]>([]);
  const [itens, setItens] = useState<Produto[]>([]);

  var compra: Compra = {
    desconto: 0,
    //Data está em UTC, mudar para horário de Brasilia
    dataCompra: new Date().toISOString(),
    itens: itensCompra,
  };
  useEffect(() => {
    buscarProdutos(valorBusca).then((res) => setProdutosBusca(res.data));
  }, [valorBusca]);
  const addIt = (produto: Produto) => {
    setItens([...itens, produto]);
    setItensCompra([
      ...itensCompra,
      { idProduto: produto.id, quantidade: 1, valorUnitario: 0 },
    ]);
    console.log(itensCompra);
    console.log(compra);
  };
  const removerItem = (produto : Produto) => {
    //Rascunho, ainda tem que melhorar
    var itensCompraAux = itensCompra;
    var itensAux = itens;
    var index = itensCompraAux.findIndex((x) => x.idProduto === produto.id);
    var index2 = itens.findIndex(x => x.id === produto.id);
    itensCompraAux.splice(index,1);
    itensAux.splice(index2,1)
    setItensCompra(itensCompraAux);
    setItensCompra([...itensCompra]);
    setItens(itensAux);
    console.log(itens)
    return;
  };
  const atualizarItem = (
    id: number,
    quantidade?: number,
    valorUnitario?: number
  ) => {
    var itensCompraAux = itensCompra;
    var index = itensCompra.findIndex((x) => x.idProduto == id);
    if (quantidade) itensCompraAux[index].quantidade = quantidade;
    if (valorUnitario) itensCompraAux[index].valorUnitario = valorUnitario;
    setItensCompra(itensCompraAux);
    console.log(itensCompra);
  };
  const finalizarCompra = () => {
    //Salvar alterações e esvaziar arrays
    postCompra(compra);
    setItens([]);
    setItensCompra([]);
  };
  return (
    <div>
      <Typography variant="h5">Nova compra</Typography>
      {/*Transformar esses dois ↓ em uma modal (?)*/}
      <TextField
        label="Buscar produtos"
        onChange={(e) => {
          setValorBusca(e.target.value);
        }}
      />

      <ListaProdutos produtos={produtosBusca} addItem={addIt} itens={itensCompra} />
      {/* */}
      <Typography variant="h6">Lista de produtos:</Typography>
      <ListaItens
        itens={itens}
        atualizarLista={atualizarItem}
        finalizarCompra={finalizarCompra}
        removerItem={removerItem}
      />
    </div>
  );
}
