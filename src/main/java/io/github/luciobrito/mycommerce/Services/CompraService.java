package io.github.luciobrito.mycommerce.Services;

import io.github.luciobrito.mycommerce.Models.Compra;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Models.ProdutoCompra;
import io.github.luciobrito.mycommerce.Repositories.CompraRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoCompraRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoEstoqueRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CompraService {
    @Autowired
    CompraRepo compraRepo;
    @Autowired
    ProdutoEstoqueRepo estoqueRepo;
    @Autowired
    ProdutoCompraRepo produtoCompraRepo;
    public Compra novaCompra(Set<ProdutoCompra> itens){
        itens.forEach(item -> {
            //item.setCompra(compra);
            produtoCompraRepo.save(item);
        });
        return ;
    }
}
