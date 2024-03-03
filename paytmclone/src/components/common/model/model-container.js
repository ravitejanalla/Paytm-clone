import React from "react";
import ModelComponent from "./model-component";
import { useGoogleLogin } from '@react-oauth/google';
const ModelContainer = (props) =>{
    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
      });
    return <ModelComponent {...props} login={login}/>
}
export default ModelContainer;