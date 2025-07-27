import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useMask } from '@react-input/mask';
import { postProduto, Produto } from "../../../services/produtoService";
import "./cadastro.scss";
export default function CadastroProduto({close}: {close : any}) {
  const [produto, setProduto] = useState<Omit<Produto, "id">>({nome:"",descricao:"",codigoBarra:"",preco:0,}),
        [error, setError] = useState<any>({nome:"",descricao:"",codigoBarra:"",preco: ""}),
        [loading, setLoading] = useState(false),
    submit = () => {
      postProduto(produto).then((res) => {
        console.log("Cadastrado com sucesso!");
        setLoading(true)
      }).catch((res)=>{console.log(res.response.data); setError(res.response.data)})
      .finally(()=>{setLoading(false)});
    };
  const inputRef = useMask({mask:'000'})
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
          error={error.nome}
          helperText={error.nome}
        />
        <TextField
          label="Código de barra"
          placeholder="00000"
          onChange={(e) => {
            setProduto({...produto, codigoBarra: e.target.value});
          }}
          error={error.codigoBarra}
          helperText={error.codigoBarra}
          ref={inputRef}
          type="text"
        />
        <TextField
          label="Preço"
          defaultValue={0}
          placeholder="12.99"
          onChange={(e) => {
            setProduto({...produto, preco: parseFloat(e.target.value)})
          }}
          error={error.preco}
          helperText={error.preco}
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
          loading={loading}
        >
          Cadastrar
        </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
