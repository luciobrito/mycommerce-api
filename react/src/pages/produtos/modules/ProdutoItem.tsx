import { Button, Divider, Text, Title, Tooltip } from "@mantine/core";
import { Produto } from "../../../services/produtoService";
import { ItemVenda } from "../../../services/vendaService";
import "./produtoItem.scss";
import { ItemCompra } from "../../../services/compraService";
export default function ProdutoItem({
  produto,
  adicionar,
  itens,
  parent,
}: {
  produto: Produto;
  adicionar: any;
  itens: ItemCompra[] | ItemVenda[];
  parent: "venda" | "compra";
}) {
  const adicionarObj =
    parent == "venda"
      ? {
          idProduto: produto.id,
          quantidade: 1,
          valor_unitario: produto.preco,
          produto: produto,
        }
      : {
          quantidade: 1,
          idProduto: produto.id,
          valorUnitario: 0,
          produto: produto,
        };
  const qnt = produto.quantidadeEstoque;
  return (
    <>
      <div className="container-produto">
        <div>
          <div className="produto-header">
            <Text>{produto.codigoBarra}</Text>
            <Tooltip label={produto.descricao}>
              <Title
                size={"lg"}
                order={3}
                style={{ color: "rgba(34, 34, 34, 1)" }}
                m={0}
                p={0}
              >
                {produto.nome}
              </Title>
            </Tooltip>
          </div>
          <Text style={{ color: qnt == 0 ? "red" : "black" }}>
            {qnt == 0
              ? "Sem estoque"
              : qnt == 1
              ? "1 disponível"
              : `${qnt} disponíveis`}
          </Text>
        </div>
        <div className="produto-botao-preco">
          <Text>R${produto.preco.toFixed(2)}</Text>
          <Button
            disabled={
              (produto.quantidadeEstoque == 0 && parent == "venda") ||
              itens.some((i) => i.idProduto === produto.id)
            }
            onClick={() =>
              adicionar(adicionarObj)
            }
          >
            +
          </Button>
        </div>
      </div>
      <Divider style={{ marginTop: 10 }} />
    </>
  );
}
