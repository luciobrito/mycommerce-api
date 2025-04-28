package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.ProdutoCompra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoCompraRepo extends JpaRepository<ProdutoCompra, Integer> {
}
