import { Button, colors, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { red } from "@mui/material/colors";
import { ItemCompra } from "../../../services/compraService";
import { useState } from "react";

export default function ListaItens({itens, itensCompra}:{itens : Produto[], itensCompra : ItemCompra[]}){
    const [listaItensCompra, setListaItensCompra] = useState<ItemCompra[]>(itensCompra);
    var a : number = listaItensCompra.findIndex(x => x.idProduto == 1);
    listaItensCompra
    return <div>
        <List dense>
        {itens.map((item)=> <ListItem key={item.id}>
            <ListItemText primary={item.nome}/>
            <div>
            <TextField label="Preço unitário"/>
            <input type="number" min={1} onChange={(e) => {console.log(e.target.value)}}/>
            <Button variant="contained" color="error">-</Button>
            </div>
        </ListItem>)}
        </List>
        <Button variant="contained" >Finalizar</Button>
    </div>
}