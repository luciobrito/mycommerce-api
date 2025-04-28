package io.github.luciobrito.mycommerce.DTOs;

import jakarta.persistence.Column;

public record ProdutoDTO (String nome, String descricao, Double preco, @Column(name = "codigo_barra") String codigoBarra) { }
