import { Button, TextInput, Title } from "@mantine/core";
import { ItemCompra } from "../../../services/compraService";
import {  DatePickerInput } from "@mantine/dates";
import {  dataFutura, getCurrentDate } from "../../../services/dateFormat";
import { currencyMask } from "../../../services/maskService";

export default function FinalizarCompra({itens, finalizarCompra, updateCompra}:{itens : ItemCompra[], finalizarCompra : any, updateCompra : any}){
  const date = getCurrentDate(new Date());
    return <>
    
        <TextInput
          label="Desconto"
          leftSection={"R$"}
          defaultValue={"0,00"}
          placeholder="12,99"
          inputMode="numeric"
          onChange={(e) => {
            e.target.value = currencyMask(e.target.value)
            updateCompra({desconto: parseFloat(e.target.value.replace(',','.')) })
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
            excludeDate={(date)=> dataFutura(date) }
            onChange={(e) => {updateCompra({dataCompra: e})}}
            /*onChange={(e) => {updateVenda((venda.dataVenda = new Date(e ?? date).toISOString()))}}*/
          />
        
          <Button
        
        variant="contained"
        onClick={() => {
          finalizarCompra();
        }}
        disabled={itens.length == 0}
      >
        Finalizar
      </Button>
    </>
}