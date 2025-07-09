import { Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Produto } from "../../../services/produtoService";

export default function ListaProdutos(
  { produtos, addItem }: { produtos: Produto[], addItem: any }) {
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
                <Button variant="contained" onClick={()=>addItem(item)}>Add</Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
