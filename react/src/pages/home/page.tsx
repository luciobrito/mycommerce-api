import {  Button, Text, Title } from "@mantine/core"
import { routerConst } from "../../Router"

export default function Home(){
    return <div>
        <Title style={{textAlign:"center"}}>Bem vindo(a) ao MyCommerce</Title>
        <Text>Projeto feito exclusivamente para portfólio.</Text>
        <Text>Algumas opções disponíveis:</Text>
        <Text>*O cadastro de novos produtos está na pagina de Nova Compra.</Text>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem"}}>
        <Button onClick={()=>{routerConst.navigate("/venda")}}>Nova Venda</Button>
        <Button onClick={()=>{routerConst.navigate("/compra")}}>Nova Compra</Button>
        <Button onClick={()=>{routerConst.navigate("/estatisticas")}}>Estatísticas</Button>
        <Button onClick={()=>{routerConst.navigate("/historico")}}>Histórico</Button>
        </div>
    </div>
}