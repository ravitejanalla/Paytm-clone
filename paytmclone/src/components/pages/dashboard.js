import React, { useEffect,useState } from "react";
import {Container,Row,Col} from "reactstrap";
import { Link } from "react-router-dom";
import { client } from "./axiosConfigs";

const DashBoardPage = () =>{
    // fetc(url,{
    //     method:"GET",
    // })
    const [data,setData] = useState([])
    useEffect(() => {
        client.get("/products").then((response) =>{
            console.log("Response",response.data.products);
            setData(response.data.products)
          
    }).catch((err)=>{
        console.log(err);
    })
},[])
    
    return <Container>
        <Row>
            <Col> <h1>DashBoard Page  SucceSSFUL LOGIN</h1></Col>
        </Row> 
      <Row>
        <ul className="products d-flex">
        {
           data && data.length>0 && data.map((item) => {
                return <li>
                    <h1>
                        {item.title}
                    </h1>
                    <img src={item.thumbnail} alt="val"/>
                    <span>Price: Rs.{item.price}</span>
                         <p>{item.description}</p>
                    <Link to={`/details/${item.id}`}>MOre details</Link>
                            <div className="btn_wrap">
                         <button className="cart">
                            Add to Cart
                         </button>
                         <button className="buy">
                            Buy Product
                         </button>
                         </div>
                        
                </li>
            })
        }
        </ul>
      </Row>
    </Container>
   

}

export default DashBoardPage;