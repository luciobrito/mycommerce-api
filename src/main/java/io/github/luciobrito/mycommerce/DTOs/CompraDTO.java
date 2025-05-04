package io.github.luciobrito.mycommerce.DTOs;

import io.github.luciobrito.mycommerce.Models.ProdutoCompra;

import java.time.LocalDateTime;
import java.util.Set;

public record CompraDTO (Set<ProdutoCompraDTO> itens, LocalDateTime dataCompra, double desconto){ }
