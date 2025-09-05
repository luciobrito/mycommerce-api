import axios from "axios";

export class Token{
    public value : string
    constructor(token : string){
        this.value = token;
    }
    isExpired():boolean{
        return false;
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