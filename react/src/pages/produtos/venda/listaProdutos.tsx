import { Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
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
    <div className="lista">
      <List dense>
        {produtos.map((produto) => {
          return (<div>
            <ListItem key={produto.id} className="item">
              <ListItemText
                className="lista-item"
                primary={`${produto.nome} `}
                secondary={`Em estoque: ${produto.quantidadeEstoque} Cod: ${produto.codigoBarra} R$${produto.preco}`}
                title={`${produto.nome} - ${produto.codigoBarra}`}
                color="error"
              />
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
            <Divider/>
            </div>
          );
        })}
      </List>
    </div>
  );
}
