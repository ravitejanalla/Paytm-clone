import React from "react";
import ModelComponent from "./model-component";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

import useFetch from "../../hooks/fetch";
const ModelContainer = (props) =>{
  
  const [apiCall,setAPICall]= useFetch(null);
   const navigate=useNavigate();
    const login = useGoogleLogin({
        onSuccess: response => { 
        // console.log(response);
       navigate('/DashBoardPage');
       localStorage.setItem('oauth_token',response.code);
      },
      onError: (response) => {
        console.log(response);
      },
      flow : 'auth-code',
    });
    const fetchLogin = () =>{
      //fetch();
    setAPICall("https://dummyjson.com/products/1")
  console.log("apical",apiCall);
    //   axios.get("./responses/logindata.json").then((response) => {
    //     const {data} = response;
    //     if(data.token){
    //       localStorage.setItem("token",data.token);
    //       navigate("/DashBoardPage");
    //     }
    
    // })
  }
 
    return <ModelComponent {...props} 
    login={login}
    fetchLogin={fetchLogin}/>
}
export default ModelContainer;