package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.ProdutoVenda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoVendaRepo extends JpaRepository<ProdutoVenda,Integer> {
}
