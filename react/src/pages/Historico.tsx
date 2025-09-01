import { Pagination, Tabs, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultPageResponse, PageResponse } from "../types/PageResponse";
import Dados from "./historico/dados";
import { Compra, getCompra } from "../services/compraService";

export default function Historico(){
    const defaultPage = {content: []}
    const [venda, setVenda] = useState();
    const [compra, setCompra] = useState<PageResponse<Compra>>(defaultPageResponse);
    const [activePage, setPage] = useState({compra: 0, venda:0})
    useEffect(()=>{
        getCompra(activePage.compra).then((res)=>{setCompra(res.data); console.log(res.data)})
    }, [activePage])
    return <>
    <Title>Histórico</Title>
    <Tabs>
        <Tabs.List grow justify="center">
            <Tabs.Tab value="compra">
                Compra
            </Tabs.Tab>

                
            <Tabs.Tab value="venda">
                Venda
            </Tabs.Tab>
</Tabs.List>
    <Tabs.Panel value="venda">
      Venda aqui
    </Tabs.Panel>
        <Tabs.Panel value="compra">
        <Dados tipo="Compra" dados={compra}/>
        <Pagination total={compra.page.totalPages} value={compra.activePage} 
        onChange={(e)=>{setPage({...activePage, compra: e});console.log(compra)}}/>
    </Tabs.Panel>
    </Tabs>

    </>
}