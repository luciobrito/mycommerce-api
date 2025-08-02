import { BsTrash3Fill } from "react-icons/bs";
import { Venda } from "../../../services/vendaService";
import { Button, Divider, NumberInput, Text, Title } from "@mantine/core";
import "./venda.scss";
export default function ListaItens({
  venda,
  removerItem,
  setVenda,
}: {
  venda: Venda;
  removerItem: any;
  setVenda: any;
}) {
  const mudarQuantidade = (id: number | undefined, quantidade:any) => {
    var index = venda.itens.findIndex((i) => i.idProduto == id);
    setVenda({ ...venda }, (venda.itens[index].quantidade = quantidade));
  };
  var total = 0; 
  venda.itens.forEach(x=>{total += x.quantidade * x.valor_unitario})
  return (
    <div>
      <Title>Finalização</Title>
      <Title order={3}>Itens:</Title>
      <div className="lista">
        {venda.itens.map((item) => (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                
              }}
            >
              <div>
                <Text>
                  {item.produto.nome} × {item.quantidade}{" "}
                </Text>
                <Text>R$ {item.quantidade * item.produto.preco}</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  alignItems: "end",
                  gap: 5,
                }}
              >
                <NumberInput
                  label="Quantidade"
                  min={1}
                  clampBehavior={"strict"}
                  defaultValue={item.quantidade}
                  allowDecimal={false}
                  max={item.produto.quantidadeEstoque}
                  onChange={(valor) => {
                    mudarQuantidade(item.idProduto, valor == "" ? 1 : valor);
                  }}
                />
                <Button
                  bg={"red"}
                  onClick={() => {
                    removerItem(item.idProduto);
                  }}
                >
                  <BsTrash3Fill />
                </Button>
                
              </div>
                  
            </div>
            
          </>
        ))}
      </div>
        <Divider/>
      <Title order={3}>Total:</Title>
      <Text>R$ {total}</Text>
    </div>
  );
}
