
import './unlock.css'
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



 
function UnlockScreen() {

    const [rangeValue, setRangeValue] = useState(50);
    const [imageChanger,setImageChanger]=useState(false)
    

     const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    console.log(rangeValue)

    if(rangeValue>80){
        setImageChanger(true)
    }
  }


  return !imageChanger ? (
    <div className="cards">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-bvT1KQG1JUZEBsvDEyHgt8sY65gNNotzQ&usqp=CAU" />
      <h1>Unlock screen</h1>

      <Form>
        <Form.Group controlId="formRange">
          <Form.Label>Example Range Input</Form.Label>
          <Form.Range
            value={rangeValue}
            onChange={handleRangeChange}
            className="hex"
          />
          <Form.Text id="rangeValueLabel">{rangeValue}</Form.Text>
        </Form.Group>
      </Form>
    </div>
  ) : (
    <div className="cards">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjK-sM0g3djIAoFDDanGKqQe13nriPABplDA&usqp=CAU" />
      <h1 style={{ fontSize: "35px" }}>Touch on lock to lock screen</h1>
      <i class="fa-solid fa-lock" onClick={()=>setImageChanger(false)}></i>
    </div>
  );
}

export default UnlockScreen
