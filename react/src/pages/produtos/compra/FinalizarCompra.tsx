import { Button, NumberInput, Title } from "@mantine/core";
import { ItemCompra } from "../../../services/compraService";
import { DatePickerInput } from "@mantine/dates";
import { getCurrentDate } from "../../../services/dateFormat";

export default function FinalizarCompra({itens, finalizarCompra}:{itens : ItemCompra[], finalizarCompra : any}){
  const date = getCurrentDate(new Date());
    return <>
    <Title order={3}>Total:</Title>
           <NumberInput
          defaultValue={0}
          min={0}
          clampBehavior={"strict"}
          max={10 /*total */}
          label="Desconto"
          prefix="R$"
          className="form-item"
          //onChange={(e) => {updateVenda((venda.desconto = e == "" ? 0 : parseFloat(e.toString())))}}
        />
              <DatePickerInput
            label="Data da venda"
            className="form-item"
            valueFormat="DD/MM/YYYY"
            defaultValue={date}
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