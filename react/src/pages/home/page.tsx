import {  Button, Text, Title } from "@mantine/core"

export default function Home(){
    return <div>
        <Title style={{textAlign:"center"}}>Bem vindo(a) ao MyCommerce</Title>
        <Text>Projeto feito exclusivamente para portfólio.</Text>
        <Text>Algumas opções disponíveis:</Text>
        <Text>*O cadastro de novos produtos está na pagina de Nova Compra.</Text>
        <Button>Nova Venda</Button>
        <Button>Nova Compra</Button>
        <Button>Estatísticas</Button>
        <Button>Histórico</Button>
    </div>
}