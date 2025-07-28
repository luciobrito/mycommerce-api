import { Button, Text, Title, Tooltip, Typography } from "@mantine/core";
import { Produto } from "../../../services/produtoService";
import { Venda } from "../../../services/vendaService";

export default function ProdutoItem({produto, adicionar, venda} : {produto: Produto, adicionar : any, venda : Venda}) {
    const qnt = produto.quantidadeEstoque;
    return (
    <>    
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Tooltip label={produto.descricao}>
          <Title order={3} style={{ color: "rgba(34, 34, 34, 1)" }} m={0} p={0}>
            {produto.nome}
          </Title>
        </Tooltip>
        <Text>{produto.codigoBarra}</Text>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Text style={{color: qnt == 0 ? "red" : "black"}} >{qnt == 0 ? "Sem estoque" : qnt == 1 ? "1 disponível" : `${qnt} disponíveis`}</Text>
          <Text>R$ {produto.preco}</Text>
        </div>
        <Button  disabled={produto.quantidadeEstoque == 0 || venda.itens.some(i => i.idProduto === produto.id)}
                onClick={() =>
                  adicionar({
                    idProduto: produto.id,
                    quantidade: 1,
                    valor_unitario: produto.preco,
                    produto: produto
                  })}>+</Button>
      </div>
    </>
  );
}
