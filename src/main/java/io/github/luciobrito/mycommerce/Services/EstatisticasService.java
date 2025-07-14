package io.github.luciobrito.mycommerce.Services;

import io.github.luciobrito.mycommerce.DTOs.MaisVendidosMesDTO;
import io.github.luciobrito.mycommerce.DTOs.SomaVendasDiaDTO;
import io.github.luciobrito.mycommerce.Repositories.ProdutoVendaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstatisticasService {
    @Autowired
    ProdutoVendaRepo produtoVendaRepo;

    public List<SomaVendasDiaDTO> SomaVendasDiarias(){
        return produtoVendaRepo.somaVendasDiarias();
    }
    public List<MaisVendidosMesDTO> maisVendidosMes(int mes, int ano){
        return  produtoVendaRepo.MaisVendidosMes(mes, ano);
    }

}
