import { Button, TextInput } from "@mantine/core";
import {
  defaultCompra,
  ItemCompra,
  postCompra,
} from "../../../services/compraService";
import { DatePickerInput } from "@mantine/dates";
import { dataFutura, getCurrentDate } from "../../../services/dateFormat";
import { currencyMask } from "../../../services/maskService";
import { useState } from "react";
import SuccessNotification from "../modules/SuccessNotification";

export default function FinalizarCompra({
  itens,
  finalizarCompra,
  updateCompra,
}: {
  itens: ItemCompra[];
  finalizarCompra: any;
  updateCompra: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const date = getCurrentDate(new Date());
  const finalizar = () => {
    setLoading(true);
    postCompra(JSON.parse(localStorage.getItem("compra") ?? "{}"))
      .then((res) => {
        console.log(res);
        localStorage.removeItem("compra");
        updateCompra(defaultCompra);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SuccessNotification />
      <TextInput
        label="Desconto"
        leftSection={"R$"}
        defaultValue={"0,00"}
        placeholder="12,99"
        inputMode="numeric"
        onChange={(e) => {
          e.target.value = currencyMask(e.target.value);
          updateCompra({
            desconto: parseFloat(e.target.value.replace(",", ".")),
          });
        }}

        /*error={error.preco}*/
      />
      <DatePickerInput
        label="Data da venda"
        className="form-item"
        valueFormat="DD/MM/YYYY"
        defaultValue={date}
        dropdownType="modal"
        size="sm"
        excludeDate={(date) => dataFutura(date)}
        onChange={(e) => {
          updateCompra({ dataCompra: new Date(e ?? date).toISOString() });
        }}
        /*onChange={(e) => {updateVenda((venda.dataVenda = new Date(e ?? date).toISOString()))}}*/
      />
      <Button
        variant="contained"
        onClick={() => {
          finalizar();
        }}
        loading={loading}
        disabled={itens.length == 0}
      >
        Finalizar
      </Button>
    </>
  );
}
