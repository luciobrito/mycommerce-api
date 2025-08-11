import { Produto } from "../../../services/produtoService";
import { ItemCompra } from "../../../services/compraService";
import ProdutoItem from "../modules/ProdutoItem";

export default function ListaProdutos(
  { produtos, addItem, itens }: { produtos: Produto[], addItem: any, itens: ItemCompra[] }) {

  return (
    <div className="lista">
        {produtos.map((item) => {
          return (
            <div key={item.id}>
            <ProdutoItem adicionar={addItem} itens={itens} parent="compra" produto={item}/>
            </div>
          );
        })}
          </div>
  );
}
