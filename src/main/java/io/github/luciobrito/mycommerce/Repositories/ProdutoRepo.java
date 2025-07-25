package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.Produto;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ProdutoRepo extends JpaRepository<Produto, Integer> {
    @Query("SELECT p FROM produtos p WHERE p.nome LIKE %:value% OR p.codigoBarra LIKE %:value%")
    List<Produto> buscarProduto(Pageable pageable, String value);
    Produto findByCodigoBarra(String codigoBarra);
}
