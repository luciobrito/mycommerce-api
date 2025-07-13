package io.github.luciobrito.mycommerce.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.OffsetDateTime;
/*Classe não utilizada mais*/
@Entity(name = "produto_estoque")
@Getter
@Setter
public class ProdutoEstoque implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    private int quantidade;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_produto", referencedColumnName = "id")
    @JsonIgnore
    private Produto produto;
    @JsonIgnore
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;

    public void retirar(int quantidadeARetirar) throws Exception{
        if(quantidadeARetirar > this.quantidade){
            throw new Exception("Quantidade solicitada maior do que o estoque.");
        }
        else {
            this.quantidade = quantidade - quantidadeARetirar;
        }
    }
    public void repor(int quantidadeARepor){
        this.quantidade += quantidadeARepor;
    }
    public void setProduto(Produto produto){
        this.produto = produto;
    }
    public int getQuantidade(){
        return this.quantidade;
    }
}