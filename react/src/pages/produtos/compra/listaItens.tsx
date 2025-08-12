import { FaTrash } from "react-icons/fa6";
import { ItemCompra } from "../../../services/compraService";
import { Button, Divider, NumberInput, Text, Title } from "@mantine/core";
import "./compra.scss"
export default function ListaItens({
  itens,
  removerItem
}: {
  itens: ItemCompra[];
  removerItem: any
}) {
  return (
    <div>
      <Title order={3}>Itens:</Title>
      <div className="lista">
        {itens.map((item) => (
            <div key={item.idProduto}>
              <div className="item-container">
                <div style={{display:"flex", alignItems:'baseline', gap:7}}>
              <Text fw={500} size="lg"  >{item.produto.nome}</Text>
              <Text>{item.produto.preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</Text>
              </div>
              <Text>Lucro estimado: (VU - P) * qnt</Text>
              <div className="valor-quantidade">
              <NumberInput size="md" min={0} clampBehavior="strict" max={item.produto.preco} label="Valor unitário" leftSection={"R$"}/>
              <NumberInput size="md" min={1} clampBehavior="strict" max={100} label="Quantidade" defaultValue={item.quantidade}/>
              <Button color="red"  className="btn-remover" onClick={()=>removerItem(item.idProduto)}><FaTrash/></Button>
              </div>
              </div>
              <Divider style={{marginTop:10}}/>
            </div>
          
        ))}</div>

    </div>
  );
}
