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
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CompraService {
    @Autowired
    CompraRepo compraRepo;
    @Autowired
    ProdutoCompraRepo produtoCompraRepo;
    @Autowired
    ProdutoRepo produtoRepo;

    public Compra novaCompra(Compra compra, Set<ProdutoCompraDTO> itens){
        Set<ProdutoCompra> produtos = new HashSet<>();
        for(ProdutoCompraDTO item : itens){
            ProdutoCompra pc = new ProdutoCompra();
            BeanUtils.copyProperties(item, pc);
            pc.setCompra(compra);
            Produto produto = produtoRepo.findById(item.idProduto()).orElseThrow(()->new RuntimeException("Produto não encontrado"));
            pc.setProduto(produto);
            produto.reporEstoque(pc.getQuantidade());
            produtos.add(pc);
        }
        compra.setProdutosCompra(produtos);
        saveCompra(compra);
        return compra;
    }
    public void saveCompra(Compra compra){
        compraRepo.save(compra);
        for(ProdutoCompra item : compra.getProdutosCompra() ){
            produtoCompraRepo.save(item);
            produtoRepo.save(item.getProduto());
        }
    }
public Page<Compra> getAll(Pageable pageable){
        return compraRepo.findAll(pageable);
}
public Optional<Compra> getById(int id){
        return compraRepo.findById(id);
}
    public Page<Compra> getTeste(Pageable pageable){

        return compraRepo.findAll(pageable);
    }
}
