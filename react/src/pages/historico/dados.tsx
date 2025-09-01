import { Accordion, List, Text } from "@mantine/core";
import { PageResponse } from "../../types/PageResponse";
import { Compra } from "../../services/compraService";
import { getCurrentDate } from "../../services/dateFormat";

export default function Dados({tipo, dados}: {tipo: "Venda" |"Compra", dados:PageResponse<Compra>}){
    const itens = dados.content.map((item, index:number) =>(
        <Accordion.Item key={item.id} value={index.toString()}>
            <Accordion.Control>#{item.id}</Accordion.Control>
            <Accordion.Panel>
                <Text>Data: {getCurrentDate(new Date(item.dataCompra))}</Text>
                <Text>Itens:</Text>
                {item.itens.map(i =>(
                    <List>
                        <List.Item>
                            {i.quantidade}x {i.produto.nome} 
                        </List.Item>
                    </List>
                ))}
            </Accordion.Panel>
        </Accordion.Item>
    ))
    return <>
       
            <Accordion variant="separated">
                {itens}
            </Accordion>
       
    </>
}