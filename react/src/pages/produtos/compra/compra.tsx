import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { Compra, ItemCompra } from "../../../services/compraService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";

export default function CompraPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [value, setValue] = useState("");
  const [itensCompra, setItensCompra] = useState<ItemCompra[]>([]);
  const [itens, setItens] = useState<Produto[]>([]);
  
  var compra : Compra = {desconto : 0, dataCompra : new Date().toISOString(), itens: itensCompra}; 
  useEffect(() => {
    buscarProdutos(value).then((res) => setProdutos(res.data));
  }, [value]);
  const addIt = (produto :Produto) => {
    setItens([...itens,produto]);
    setItensCompra([...itensCompra, {idProduto : produto.id,quantidade: 1,valorUnitario:0}]);
    console.log(itensCompra)
    console.log(compra)
  };
  const removerItem = (idProduto : number) => {
    //Rascunho, ainda tem que melhorar
    var itensCompraAux = itensCompra
    var index = itensCompraAux.findIndex(x => x.idProduto == idProduto)
    itensCompraAux.slice(index)
    setItensCompra(itensCompraAux)
  }
  const atualizarItem = (id : number, quantidade? : number, valorUnitario? : number) =>{
    var itensCompraAux = itensCompra;
    var index = itensCompra.findIndex(x => x.idProduto == id)
    if(quantidade) itensCompraAux[index].quantidade = quantidade
    if(valorUnitario) itensCompraAux[index].valorUnitario =  valorUnitario
    setItensCompra(itensCompraAux)
  }
  return (
    <div>
      <Typography variant="h5">Nova compra</Typography>
     {/*Transformar esses dois ↓ em uma modal (?)*/}
      <TextField
      label="Buscar produtos"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      
      <ListaProdutos produtos={produtos} addItem={addIt} itens={itensCompra}/>
      {/* */}
        <Typography variant="h6">Lista de produtos:</Typography>
      <ListaItens itens={itens} itensCompra={itensCompra}/>
    </div>
  );
}
