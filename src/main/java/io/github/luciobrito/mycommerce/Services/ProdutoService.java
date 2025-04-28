package io.github.luciobrito.mycommerce.Services;


import io.github.luciobrito.mycommerce.DTOs.ProdutoResponseDTO;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Models.ProdutoEstoque;
import io.github.luciobrito.mycommerce.Repositories.ProdutoEstoqueRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepo produtoRepo;
    @Autowired
    private ProdutoEstoqueRepo estoqueRepo;

    public List<Produto> all(){
        return produtoRepo.findAll();
    }
    public Produto cadastrar(Produto produto){
        ProdutoEstoque estoque = new ProdutoEstoque();
        estoque.setProduto(produto);
        estoqueRepo.save(estoque);
        return produtoRepo.save(produto);
    }
    public Optional<Produto> getById(int id){
        return produtoRepo.findById(id);
    }

}
