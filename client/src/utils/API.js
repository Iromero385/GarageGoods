import axios from "axios"

export default {
    login:function (Data){
        return axios.post("/api/login",Data);
    },
    singup:function(Data){
        return axios.post("/api/signup",Data)
    },
    logout:function (){
        return axios.get("/logout")
    }
};