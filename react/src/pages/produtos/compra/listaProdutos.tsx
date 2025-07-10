import { Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { ItemCompra } from "../../../services/compraService";

export default function ListaProdutos(
  { produtos, addItem, itens }: { produtos: Produto[], addItem: any, itens: ItemCompra[] }) {

  return (
    <div>
      <List dense>
        {produtos.map((item) => {
          return (
            <ListItem key={item.id}>

              <ListItemText
                primary={item.nome}
                secondary={item.codigoBarra}
              />
              <Button variant="contained"
                disabled={itens.some(i => i.idProduto === item.id)}
                onClick={() => { addItem(item) }}>+</Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
