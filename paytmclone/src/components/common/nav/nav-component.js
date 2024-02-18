import React from "react";
import { Link } from "react-router-dom";

const NavComponent = ({menuItems}) => {
    return <nav className="nav">
      {menuItems.length ===0 && "Loading...."}
        <ul className="flex nav-links li">
            {
              menuItems.length>0 && menuItems.map((item)=>
              {
                const template =() => {
                  if(item === "paytm for Business")
                  {
                    return <Link to="/business">{item}</Link>
                  }
                  else{
                    return item;
                  }
                }
                  console.log('item:',item);
                  return <li>{template()}</li>
              })
            }
        </ul>
      </nav>
}
export default NavComponent;