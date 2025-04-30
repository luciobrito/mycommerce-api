package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.CompraDTO;
import io.github.luciobrito.mycommerce.Services.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/compra")
public class CompraController {
    @Autowired
    CompraService compraService;

    @GetMapping
    public String getCompra(){
        return "";
    }
    @PostMapping
    public ResponseEntity novaCompra(@RequestBody CompraDTO compraDTO){
        return ResponseEntity.status(HttpStatus.OK).body(compraDTO);
    }
}
