import { useState } from "react";
import { postProduto, Produto } from "../../../services/produtoService";
import { Button, Notification, TextInput } from "@mantine/core";
export default function CadastroProduto({close}: {close : any}) {
  const [produto, setProduto] = useState<Omit<Produto, "id">>({nome:"",descricao:"",codigoBarra:"",preco:0,}),
        [error, setError] = useState<any>({nome:"",descricao:"",codigoBarra:"",preco: ""}),
        [loading, setLoading] = useState(false),
        [success, setSuccess] = useState({status:false, name:""}),
    submit = () => {
      setLoading(true)
      setError({})
      postProduto(produto).then((response) => {
        setSuccess({status: true, name:response.data.nome})
        setProduto({nome:"",descricao:"",codigoBarra:"",preco:0})
      }).catch((res)=>{console.log(res.response.data); setError(res.response.data)})
      .finally(()=>{setLoading(false)});
      setTimeout(()=>{setSuccess({status:false, name:""})},10000)
    };
    
  return (
    <div className="container">
      <div className="formulario">
        <div className="formulario-content">
        <TextInput
          label="Nome"
          value={produto.nome}
          placeholder="Batom vermelho"
          onChange={(e) => {
            setProduto({...produto, nome:e.target.value});
          }}
          error={error.nome}
        />
        <TextInput
          label="Código de barra"
          value={produto.codigoBarra}
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
          placeholder="12.99"
          onChange={(e) => {
            e.target.value = e.target.value.replace(',','').replace(/\D/g,'').replace(/(\d)(\d{2})$/,"$1,$2")
            setProduto({...produto, preco: parseFloat(e.target.value.replace(',','.')) })
          }}
          
          error={error.preco}
        />
        <TextInput
          value={produto.descricao}
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
        {success.status && <Notification withCloseButton={false} color="green" title="Produto registrado com sucesso!">{success.name} foi registrado!</Notification>}
        
      </div>
    </div>
  );
}
