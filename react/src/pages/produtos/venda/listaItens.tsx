import {
  Button,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Produto } from "../../../services/produtoService";
import { ItemVenda, Venda } from "../../../services/vendaService";

export default function ListaItens({
  venda,
  finalizarVenda,
  loading,
  removerItem,
  setVenda,
}: {
  venda: Venda;
  finalizarVenda: any;
  loading: any;
  removerItem: any;
  setVenda: any;
}) {
  var total: number = 0;
  const formasPagamento = ["Pix", "Credito", "Debito", "Dinheiro"];
  venda.itens.map((x) => (total += (x.valor_unitario * x.quantidade)));
  const mudarQuantidade = (id : number | undefined, quantidade : number) =>{
    var index = venda.itens.findIndex(i => i.idProduto == id)    
    setVenda({...venda}, venda.itens[index].quantidade = quantidade)
  }
  return (
    <div>
      <Typography variant="h5">Finalização</Typography>
      <List dense>
        {venda.itens.map((item) => (
          <ListItem key={item.idProduto}>
            <ListItemText primary={item.produto.nome} />
            <input
              type="number"
              min={1}
              max={item.produto.quantidadeEstoque}
              onChange={(e) => {mudarQuantidade(item.idProduto, parseInt(e.target.value))}}
            />
            <Button
              color="error"
              onClick={() => {
                removerItem(item.idProduto);
              }}
            >
              -
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography>Total: R$ {total.toPrecision(4)}</Typography>
      <TextField
        select
        label="Forma de pagamento"
        defaultValue={""}
        onChange={(e) => {
          setVenda({ ...venda, formaPagamento: e.target.value });
        }}
      >
        {formasPagamento.map((fp) => (
          <MenuItem value={fp}>{fp}</MenuItem>
        ))}
      </TextField>
      <input
        type="date"
        onChange={(e) => {
          setVenda({ ...venda, dataVenda: new Date(e.target.value).toJSON() });
        }}
      />
      <TextField
        label="Desconto"
        onChange={(e) => {
          setVenda({ ...venda, desconto: parseFloat(e.target.value) });
        }}
      />
      <Button
        onClick={() => {
          finalizarVenda();
        }}
        disabled={loading}
      >
        {loading ? "Carregando..." : "Finalizar venda"}
      </Button>
    </div>
  );
}
