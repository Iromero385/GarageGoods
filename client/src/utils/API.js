import axios from "axios"

export default {
    login:function (Data){
        return axios.post("/api/login",Data);
    },
    islogin:function(){
        return axios.get("/")
    }
};