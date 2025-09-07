import { Button, NativeSelect, TextInput } from "@mantine/core";

import { useState } from "react";
import {  getTotal, postVenda, Venda } from "../../../services/vendaService";
import "./finalizarForm.scss";
import SuccessNotification from "../modules/SuccessNotification";
import { currencyMask } from "../../../services/maskService";
export default function FinalizarForm({
  venda,
  setVenda,
}: {
  venda: Venda;
  setVenda: any;
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  //const date = getCurrentDate(new Date());
  const formasPagamento = ["Pix", "Credito", "Debito", "Dinheiro Fisico"];
  const total = getTotal(venda.itens)
  const finalizarVenda = () => {
    setLoading(true);
    postVenda(venda)
      .then(()=>{
        setSuccess(true); 
        updateVenda({itens:[]})})
      .catch(()=>{})
      .finally(()=>{setLoading(false)});
    setTimeout(()=>{setSuccess(false)},10000)
  };
  const updateVenda = (obj: Partial<Venda>) => {
    setVenda({...venda, ...obj})
    console.debug(venda)
  }
  return (
    <>
    {/*Mudar valor da venda para o backend */}
    <SuccessNotification message="Venda finalizada com sucesso!" opened={success} />
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
              console.debug(venda);
            }}
          />{/* 
          <DatePickerInput
            label="Data da venda"
            className="form-item"
            valueFormat="DD/MM/YYYY"
            defaultValue={venda.dataVenda}
            onChange={(e) => {updateVenda({dataVenda: new Date(e ?? date).toISOString()})}}
          />*/}
        </div>
        <TextInput
          defaultValue={0}
          min={0}
          max={total}
                  leftSection={"R$"}
          label="Desconto"
          className="form-item"
          onChange={(e) => {
            e.target.value = currencyMask(e.target.value)
            updateVenda({desconto: e.target.value == "" ? 0 : parseFloat(e.target.value.replace(',','.'))})}}
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
