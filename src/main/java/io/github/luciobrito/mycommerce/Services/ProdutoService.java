package io.github.luciobrito.mycommerce.Services;


import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import io.github.luciobrito.mycommerce.exceptions.ProdutoDuplicadoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Limit;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepo produtoRepo;

    public List<Produto> all(){
        return produtoRepo.findAll();
    }
    public Produto cadastrar(Produto produto){
        if(produtoRepo.findByCodigoBarra(produto.getCodigoBarra()) != null){
            throw new ProdutoDuplicadoException("Produto já cadastrado","codigoBarra");
        }
        else return produtoRepo.save(produto);
    }
    public Optional<Produto> getById(int id){
        return produtoRepo.findById(id);
    }
    public List<Produto> buscar(String value) {return produtoRepo.buscarProduto(PageRequest.of(0, 4),value);};
}
