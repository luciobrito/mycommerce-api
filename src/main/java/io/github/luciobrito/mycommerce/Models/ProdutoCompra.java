package io.github.luciobrito.mycommerce.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
public class ProdutoCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    private int quantidade;
    @JoinColumn(name = "id_produto", referencedColumnName = "id")
    private Produto produto;
    @Column(name = "valor_unitario")
    private Double valorUnitario;
    @ManyToOne
    @JoinColumn(name = "id_compra", referencedColumnName = "id")
    private Compra compra;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;
}
