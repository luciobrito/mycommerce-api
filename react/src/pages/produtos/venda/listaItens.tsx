import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Venda } from "../../../services/vendaService";
import { Button, NumberInput, Title } from "@mantine/core";
import { DatePickerInput } from '@mantine/dates';
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
  var total: number = 0 ;
  const formasPagamento = ["Pix", "Credito", "Debito", "Dinheiro"];
  
  venda.itens.map((x) => (total += (x.valor_unitario * x.quantidade)));
  const mudarQuantidade = (id : number | undefined, quantidade : number) =>{
    var index = venda.itens.findIndex(i => i.idProduto == id)    
    setVenda({...venda}, venda.itens[index].quantidade = quantidade)
  }
  return (
    <div className="lista-itens-venda">
      <Title>Finalização</Title>
      <List dense>
        {venda.itens.map((item) => (
          <ListItem key={item.idProduto}>
            <ListItemText primary={item.produto.nome} />
            <NumberInput label="Quantidade" min={1} defaultValue={1} allowDecimal={false} max={item.produto.quantidadeEstoque} onChange={(e) => {mudarQuantidade(item.idProduto, parseInt(e.valueOf.toString()))}}/>
            <Button
              bg={"red"}
              onClick={() => {
                removerItem(item.idProduto);
              }}
            >
              -
            </Button>
          </ListItem>
        ))}
      </List>
      <div className="inputs">
      <Typography>Total: R$ {total}</Typography>
      <Typography>Total com desconto: R$ {(total - venda.desconto) <= 0 ? 0 : (total - venda.desconto)}</Typography>
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
      <DatePickerInput
        valueFormat="D/MM/YYYY"
      />
      <TextField
        label="Desconto"
        onChange={(e) => {
          setVenda({ ...venda, desconto: parseFloat(e.target.value ) });
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
    </div>
  );
}
