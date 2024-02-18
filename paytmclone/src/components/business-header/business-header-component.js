import businessLogo from "../images/logo-1.svg"
import Logo from "../common/logo";
import Nav from "../common/nav";
import React from "react";

const BusinessHeaderComponent = (props) => {
    return <div className="flex">
      <Logo src={businessLogo}/>
      <Nav menuItems={props.menuItems}/>
      <div>
        <button className="btnSignIn">Sign In</button>
      </div>
    </div>
}
export default BusinessHeaderComponent;