package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.Compra;
import jakarta.persistence.OrderBy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CompraRepo extends JpaRepository<Compra, Integer> {
    @OrderBy("id DESC")
    public Page<Compra> findAll(Pageable pageable);
}
