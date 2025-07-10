import { Button, colors, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { red } from "@mui/material/colors";
import { ItemCompra } from "../../../services/compraService";
import { useState } from "react";

export default function ListaItens({itens, atualizarLista}:{itens : Produto[], atualizarLista : (id : number, quantidade? : number, valorUnitario? : number) =>void}){
    return <div>
        <List dense>
        {itens.map((item)=> <ListItem key={item.id}>
            <ListItemText primary={item.nome}/>
            <div>
            <TextField label="Preço unitário" onChange={(e) => {atualizarLista(item.id, undefined, parseFloat(e.target.value))}}/>
            <input type="number" min={1} onChange={(e) => {atualizarLista(item.id, parseInt(e.target.value))}}/>
            <Button variant="contained" color="error">-</Button>
            </div>
        </ListItem>)}
        </List>
        <Button variant="contained" >Finalizar</Button>
    </div>
}