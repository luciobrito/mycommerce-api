package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.ProdutoEstoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoEstoqueRepo extends JpaRepository<ProdutoEstoque, Integer> {
}
