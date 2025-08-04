package io.github.luciobrito.mycommerce.Models;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity(name = "compras")
@Getter
@Setter
public class Compra implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    @Column(name = "data_compra")
    private LocalDateTime dataCompra;
    @JsonProperty("itens")
    @OneToMany(mappedBy = "compra")
    private Set<ProdutoCompra> produtosCompra;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;
    private double desconto;
    public Set<ProdutoCompra> getProdutosCompra(){
        return this.produtosCompra;
    }
}
