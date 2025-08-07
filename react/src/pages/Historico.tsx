import { Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { PageResponse } from "../types/PageResponse";
import { getVenda, Venda } from "../services/vendaService";

export default function Historico(){
    const [data, setData] = useState<PageResponse<Venda[]>>();
    useEffect(()=>{getVenda(0).then((response)=>{setData(response.data)})},[])
    return <>
    <Title>Histórico</Title>
    </>
}