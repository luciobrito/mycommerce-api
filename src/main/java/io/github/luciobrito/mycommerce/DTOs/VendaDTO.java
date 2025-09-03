package io.github.luciobrito.mycommerce.DTOs;

import java.time.LocalDateTime;
import java.util.Set;

public record VendaDTO(Set<ProdutoVendaDTO> itens, String formaPagamento, double desconto
                       /*LocalDateTime dataVenda*/) {
}
