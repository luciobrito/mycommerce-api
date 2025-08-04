package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.CompraDTO;
import io.github.luciobrito.mycommerce.Models.Compra;
import io.github.luciobrito.mycommerce.Models.ProdutoCompra;
import io.github.luciobrito.mycommerce.Models.Venda;
import io.github.luciobrito.mycommerce.Services.CompraService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.http.HttpEntity;
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
    public PagedModel<Compra> getCompra(Pageable pageable){

        return new PagedModel<>(compraService.getTeste(PageRequest.of(pageable.getPageNumber(),6)));
    }
    @PostMapping
    public ResponseEntity<Compra> novaCompra(@RequestBody CompraDTO compraDTO){
        Compra compra = new Compra();
        BeanUtils.copyProperties(compraDTO,compra);
        return ResponseEntity.status(HttpStatus.OK).body(compraService.novaCompra(compra, compraDTO.itens()));
    }
    @GetMapping("/{id}")
    public Optional<Compra> getCompraById(@PathVariable(value = "id") int id){
        return compraService.getById(id);
    }
}
