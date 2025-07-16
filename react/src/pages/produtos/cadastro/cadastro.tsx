import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { postProduto, Produto } from "../../../services/produtoService";
import "./cadastro.scss";
export default function CadastroProduto() {
  const [nome, setNome] = useState<string>(""),
    [codigoBarra, setCodigoBarra] = useState<string>(""),
    [descricao, setDescricao] = useState<string>(""),
    [preco, setPreco] = useState<number>(0),
    submit = () => {
      postProduto(produtoData).then((res) => {
        console.log("Cadastrado com sucesso!");
      });
    };
  var produtoData: Produto = {
    id : 0,
    nome: nome,
    codigoBarra: codigoBarra,
    descricao: descricao,
    preco: preco,
  };
  return (
    <div className="container">
      <Typography variant="h5">Cadastrar um produto:</Typography>
      <div className="formulario">
        <div className="formulario-content">
        <TextField
          label="Nome"
          placeholder="Base"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <TextField
          label="Código de barra"
          placeholder="00000"
          onChange={(e) => {
            setCodigoBarra(e.target.value);
          }}
        />
        <TextField
          label="Preço"
          placeholder="12.99"
          onChange={(e) => {
            setPreco(parseFloat(e.target.value));
          }}
        />
        <TextField
          label="Descrição"
          placeholder="Muito bom"
          onChange={(e) => {
            setDescricao(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            submit();
          }}
        >
          Cadastrar
        </Button>
        </div>
      </div>
    </div>
  );
}
