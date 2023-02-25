import React, { useState } from 'react'
import AlertMessage from '../../Component/AlertMessage'
import Button from "react-bootstrap/Button";

function Alert() {


    const [showAlert,setShowAlert]=useState(false)


    setTimeout(()=>{

        if(showAlert){

            setShowAlert(false)
        }

    },5000)


  return (
    <div>

    {

        showAlert && <AlertMessage/>
    }


      <Button variant="primary" style={{ margin: "300px 600px" }} size="lg" onClick={()=>setShowAlert(true)}>
        show alert
      </Button>{" "}
    </div>
  );
}

export default Alert