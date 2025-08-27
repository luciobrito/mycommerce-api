import { FaTrash } from "react-icons/fa6";
import { ItemCompra, postCompra } from "../../../services/compraService";
import {
  Button,
  Divider,
  NumberInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import "./compra.scss";
import { currencyMask, toBrazilianReal } from "../../../services/maskService";
export default function ListaItens({
  itens,
  removerItem,
  updateItem,
}: {
  itens: ItemCompra[];
  removerItem: any;
  updateItem: any;
}) {
  return (
    <div>
      <Title order={3}>Itens:</Title>
      <div className="lista">
        {itens.map((item) => (
          <div key={item.idProduto}>
            <div className="item-container">
              <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                <Text fw={500} size="lg">
                  {item.produto.nome}
                </Text>
                <Text>{toBrazilianReal(item.produto.preco)}</Text>
              </div>
              <Text>
                Lucro estimado:{" "}
                {toBrazilianReal(
                  (item.produto.preco - item.valorUnitario) * item.quantidade
                )}
              </Text>
              <div className="valor-quantidade">
                <TextInput
                  size="md"
                  defaultValue={item.valorUnitario}
                  inputMode="numeric"
                  onChange={(e) => {
                    e.target.value = currencyMask(e.target.value);
                    if (
                      parseFloat(e.target.value.replace(",", ".")) >
                      item.produto.preco
                    ) e.target.value = item.produto.preco.toString()
                      
                    updateItem(
                      {
                        valorUnitario: parseFloat(
                          e.target.value.replace(",", ".")
                        ),
                      },
                      item.idProduto
                    );
                  }}
                  label="Valor unitário"
                  leftSection={"R$"}
                />
                <NumberInput
                  size="md"
                  onChange={(e) => {
                    updateItem({ quantidade: e }, item.idProduto);
                  }}
                  min={1}
                  clampBehavior="strict"
                  max={100}
                  label="Quantidade"
                  defaultValue={item.quantidade}
                />
                <Button
                  color="red"
                  className="btn-remover"
                  onClick={() => removerItem(item.idProduto)}
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
            <Divider style={{ marginTop: 10 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
