package io.github.luciobrito.mycommerce.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.Set;
import java.util.UUID;

@Entity(name = "produtos")
@Getter
@Setter
public class Produto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    private String nome;
    private String descricao;
    private Double preco;

    //@OneToOne(mappedBy = "produto")
    //private ProdutoEstoque estoque;

    @Column(name = "codigo_barra")
    private String codigoBarra;
    @JsonIgnore
    @OneToMany(mappedBy = "produto")
    private Set<ProdutoCompra> compra;
    @Column(name = "quantidade_estoque")
    private int quantidadeEstoque;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;

    public void reporEstoque(int quantidade){
        this.quantidadeEstoque += quantidade;
    }
    public void removerEstoque(int quantidade){
        this.quantidadeEstoque -= quantidade;
    }
/*
    public int quantidade(){
        return estoque.getQuantidade();
    }
    public ProdutoEstoque produtoEstoque(){
        return this.estoque;
    }
*/
}
