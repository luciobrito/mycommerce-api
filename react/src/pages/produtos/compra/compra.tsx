import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";
import { Compra } from "../../../services/compraService";

export default function CompraPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [value, setValue] = useState("");
  var compra : Compra = {desconto : 0, dataCompra : new Date().toISOString(), itens: [] }; 
  useEffect(() => {
    buscarProdutos(value).then((res) => setProdutos(res.data));
  }, [value]);
  return (
    <div>
      <Typography variant="h5">Nova compra</Typography>
      <Typography variant="h6">Lista de produtos:</Typography>
      <Typography variant="h6">Buscar Produtos</Typography>
      {compra.itens.push({quantidade: 0, idProduto: 1, valorUnitario: 2})}
      <TextField
        onChange={(e) => {
          setValue(e.target.value);
          console.log(compra);
        }}
      />
      {produtos.map((produto) => (
        <p key={produto.id}>
          {produto.nome} {produto.codigoBarra}
        </p>
      ))}
    </div>
  );
}
