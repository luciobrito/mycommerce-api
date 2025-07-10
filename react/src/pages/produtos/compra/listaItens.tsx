import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Produto } from "../../../services/produtoService";

export default function ListaItens({
  itens,
  atualizarLista,
  finalizarCompra,
}: {
  itens: Produto[];
  atualizarLista: (
    id: number,
    quantidade?: number,
    valorUnitario?: number
  ) => void;
  finalizarCompra: () => void;
}) {
  return (
    <div>
      <List dense>
        {itens.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.nome} />
            <div>
              <TextField
                label="Preço unitário"
                onChange={(e) => {
                  atualizarLista(
                    item.id,
                    undefined,
                    parseFloat(e.target.value)
                  );
                }}
              />
              <input
                type="number"
                min={1}
                onChange={(e) => {
                  atualizarLista(item.id, parseInt(e.target.value));
                }}
              />
              <Button variant="contained" color="error">
                -
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() => {
          finalizarCompra();
        }}
      >
        Finalizar
      </Button>
    </div>
  );
}
