package io.github.luciobrito.mycommerce.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name = "compras")
@Getter
@Setter
public class Compra {
    @Id
    @GeneratedValue
    public int Id;
    @Column(name = "data_compra")
    private LocalDateTime dataCompra;

}
