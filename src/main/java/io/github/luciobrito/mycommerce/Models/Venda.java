package io.github.luciobrito.mycommerce.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Optional;
import java.util.Set;

@Entity(name = "vendas")
@Getter
@Setter
public class Venda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public Double desconto;
    @Column(name = "forma_pagamento")
    public String formaPagamento;
    //public LocalDateTime dataVenda;

    //Timestamps
    @CreationTimestamp
    private OffsetDateTime created_at;
    @UpdateTimestamp
    private OffsetDateTime updated_at;

    //Relacionamentos
    @OneToMany(mappedBy = "venda")
    public Set<ProdutoVenda> itens;
}
