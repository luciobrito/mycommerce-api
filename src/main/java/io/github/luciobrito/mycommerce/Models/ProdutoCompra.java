package io.github.luciobrito.mycommerce.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
public class ProdutoCompra implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    private int quantidade;
    @ManyToOne
    @JoinColumn(name = "id_produto", referencedColumnName = "id")
    private Produto produto;
    @Column(name = "valor_unitario")
    private Double valorUnitario;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_compra", referencedColumnName = "id")
    private Compra compra;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;

    public void setCompra(Compra compra){
        this.compra = compra;
    }
    public void setProduto(Produto produto) {this.produto = produto;}
}
