import { ItemCompra } from "../../../services/compraService";
import { Button, NumberInput, Text } from "@mantine/core";

export default function ListaItens({
  itens,
  finalizarCompra,
  removerItem
}: {
  itens: ItemCompra[];
  finalizarCompra: any;
  removerItem: any
}) {
  return (
    <div>
        {itens.map((item) => (
            <div>
              <Text>{item.produto.nome}</Text>
              <NumberInput label="Valor unitário"/>
              <NumberInput label="Quantidade" defaultValue={item.quantidade}/>
              <Button color="red" onClick={()=>removerItem(item.idProduto)}>-</Button>
            </div>
          
        ))}
      <Button
        variant="contained"
        onClick={() => {
          finalizarCompra();
        }}
      >
        Finalizar
      </Button>
    </div>
  );
}
