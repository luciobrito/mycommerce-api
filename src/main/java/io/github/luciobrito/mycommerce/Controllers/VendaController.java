package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.VendaDTO;
import io.github.luciobrito.mycommerce.Models.Venda;
import io.github.luciobrito.mycommerce.Services.VendaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venda")
public class VendaController {
    @Autowired
    VendaService vendaService;
    @GetMapping
    public List<Venda> getVendas(){ return vendaService.getAll();}
    @PostMapping
    public ResponseEntity<Venda> novaVenda(@RequestBody VendaDTO vendaDTO){
        Venda venda = new Venda();
        BeanUtils.copyProperties(vendaDTO,venda);
        return ResponseEntity.status(HttpStatus.OK).body(vendaService.novaVenda(venda, vendaDTO.itens()));
    }
}
