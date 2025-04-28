package io.github.luciobrito.mycommerce.DTOs;

import io.github.luciobrito.mycommerce.Models.Produto;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProdutoResponseDTO extends Produto
{
    private int quantidade;
}
