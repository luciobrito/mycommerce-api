package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Models.ProdutoEstoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProdutoEstoqueRepo extends JpaRepository<ProdutoEstoque, Integer> {
    //@Query("SELECT pe FROM produto_estoque pe WHERE pe.produto = :produtoId")
    Optional<ProdutoEstoque> findByProdutoId(int produtoId);
    /*@Modifying
    @Query("UPDATE produto_estoque e SET e.quantidade = :quantidade WHERE e.produto = :produto")
    void updateEstoque(int quantidade, Produto produto);*/
}
