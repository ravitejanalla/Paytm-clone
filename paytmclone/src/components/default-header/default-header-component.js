import Nav from "../common/nav";
import { defaultNavLinks } from "../configs/navlinks";
import defaultLogo from "../images/logo.svg";
import Logo from "../common/logo";
import React from "react";
const DefaultHeaderComponent = () => {
    return <div className="flex">
    <Logo src={defaultLogo}/>
      <Nav menuItems = {defaultNavLinks}/>
      <div>
        <button className="btnSignIn">Sign In</button>
      </div>
    </div>
}
export default DefaultHeaderComponent;