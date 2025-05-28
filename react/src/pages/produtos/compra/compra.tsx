import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buscarProdutos, Produto } from "../../../services/produtoService";


export default function Compra(){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [value, setValue] = useState("");
    var listaProdutos = []
    useEffect(() => {buscarProdutos(value).then((res) => setProdutos(res.data))},[value]);
    return <div>
        <Typography variant="h5" >Nova compra</Typography>
        <Typography variant="h6">Lista de produtos:</Typography>
        <Typography variant="h6">Buscar Produtos</Typography>
        {listaProdutos.push({quantidade: 1,})}
        <TextField onChange={(e) => {setValue(e.target.value)}} />
        {produtos.map((produto) => <p key={produto.id}>{produto.nome} {produto.codigoBarra}</p>)}
    </div>
}