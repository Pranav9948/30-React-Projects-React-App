import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Co2l from '../../Component/Co2l';


function RandomColor() {

    const  colors= ["red","green","yellow","gray","pink","violet","blue","black","white","purple"]
    var randomColor
    var anotherColor


    const [fColor,setFcolor]=useState('')
    const [sColor, setScolor] = useState('');
    

    const buttonClicked=()=>{

       
        const random=  Math.floor(Math.random() * 10);

         randomColor=colors[random]

         console.log("23",randomColor)

              const rands=Math.floor(Math.random() * 10);

               anotherColor=colors[rands]

              console.log("anoth",anotherColor)

          document.body.style.background = randomColor;
          setFcolor(randomColor)
          setScolor(anotherColor)
          
    }

    

   




  return (


    <>

       <Co2l sColor={sColor}/>
       

        
      

      <div className="text-center mt-5">
        <Button variant="primary" onClick={buttonClicked}>
          Primary
        </Button>{" "}
        <Button variant="secondary" onClick={buttonClicked}>
          Secondary
        </Button>{" "}
        <Button variant="success" onClick={buttonClicked}>
          Success
        </Button>{" "}
        <Button variant="warning" onClick={buttonClicked}>
          Warning
        </Button>{" "}
        <Button variant="danger" onClick={buttonClicked}>
          Danger
        </Button>{" "}
        <Button variant="info" onClick={buttonClicked}>
          Info
        </Button>{" "}
        <Button variant="light" onClick={buttonClicked}>
          Light
        </Button>{" "}
        <Button variant="dark" onClick={buttonClicked}>
          Dark
        </Button>
      </div>

      

          


    
    </>
  );
}

export default RandomColor