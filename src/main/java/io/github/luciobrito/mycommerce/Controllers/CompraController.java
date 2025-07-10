package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.CompraDTO;
import io.github.luciobrito.mycommerce.Models.Compra;
import io.github.luciobrito.mycommerce.Models.ProdutoCompra;
import io.github.luciobrito.mycommerce.Services.CompraService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
//Provisório, remover depois
@CrossOrigin
@RestController()
@RequestMapping("/compra")
public class CompraController {
    @Autowired
    CompraService compraService;

    @GetMapping
    public List<Compra> getCompra(){
        return compraService.getAll();
    }
    @PostMapping
    public ResponseEntity novaCompra(@RequestBody CompraDTO compraDTO){
        Compra compra = new Compra();
        BeanUtils.copyProperties(compraDTO,compra);
        return ResponseEntity.status(HttpStatus.OK).body(compraService.novaCompra(compra, compraDTO.itens()));
    }
    @GetMapping("/{id}")
    public Optional<Compra> getCompraById(@PathVariable(value = "id") int id){
        return compraService.getById(id);
    }
}
