import React, { useState } from 'react'
import "./like3s.css";

function Like3I() {


  

    const [ colorS,setColors]=useState(false)
    const [count,setCount]=useState(0)


  function myFunction(){
       
     setColors(!colorS)
     setCount((prev)=>{
         if(prev===0){
          setCount(count+1)
         }

         else{

          setCount(count-1)
         }
     })

  }

  return (
    <>
 
      <h1>counter {count}</h1>


      <div className="card">
        <div className="head">
          <h1> ProApp</h1>
        </div>



        <div className="cardImg">
          <img
            onClick={myFunction}
            src="https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg"
            alt="dog"
          />
        </div>

        

        <div className={`foot ${colorS ? 'isActive' : 'foot'}`}>
          <i  class="fa-regular fa-heart"></i>
        </div>



      </div>


    </>
  );
}

export default Like3I