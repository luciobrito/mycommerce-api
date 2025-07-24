package io.github.luciobrito.mycommerce.DTOs;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ProdutoDTO (@NotBlank(message = "Nome não pode estar vazio") @NotNull(message = "Nome não pode ser nulo") String nome, String descricao, @Min(value = 0, message = "Valor não pode ser menor que 0") Double preco, @Column(name = "codigo_barra") @Size(min = 3, max = 13)  String codigoBarra) { }
