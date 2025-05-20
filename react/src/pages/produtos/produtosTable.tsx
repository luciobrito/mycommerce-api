import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Produto } from "../../services/produtoService";

export default function ProdutosTable({
  produtosData,
}: {
  produtosData: Produto[];
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço (R$)</TableCell>
            <TableCell>Estoque</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtosData.map((produto) => (
            <TableRow
              hover
              role="checkbox"
              key={produto.id}
              title={produto.descricao}
            >
              <TableCell onClick={() => alert(produto.descricao)}>
                {produto.nome} - {produto.codigoBarra}
              </TableCell>
              <TableCell>{produto.preco}</TableCell>
              <TableCell>{produto.quantidadeEstoque}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
