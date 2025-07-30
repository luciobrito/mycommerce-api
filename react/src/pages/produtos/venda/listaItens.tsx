import {
  List,
  ListItem,
} from "@mui/material";
import { Venda } from "../../../services/vendaService";
import { Button, NumberInput, Text, Title } from "@mantine/core";
export default function ListaItens({
  venda,
  removerItem,
  setVenda,
}: {
  venda: Venda;
  removerItem: any;
  setVenda: any;
}) {
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
            <Text>{item.produto.nome}</Text>
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
      </List>{/* 
      <div className="inputs">
      <Text>Total: R$ {total}</Text>
      <Text>Total com desconto: R$ {(total - venda.desconto) <= 0 ? 0 : (total - venda.desconto)}</Text>
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
      <NativeSelect label="Forma de pagamento" defaultValue={""}  data={formasPagamento}/>
      <input
        type="date"
        onChange={(e) => {
          setVenda({ ...venda, dataVenda: new Date(e.target.value).toJSON() });
        }}
      />
      <DatePickerInput
      label="Data da venda"
      defaultValue={"2025/07/28"}
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
      </div>*/}
    </div>
  );
}
