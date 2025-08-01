import { Button, NativeSelect, NumberInput, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { postVenda, Venda } from "../../../services/vendaService";
import "./finalizarForm.scss";
export default function FinalizarForm({
  venda,
  setVenda,
}: {
  venda: Venda;
  setVenda: any;
}) {
  const [loading, setLoading] = useState(false);
  const d = new Date();
  const date = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  const formasPagamento = ["Pix", "Credito", "Debito", "Dinheiro Fisico"];
  const finalizarVenda = () => {
    setLoading(true);
    postVenda(venda, setLoading);
  };
  return (
    <>
      <Text>Total</Text>
      <div id="form-container">
        <div id="pag-data">
          <NativeSelect
            label="Forma de pagamento:"
            className="form-item"
            data={formasPagamento}
            onChange={(e) => {
              setVenda((x: Venda) => ({
                ...x,
                ...{ formaPagamento: e.target.value },
              }));
              console.log(venda);
            }}
          />
          <DatePickerInput
            label="Data da venda"
            className="form-item"
            valueFormat="DD/MM/YYYY"
            defaultValue={date}
            onChange={(e) => {
              setVenda(
                { ...venda },
                (venda.dataVenda = new Date(e ?? date).toISOString())
              );
            }}
          />
        </div>
        <NumberInput
          defaultValue={0}
          label="Desconto"
          prefix="R$"
          className="form-item"
          onChange={(e) => {
            setVenda({ ...venda }, (venda.desconto = parseFloat(e.toString())));
          }}
        />
      </div>
      <Button
        id="btn-form"
        loading={loading}
        onClick={() => {
          finalizarVenda();
        }}
        disabled={venda.itens.length == 0}
      >
        Finalizar venda
      </Button>
    </>
  );
}
