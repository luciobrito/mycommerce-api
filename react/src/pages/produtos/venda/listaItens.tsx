import { Typography } from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { ItemVenda } from "../../../services/vendaService";

export default function ListaItens({produtosVenda}:{produtosVenda:ItemVenda[]}){
    
    var total : number = 0
    produtosVenda.map(x => total+=x.valorUnitario)
    return <div>
        <Typography variant="h5">Finalização</Typography>
        <Typography>Total: R$ {total.toPrecision(4)}</Typography>
    </div>
}