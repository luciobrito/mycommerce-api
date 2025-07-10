package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.ProdutoDTO;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Services.ProdutoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
//Provisório, remover depois
@CrossOrigin
@RestController
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;
    @GetMapping("/produto")
    public List<Produto> getProdutos(){
        return produtoService.all();
    }
    @PostMapping("/produto")
    public ResponseEntity<Produto> CadastrarProduto(@RequestBody ProdutoDTO produtoDTO){
        Produto produto = new Produto();
        BeanUtils.copyProperties(produtoDTO, produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.cadastrar(produto));
    }
    @GetMapping("/produto/{value}")
    public ResponseEntity<List<Produto>> buscarProdutos(@PathVariable(value = "value") String value){
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.buscar(value));
    }
}
