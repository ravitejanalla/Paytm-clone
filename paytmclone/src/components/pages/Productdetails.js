
import React, { useEffect } from "react";
//import hmacSHA512 from 'crypto-js/hmac-sha512';
import { useParams } from "react-router-dom";
import { client } from "./axiosConfigs";
// import 'bootstrap/dist/css/bootstrap.min.css';
const ProductDetails =() =>{
    
    const params=useParams();
    useEffect(()=>{
        
        const{ id } = params;
        client.get(`/products/${id}`).then((response) =>{
            console.log("Response",response.data.products);
            
    }).catch((err)=>{
        console.log(err);
    });
    },[params])
   // console.log(hmacSHA512{params.id})
    return <h2>Product</h2>
}
export default ProductDetails;