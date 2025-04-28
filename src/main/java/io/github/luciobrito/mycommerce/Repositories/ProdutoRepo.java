package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.DTOs.ProdutoResponseDTO;
import io.github.luciobrito.mycommerce.Models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepo extends JpaRepository<Produto, Integer> {
}
