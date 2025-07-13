package io.github.luciobrito.mycommerce.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.OffsetDateTime;
@Entity(name = "produto_venda")
@Getter
@Setter
public class ProdutoVenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    private int quantidade;
    public Double valor_unitario;

    //Timestamps
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;

    //Relacionamentos
    @ManyToOne
    @JoinColumn(name = "id_produto", referencedColumnName = "id")
    private Produto produto;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_venda", referencedColumnName = "id")
    private Venda venda;

    public void setVenda(Venda venda){
        this.venda = venda;
    }
    public void setProduto(Produto produto){
        this.produto = produto;
    }
}
