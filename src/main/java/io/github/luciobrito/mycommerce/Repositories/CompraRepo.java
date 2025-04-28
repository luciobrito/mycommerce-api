package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.Compra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraRepo extends JpaRepository<Compra, Integer> {
}
