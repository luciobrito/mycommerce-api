package io.github.luciobrito.mycommerce.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.Optional;

@Entity(name = "vendas")
@Getter
@Setter
public class Venda {
    @Id
    @GeneratedValue
    public int id;
    public Double desconto;
    @Column(name = "forma_pagamento")
    public String formaPagamento;
    @Column(name = "dataVenda")
    public LocalDateTime dataVenda;
}
