import React from "react";
import DefaultHeader from "../default-header";
import {Container,Row,Col} from "reactstrap";
import banner from "../images/1697527183231.avif"
const LandingPage = () => {
 return <><Container >
 <DefaultHeader/>
 </Container>
 <Container className="banner " fluid>

    <Row xs="1" md="2">
        <Col>
        <img src={banner} alt="val"></img>
        <h1>India's Most-Loved Payments App</h1>
        <p>
        Recharge & pay bills, book flights & movie tickets, open a <br></br>
        savings account, invest in stocks & mutual funds, and do a lot more.
        </p>
        </Col>


    </Row>
 </Container>
 </>
}


export default LandingPage;