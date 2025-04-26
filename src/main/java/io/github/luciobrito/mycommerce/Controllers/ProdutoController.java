package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.ProdutoDTO;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProdutoController {

    @GetMapping("/")
    public String getProdutos(){
        return "Hello World";
    }
    @PostMapping("/produto")
    public void CadastrarProduto(@RequestBody ProdutoDTO produto){

    }
}
