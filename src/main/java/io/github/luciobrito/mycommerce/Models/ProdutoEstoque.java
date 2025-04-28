package io.github.luciobrito.mycommerce.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.OffsetDateTime;

@Entity(name = "produto_estoque")
@Getter
@Setter
public class ProdutoEstoque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    private int quantidade;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_produto", referencedColumnName = "id")
    private Produto produto;
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;

    private void retirar(int quantidadeARetirar) throws Exception{
        if(quantidadeARetirar > this.quantidade){
            throw new Exception("Quantidade solicitada maior do que o estoque.");
        }
        else {
            this.quantidade = quantidade - quantidadeARetirar;
        }
    }
    private void repor(int quantidadeARepor){
        this.quantidade += quantidadeARepor;
    }
    public void setProduto(Produto produto){
        this.produto = produto;
    }
    public int getQuantidade(){
        return this.quantidade;
    }
}