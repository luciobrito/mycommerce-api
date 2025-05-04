package io.github.luciobrito.mycommerce.Services;

import io.github.luciobrito.mycommerce.DTOs.ProdutoCompraDTO;
import io.github.luciobrito.mycommerce.Models.Compra;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Models.ProdutoCompra;
import io.github.luciobrito.mycommerce.Models.ProdutoEstoque;
import io.github.luciobrito.mycommerce.Repositories.CompraRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoCompraRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoEstoqueRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class CompraService {
    @Autowired
    CompraRepo compraRepo;
    @Autowired
    ProdutoEstoqueRepo estoqueRepo;
    @Autowired
    ProdutoCompraRepo produtoCompraRepo;
    @Autowired
    ProdutoRepo produtoRepo;

    public Compra novaCompra(Compra compra, Set<ProdutoCompraDTO> itens){
        Compra c2 = compraRepo.save(compra);
        for (ProdutoCompraDTO item : itens) {
           ProdutoCompra produtoCompra = new ProdutoCompra();
           BeanUtils.copyProperties(item, produtoCompra);
           //Optional<Compra> c1 = compraRepo.findById(compra.id);
           produtoCompra.setCompra(c2);
           System.out.println("Id da compra: " + compra.id + "\n" + item.idProduto());
           Optional<Produto> produto = produtoRepo.findById(item.idProduto());
           produtoCompra.setProduto(produto.get());
           ProdutoEstoque estoque = estoqueRepo.findByProdutoId(produto.get().id).get();
           estoque.repor(item.quantidade());
           estoqueRepo.save(estoque);
           produtoCompraRepo.save(produtoCompra);
       }
        return compra;
    }
}
