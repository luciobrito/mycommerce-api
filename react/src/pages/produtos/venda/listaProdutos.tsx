import { ItemCompra } from "../../../services/compraService";
import { Produto } from "../../../services/produtoService";
import { ItemVenda } from "../../../services/vendaService";
import ProdutoItem from "../modules/ProdutoItem";

export default function ListaProdutos({
  produtos,
  adicionar,
  itens
}: {
  produtos: Produto[];
  adicionar: (i: ItemVenda) => void;
  itens : ItemVenda[] | ItemCompra[]
}) {
  return (
    <div className="lista">

        {produtos.map((produto) => {
          return (<div key={produto.id}>
            <ProdutoItem parent="venda" produto={produto} adicionar={adicionar} itens={itens}/>
            </div>
          );
        })}
      
    </div>
  );
}
