import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { ItemVenda } from "../../../services/vendaService";

export default function ListaProdutos({
  produtos,
  adicionar,
}: {
  produtos: Produto[];
  adicionar: (i: ItemVenda) => void;
}) {
  return (
    <div>
      <List dense>
        {produtos.map((produto) => {
          return (
            <ListItem key={produto.id}>
              <ListItemText
                primary={produto.nome}
                secondary={produto.codigoBarra}
              />
              <ListItemText secondary={produto.quantidadeEstoque} />
              <Button
                onClick={() =>
                  adicionar({
                    idProduto: produto.id,
                    quantidade: 0,
                    valorUnitario: produto.preco,
                  })
                }
              >
                +
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
