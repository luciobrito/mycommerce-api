import { Button, TextInput, Title } from "@mantine/core";
import "./login.scss";
import { useState } from "react";
import { postLogin, saveToken, Token } from "../../services/loginService";
export default function Login(){
    const [loginField, setLoginField] = useState({username:"", password:""});
    const [loading, setLoading] = useState(false);
    const attemptLogin = () =>{
        setLoading(true)
        postLogin(loginField)
        .then((res)=>{saveToken(new Token(res.data.Token)); console.debug(res.data); window.location.replace("/")})
        .catch((res)=>{console.debug(res)})
        .finally(()=>{setLoading(false);console.debug(loginField)});
    }
    return <>
    <div id="login-container">
        <section id="content">
            <Title order={2}>Login</Title>
        <TextInput onChange={(e)=>{setLoginField({...loginField, username: e.target.value})}} label="Usuário"/>
        <TextInput onChange={(e)=>{setLoginField({...loginField, password: e.target.value})}} label="Senha" type="password"/>
        <div>
        <Button loading={loading} onClick={()=>{attemptLogin()}} style={{width:"100%", marginTop:10}}>Login</Button>
        </div></section>
        
    </div>
    </>
}