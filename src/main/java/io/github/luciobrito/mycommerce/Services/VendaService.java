package io.github.luciobrito.mycommerce.Services;

import io.github.luciobrito.mycommerce.DTOs.ProdutoVendaDTO;
import io.github.luciobrito.mycommerce.Models.Produto;
import io.github.luciobrito.mycommerce.Models.ProdutoVenda;
import io.github.luciobrito.mycommerce.Models.Venda;
import io.github.luciobrito.mycommerce.Repositories.ProdutoRepo;
import io.github.luciobrito.mycommerce.Repositories.ProdutoVendaRepo;
import io.github.luciobrito.mycommerce.Repositories.VendaRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class VendaService {
    @Autowired
    VendaRepo vendaRepo;
    @Autowired
    ProdutoVendaRepo produtoVendaRepo;
    @Autowired
    ProdutoRepo produtoRepo;
    public Venda novaVenda(Venda venda, Set<ProdutoVendaDTO> itens){
        Venda vendaSave = vendaRepo.save(venda);
        itens.forEach((item)->{
            ProdutoVenda produtoVenda = new ProdutoVenda();
            BeanUtils.copyProperties(item, produtoVenda);
            produtoVenda.setVenda(vendaSave);
            Optional<Produto> produto = produtoRepo.findById(item.idProduto());
            produto.ifPresent((p)->{
                p.removerEstoque(item.quantidade());
                produtoVenda.setProduto(p);
                produtoRepo.save(p);
                produtoVendaRepo.save(produtoVenda);
            });
        });
        return venda;
    }
    public List<Venda> getAll() {return vendaRepo.findAll();}

}
