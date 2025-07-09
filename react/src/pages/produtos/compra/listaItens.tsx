import { Produto } from "../../../services/produtoService";

export default function ListaItens({itens}:{itens : Produto[]}){
    return <div>
        {itens.map((item)=> <div key={item.id}>
            {item.nome}
        </div>)}
    </div>
}