package io.github.luciobrito.mycommerce.Services;

import io.github.luciobrito.mycommerce.DTOs.ProdutoCompraDTO;
import io.github.luciobrito.mycommerce.Models.Compra;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Models.ProdutoCompra;
import io.github.luciobrito.mycommerce.Models.Venda;
import io.github.luciobrito.mycommerce.Repositories.CompraRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoCompraRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CompraService {
    @Autowired
    CompraRepo compraRepo;
    @Autowired
    ProdutoCompraRepo produtoCompraRepo;
    @Autowired
    ProdutoRepo produtoRepo;

    public Compra novaCompra(Compra compra, Set<ProdutoCompraDTO> itens){
        Compra compraSave = compraRepo.save(compra);
        //Cadastro de cada item no carrinho da compra
        for (ProdutoCompraDTO item : itens) {
           ProdutoCompra produtoCompra = new ProdutoCompra();
           BeanUtils.copyProperties(item, produtoCompra);
           //Optional<Compra> c1 = compraRepo.findById(compra.id);
           produtoCompra.setCompra(compraSave);
           //System.out.println("Id da compra: " + compra.id + "\n" + item.idProduto());
           Optional<Produto> produto = produtoRepo.findById(item.idProduto());
           produto.get().reporEstoque(item.quantidade());
           produtoCompra.setProduto(produto.get());
           produtoRepo.save(produto.get());
           produtoCompraRepo.save(produtoCompra);
       }
        return compra;
    }
public Page<Compra> getAll(int pageNumber){
        return compraRepo.findAll(PageRequest.of(pageNumber,6));
}
public Optional<Compra> getById(int id){
        return compraRepo.findById(id);
}
    public Page<Compra> getTeste(Pageable pageable){

        return compraRepo.findAll(pageable);
    }
}
