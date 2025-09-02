package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.MaisVendidosMesDTO;
import io.github.luciobrito.mycommerce.DTOs.SomaVendasDiaDTO;
import io.github.luciobrito.mycommerce.DTOs.VendaDTO;
import io.github.luciobrito.mycommerce.Models.Venda;
import io.github.luciobrito.mycommerce.Services.EstatisticasService;
import io.github.luciobrito.mycommerce.Services.VendaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/venda")
public class VendaController {
    @Autowired
    VendaService vendaService;
    @Autowired
    EstatisticasService estatisticasService;
    @GetMapping
    public PagedModel<Venda> getVendas(Pageable pageable){
        return new PagedModel<>( vendaService.getAll(pageable));}
    @PostMapping
    public ResponseEntity<Venda> novaVenda(@RequestBody VendaDTO vendaDTO){
        Venda venda = new Venda();
        BeanUtils.copyProperties(vendaDTO,venda);
        return ResponseEntity.status(HttpStatus.OK).body(vendaService.novaVenda(venda, vendaDTO.itens()));
    }
    @GetMapping("/somaDiaria")
    public ResponseEntity<List<SomaVendasDiaDTO>> somaVendas(){
        return ResponseEntity.status(HttpStatus.OK).body(estatisticasService.SomaVendasDiarias());
    }
    @GetMapping("/maisVendidos")
    public ResponseEntity<List<MaisVendidosMesDTO>> maisVendidos(@RequestParam int mes, @RequestParam int ano){
        return ResponseEntity.status(HttpStatus.OK).body(estatisticasService.maisVendidosMes(mes,ano));
    }
}
