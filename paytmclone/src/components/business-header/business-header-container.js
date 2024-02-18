import BusinessHeaderComponent from "./business-header-component";
import React, { useEffect, useState } from "react";
const BusinessHeaderContainer= () =>{
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch("./responses/business.json")
          .then((res) => res.json())
          .then((response) => {
            setMenuItems(response.data);
           // console.log("Ajax Response", response);
          });
    
      }, []);
      console.log("menu items",menuItems);
    return <BusinessHeaderComponent menuItems={menuItems}/>
}
export default BusinessHeaderContainer;