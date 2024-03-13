
import React, { useEffect, useState } from "react";
import DefaultHeaderComponent from "./default-header-component";
const DefaultHeaderContainer = (props) => {
    const [menuItems, setMenuItems] = useState([]);
    const [showModal,setShowModal]= useState(false);
    useEffect(() => {
        fetch("./responses/default.json")
          .then((res) => res.json())
          .then((response) => {
            setMenuItems(response.data);
           // console.log("Ajax Response", response);
          });
    
      }, []);
      const signInClickHandler = ()=>{
    
        setShowModal(!showModal);
      }
      const closeModalHandler = (event) =>{
        event.preventDefault();
        setShowModal(false);
      }
      console.log("menu items",menuItems);
    return <DefaultHeaderComponent menuItems={menuItems}
    signInClickHandler={signInClickHandler}
    closeModalHandler={closeModalHandler}
    showModal={showModal}/>
}
export default DefaultHeaderContainer;