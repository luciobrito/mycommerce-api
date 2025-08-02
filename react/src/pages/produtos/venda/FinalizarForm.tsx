import { Button, NativeSelect, Notification, NumberInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { getTotal, postVenda, Venda } from "../../../services/vendaService";
import "./finalizarForm.scss";
import {  BsCheckLg } from "react-icons/bs";
export default function FinalizarForm({
  venda,
  setVenda,
}: {
  venda: Venda;
  setVenda: any;
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const d = new Date();
  const date = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  const formasPagamento = ["Pix", "Credito", "Debito", "Dinheiro Fisico"];
  const total = getTotal(venda)
  const finalizarVenda = () => {
    setLoading(true);
    postVenda(venda, setLoading, setSuccess, clearVenda);
    setTimeout(()=>{setSuccess(false)},10000)
  };
  const clearVenda = () => {setVenda((x : Venda)=>({...x,...{itens:[]}}))}
  const updateVenda = (obj:any) => {
    setVenda({...venda},obj)
  }
  return (
    <>
    {/*Mudar valor da venda para o backend */}
    {success && <Notification icon={<BsCheckLg/>} title="Venda registrada com sucesso!" color="teal">No valor de R$ {total}</Notification>}
    
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
            onChange={(e) => {updateVenda((venda.dataVenda = new Date(e ?? date).toISOString()))}}
          />
        </div>
        <NumberInput
          defaultValue={0}
          min={0}
          clampBehavior={"strict"}
          max={total}
          label="Desconto"
          prefix="R$"
          className="form-item"
          onChange={(e) => {updateVenda((venda.desconto = e == "" ? 0 : parseFloat(e.toString())))}}
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
