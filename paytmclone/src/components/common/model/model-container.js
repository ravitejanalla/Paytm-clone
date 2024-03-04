import React from "react";
import ModelComponent from "./model-component";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
const ModelContainer = (props) =>{
  const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: response => { 
         console.log(response);
       navigate('/DashBoardPage');
       localStorage.setItem('oauth_token',response.code);
      },
      onError: (response) => {
        console.log(response);
      },
      flow : 'auth-code',
    });
    return <ModelComponent {...props} login={login}/>
}
export default ModelContainer;