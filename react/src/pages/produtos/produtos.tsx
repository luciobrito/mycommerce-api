import { useEffect, useState } from "react"
import { getProdutos, Produto } from "../../services/produtoService";
import ProdutosTable from "./produtosTable";
import { Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Produtos(){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {getProdutos().then((response) => {setProdutos(response.data)})}, [])
    return <div>
       <Typography variant="h5" sx={{margin: 1}} >
            Produtos:
       </Typography>
       <Divider></Divider> <Link to={'/cadastro'}>
       <Button variant="contained" title="Cadastrar um novo produto">Cadastrar</Button></Link>
       <ProdutosTable produtosData={produtos} />
    </div>
}