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
   
        {venda.itens.map((item) => (
         <>
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
        </>
        ))}
    </div>
  );
}
