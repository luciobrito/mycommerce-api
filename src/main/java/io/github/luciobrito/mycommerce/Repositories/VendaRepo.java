package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepo extends JpaRepository<Venda, Integer> {
}
