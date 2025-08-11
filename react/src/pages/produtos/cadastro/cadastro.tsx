import { useState } from "react";
import { useMask } from '@react-input/mask';
import { postProduto, Produto } from "../../../services/produtoService";
import { Button, TextInput } from "@mantine/core";
export default function CadastroProduto({close}: {close : any}) {
  const [produto, setProduto] = useState<Omit<Produto, "id">>({nome:"",descricao:"",codigoBarra:"",preco:0,}),
        [error, setError] = useState<any>({nome:"",descricao:"",codigoBarra:"",preco: ""}),
        [loading, setLoading] = useState(false),
    submit = () => {
      setLoading(true)
      postProduto(produto).then(() => {
        console.log("Cadastrado com sucesso!");
      }).catch((res)=>{console.log(res.response.data); setError(res.response.data)})
      .finally(()=>{setLoading(false)});
    };
  const inputRef = useMask({mask:'000'})
  return (
    <div className="container">
      <div className="formulario">
        <div className="formulario-content">
        <TextInput
          label="Nome"
          placeholder="Batom vermelho"
          onChange={(e) => {
            setProduto({...produto, nome:e.target.value});
          }}
          error={error.nome}
        />
        <TextInput
          label="Código de barra"
          placeholder="00000"
          onChange={(e) => {
            setProduto({...produto, codigoBarra: e.target.value});
          }}
          error={error.codigoBarra}
          
          type="text"
        />
        <TextInput
          label="Preço"
          leftSection={"R$"}
          defaultValue={0}
          placeholder="12.99"
          onChange={(e) => {
            setProduto({...produto, preco: parseFloat(e.target.value)})
          }}
          error={error.preco}
        />
        <TextInput
          label="Descrição"
          placeholder="Muito bom"
          onChange={(e) => {
            setProduto({...produto, descricao: e.target.value})
          }}
        />
        <div className="botoes">
        <Button color="red" onClick={()=>{close()}}>
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
