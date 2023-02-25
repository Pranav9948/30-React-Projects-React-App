import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


function Carde({ p, cartP, setCartP }) {


useEffect(()=>{

 

},[cartP])


  return (
    <>
      <Card style={{ width: "18rem" }} className="m-5">
        <Card.Img variant="top" src={p.Image} />
        <Card.Body>
          <Link to={`/singleProduct/${p.id}`}>
            {" "}
            <Card.Title>{p.name}</Card.Title>{" "}
          </Link>
          <Card.Text>{p.price}</Card.Text>
          {
            console.log("345",cartP)
          }

          {cartP.includes(p) ? (
            <Button
              variant="primary"
              onClick={() =>
                setCartP(
                  cartP.filter((csp) => {
                    return csp.id !== p.id;
                  })
                )
              }
            >
              Remove from cart
            </Button>
          ) : (
            <Button variant="primary" onClick={() => setCartP([...cartP, p])}>
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Carde