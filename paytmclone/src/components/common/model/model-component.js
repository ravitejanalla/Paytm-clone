import { MODAL_HEADING_TXT } from "../../configs/constants";
import React from "react";
import { loginForm } from "../../login-form/login-form";
import "./modal-component.css";
import {Row} from "reactstrap";

const ModelComponent = (props) => {
    return <>

    <div className="mask"></div>
    <div className="model-wrap">
       <h2 className="heading">{MODAL_HEADING_TXT} <button onClick={props.closeEventHandler}>X</button></h2>  
       <div className="login-panel">
        <div className="steps">
            <h4>Steps to Scan QR Code</h4>
            <ol>
                <li>OPen PAytm App</li>
                <li> Tap Scan Option available at the bottom</li>
                <li>Point Paytm Scan At QR code to login</li>
            </ol>
       </div>
       <div className="login-form"> 
       {
        loginForm.length>0 && loginForm.map((item) =>{
            return <Row>
            <label for={item.id}>{item.label}</label>``     
            <input type={item.id} name ={item.name} id={item.id}></input>
            </Row> 
        })
       }
     <button className="loginBtn">LOGIN</button>
     <button onClick={()=> props.login()}> Google</button>

       </div>
       </div>
       <div className="footer">By Signing in,you agree to our privacy policy and terms of use</div>
       <div className="mobile-app">TO create an Account download Paytm App</div>
    </div>
    </>
}
export default ModelComponent;