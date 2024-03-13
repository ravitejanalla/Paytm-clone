import { MODAL_HEADING_TXT } from "../../configs/constants";
import React from "react";
import { loginForm } from "../../login-form/login-form";
import "./modal-component.css";
import { Row } from "reactstrap";
import 'bootstrap';
const ModelComponent = (props) => {
    return <>

        <div className="mask"></div>
        <div className="model-wrap">
            <h2 className="heading">{MODAL_HEADING_TXT}
                {/* <Button > */}
                <span href="#" onClick={(event) => props.closeEventHandler(event)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </span>
                {/* </Button>   */}</h2>
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
                        loginForm.length > 0 && loginForm.map((item) => {
                            return <Row>
                                <label for={item.id}>{item.label}</label>``
                                <input type={item.id} name={item.name} id={item.id}></input>
                            </Row>
                        })
                    }
                    <div className=" d-flex grid gap-0 cloumn-gap-3">
                       <div className="p-2 g-col-6">
                        <button className="loginBtn" onClick={() => props.fetchLogin()}>LOGIN</button>
                        </div>
                        <div className="p-2 g-col-6" onClick={() => props.login()}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></div>
                        </div>
                    </div>
                </div>
                <div className="footer">By Signing in,you agree to our privacy policy and terms of use</div>
                <div className="mobile-app">TO create an Account download Paytm App</div>
            </div>
        </>
}
        export default ModelComponent;