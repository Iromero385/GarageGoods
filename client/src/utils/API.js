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
    },
    findAll:function(){
        return axios.get("/api/GarageGoods/AllListings")
    },
    currentUser:function(){
        return axios.get("/api/user_data")
    },
    findAllByUser:function(id){
        return axios.get("/api/GarageGoods/AllListings/"+ id)
    },
    create:function(garageSale){
        return axios.post("/api/GarageGoods/create", garageSale)
    }
};