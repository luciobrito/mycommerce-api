package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.ProdutoDTO;
import io.github.luciobrito.mycommerce.DTOs.ProdutoResponseDTO;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Services.ProdutoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;
    @GetMapping("/")
    public List<Produto> getProdutos(){
        return produtoService.all();
    }
    @PostMapping("/produto")
    public ResponseEntity<Produto> CadastrarProduto(@RequestBody ProdutoDTO produtoDTO){
        Produto produto = new Produto();
        BeanUtils.copyProperties(produtoDTO, produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.cadastrar(produto));
    }
    @GetMapping("/qnt")
    public int quantidade(){
        Optional<Produto> a = produtoService.getById(3);
       return a.get().quantidade();
    }
}
