import { Button, NativeSelect, NumberInput, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { postVenda, Venda } from "../../../services/vendaService";

export default function FinalizarForm({venda, setVenda}:{venda :Venda, setVenda:any}){
    const [loading, setLoading] = useState(false)
    const d = new Date();
    const date = `${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`;
    const formasPagamento = ["Pix","Credito","Debito","Dinheiro Fisico"]
    const finalizarVenda = () => {
        
        postVenda(venda, setLoading)
    }
    return <>
        
        <NativeSelect label="Forma de pagamento:" data={formasPagamento}/>
        <DatePickerInput label="Data da venda" valueFormat="DD/MM/YYYY" defaultValue={date}/>
        <NumberInput />
        <Text>Total</Text>
        <Button onClick={()=>{finalizarVenda()}} disabled={venda.itens.length == 0}>Finalizar venda</Button>
    </>
}