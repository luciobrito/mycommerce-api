import { Accordion, List, Text } from "@mantine/core";
import { PageResponse } from "../../types/PageResponse";
import { Compra, getTotal as totalCompra  } from "../../services/compraService";
import { brDate} from "../../services/dateFormat";
import { toBrazilianReal } from "../../services/maskService";
import {  getTotal as totalVenda, Venda} from "../../services/vendaService";

export default function Dados({tipo, dados}: {tipo: "Venda" |"Compra", dados:PageResponse<Compra> | PageResponse<Venda>}){
    
    var total = tipo == "Venda" ? (i : any[])=>totalVenda(i) : (i: any[])=> totalCompra(i) ;
    
    const itens = dados.content.map((item, index:number) =>{
        return (
            <Accordion.Item key={item.id} value={index.toString()}>
                <Accordion.Control>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                            Nº{item.id}</div>
                        <div> </div></div></Accordion.Control>

                <Accordion.Panel>
                    <Text>Data: {brDate(new Date(item.created_at ?? ""))}</Text>
                    <Text>Deconto: {toBrazilianReal(item.desconto)}</Text>
                    {'formaPagamento' in item && <Text>Forma de pagamento: {item.formaPagamento}</Text>}
                    <Text>Itens:</Text>
                    {item.itens.map(i => (
                        <List key={i.idProduto}>

                            <div style={{ display: "flex", alignItems: "baseline", width: "100%", marginTop: 7, marginBottom: 7, marginLeft:5, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>
                                    {i.quantidade}x {i.produto.nome}
                                </Text>
                                <div style={{ border: "dotted", borderWidth: "0 0 3px 0", flexGrow: 1 }}></div>
                                <div>
                                    {toBrazilianReal(i.produto.preco * i.quantidade)}
                                </div>
                            </div>


                        </List>
                    ))}
                    <Text>Total: {toBrazilianReal(total(item.itens))}</Text>
                    <Text>Total c/ desconto: {toBrazilianReal(total(item.itens) - item.desconto)}</Text>

                </Accordion.Panel>
            </Accordion.Item>
        );
    })
    return <>
       
            <Accordion variant="separated">
                {itens}
            </Accordion>
       
    </>
}