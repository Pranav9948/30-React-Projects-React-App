import React, { useState } from 'react'
import Navbarz from '../../Component/Navbarz'
import { faker } from "@faker-js/faker";
import Carde from './Carde';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UseContextEcommerce() {

const [cartP, setCartP] = useState([]);

  faker.seed(100)

const ProductArray = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name:faker.commerce.productName(),
  price:faker.commerce.price(),
  Image:faker.image.cats()
}));





  return (
    <>
      <Navbarz />

      <Row>
      
          {ProductArray.map((p) => {
            return(
              <Col md={4}>
             <Carde p={p} cartP={cartP} setCartP={setCartP} />;
            </Col> 
            )
          })}
        
      </Row>
    </>
  );
}

export default UseContextEcommerce