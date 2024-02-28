import Nav from "../common/nav";
import Modal from "../common/model";
import defaultLogo from "../images/logo.svg";
import Logo from "../common/logo";
import React from "react";

const DefaultHeaderComponent = (props) => {
    return <div className="flex">
    <Logo src={defaultLogo}/>
      <Nav menuItems = {props.menuItems}/>
      <div className="btnSignIn">
        <button onClick={props.signInClickHandler}>Sign In</button>
      {props.showModal && <Modal closeEventHandler={props.closeModalHandler}/>}
     
      </div>
    </div>
}
export default DefaultHeaderComponent;

