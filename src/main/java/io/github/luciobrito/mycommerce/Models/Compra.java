package io.github.luciobrito.mycommerce.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity(name = "compras")
@Getter
@Setter
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    @Column(name = "data_compra")
    private LocalDateTime dataCompra;
    @OneToMany(mappedBy = "compra")
    private Set<ProdutoCompra> itens;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;
    public Set<ProdutoCompra> getItens(){
        return this.itens;
    }
}
