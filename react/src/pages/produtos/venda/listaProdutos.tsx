import { Produto } from "../../../services/produtoService";
import { ItemVenda, Venda } from "../../../services/vendaService";
import ProdutoItem from "../modules/ProdutoItem";

export default function ListaProdutos({
  produtos,
  adicionar,
  venda
}: {
  produtos: Produto[];
  adicionar: (i: ItemVenda) => void;
  venda : Venda
}) {
  return (
    <div className="lista">

        {produtos.map((produto) => {
          return (<div key={produto.id}>
            <ProdutoItem produto={produto} adicionar={adicionar} venda={venda}/>
            </div>
          );
        })}
      
    </div>
  );
}
