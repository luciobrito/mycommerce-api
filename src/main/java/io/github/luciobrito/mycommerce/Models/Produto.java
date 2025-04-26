package io.github.luciobrito.mycommerce.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity(name = "produtos")
@Getter
@Setter
public class Produto  {

    @Id
    @GeneratedValue
    public int id;
    private String nome;
    private String descricao;
    private Double preco;
    @OneToOne(mappedBy = "produto")
    private ProdutoEstoque estoque;
    @Column(name = "codigo_barra")
    private String codigoBarra;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;
}
