import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { Compra, ItemCompra } from "../../../services/compraService";
import ListaProdutos from "./listaProdutos";
import ListaItens from "./listaItens";

export default function CompraPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [value, setValue] = useState("");
  var compra : Compra = {desconto : 0, dataCompra : new Date().toISOString(), itens: []}; 
  const [itensCompra, setItensCompra] = useState<Produto[]>([]);
  const [itens, setItens] = useState<ItemCompra[]>([]);
  useEffect(() => {
    buscarProdutos(value).then((res) => setProdutos(res.data));
  }, [value]);
  const addIt = (produto :Produto) => {
    setItensCompra([...itensCompra,produto]);
    setItens([...itens, {idProduto : produto.id,quantidade: 1,valorUnitario:0}]);
    console.log(itensCompra)};
  return (
    <div>
      <Typography variant="h5">Nova compra</Typography>
      <Typography variant="h6">Lista de produtos:</Typography>
      <ListaItens itens={itensCompra}/>
      <Typography variant="h6">Buscar Produtos</Typography>
     {/*Transformar esses dois ↓ em uma modal */}
      <TextField
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      
      <ListaProdutos produtos={produtos} addItem={addIt}/>
      {/* */}
    </div>
  );
}
