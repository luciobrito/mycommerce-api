import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { postProduto, Produto } from "../../../services/produtoService";
import "./cadastro.scss";
export default function CadastroProduto({close}: {close : any}) {
  const [produto, setProduto] = useState<Omit<Produto, "id">>({nome:"",descricao:"",codigoBarra:"",preco:0}),
    submit = () => {
      postProduto(produto).then((res) => {
        console.log("Cadastrado com sucesso!");
      });
    };
  return (
    <div className="container">
      <Typography variant="h5" className="titulo">Cadastrar um produto:</Typography>
      <div className="formulario">
        <div className="formulario-content">
        <TextField
          label="Nome"
          placeholder="Base"
          onChange={(e) => {
            setProduto({...produto, nome:e.target.value});
          }}
        />
        <TextField
          label="Código de barra"
          placeholder="00000"
          onChange={(e) => {
            setProduto({...produto, codigoBarra: e.target.value});
          }}
        />
        <TextField
          label="Preço"
          placeholder="12.99"
          onChange={(e) => {
            setProduto({...produto, preco: parseFloat(e.target.value)})
          }}
        />
        <TextField
          label="Descrição"
          placeholder="Muito bom"
          onChange={(e) => {
            setProduto({...produto, descricao: e.target.value})
          }}
        />
        <div className="botoes">
        <Button color="error" onClick={()=>{close()}}>
          Cancelar
        </Button>
        <Button
          
          onClick={() => {
            submit();
          }}
        >
          Cadastrar
        </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
