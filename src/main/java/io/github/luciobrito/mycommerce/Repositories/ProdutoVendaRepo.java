package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.DTOs.MaisVendidosMesDTO;
import io.github.luciobrito.mycommerce.DTOs.SomaVendasDiaDTO;
import io.github.luciobrito.mycommerce.Models.ProdutoVenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProdutoVendaRepo extends JpaRepository<ProdutoVenda,Integer> {
    @Query(value = "SELECT SUM(pv.valor_unitario * pv.quantidade) AS total, " +
            "DAY(v.data_venda) AS dia, " + "MONTH(v.data_venda) AS mes, " +
            "YEAR(v.data_venda) AS ano " + "FROM produto_venda pv " +
            "INNER JOIN  vendas v ON v.id = pv.id_venda " +
            "GROUP BY dia, mes, ano ORDER BY ano; ", nativeQuery = true)
    List<SomaVendasDiaDTO> somaVendasDiarias();
    @Query(value = """
            SELECT SUM(pv.quantidade) AS qntVendida,
            (SUM(pv.quantidade) * p.preco) AS total,
            p.nome, p.codigo_barra, p.preco, p.id\s
            FROM produto_venda pv
            JOIN produtos p on p.id = pv.id_produto
            JOIN vendas v on v.id = pv.id_venda
            WHERE MONTH(v.data_venda) = :mes AND YEAR(v.data_venda) = :ano
            GROUP BY p.codigo_barra
            ORDER BY qntVendida DESC""", nativeQuery = true)
    List<MaisVendidosMesDTO> MaisVendidosMes(@Param("mes") int mes, @Param("ano") int ano);
}
