package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepo extends JpaRepository<Produto, Integer> {
    @Query(value = "SELECT produtos.*, produto_estoque.quantidade FROM produtos \n" +
            "INNER JOIN produto_estoque \n" +
            "ON produtos.id = produto_estoque.id_produto", nativeQuery = true)
    public List<Produto> getProdutoQuantidade();
}
