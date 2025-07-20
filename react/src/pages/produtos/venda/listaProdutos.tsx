import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { ItemVenda, Venda } from "../../../services/vendaService";

export default function ListaProdutos({
  produtos,
  adicionar,
  venda
}: {
  produtos: Produto[];
  adicionar: (i: ItemVenda) => void;
  venda : Venda
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
              <ListItemText secondary={produto.quantidadeEstoque}/>
              <Button
              /*Se a quantidade do produto estiver zerada ou se já estiver incluído na lista*/
                disabled={produto.quantidadeEstoque == 0 || venda.itens.some(i => i.idProduto === produto.id)}
                onClick={() =>
                  adicionar({
                    idProduto: produto.id,
                    quantidade: 1,
                    valor_unitario: produto.preco,
                    produto: produto
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
