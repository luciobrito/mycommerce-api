import axios from "axios";
import { jwtDecode } from "jwt-decode";
export class Token{
    public value : string
    private decoded 
    constructor(token : string){
        this.value = token;
        this.decoded = jwtDecode(this.value)
    }
    isExpired():boolean{
        if(this.decoded.exp == undefined) return true;
        else return new Date(this.decoded.exp * 1000) < new Date()
    }
}
export interface LoginField {
    username : string; 
    password:string
}
const url = import.meta.env.VITE_API_URL + "/auth/login"
export const postLogin = (login : LoginField) => 
    axios.post(url, {username : login.username, password: login.password})

export const saveToken = (token : Token) => {localStorage.setItem("token", token.value)}

export const removeToken = () => {localStorage.removeItem("token")}

export const isLogged = () : boolean => {
    var tokenStored = localStorage.getItem("token")
    if(tokenStored != null){
        var token = new Token(tokenStored);
        return !token.isExpired() ;
    }
    return false;

}