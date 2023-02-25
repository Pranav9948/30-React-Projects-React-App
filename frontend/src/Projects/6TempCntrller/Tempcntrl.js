import React, { useState } from 'react'
import './tempCntrl.css'

function Tempcntrl() {

    const [count,setCount]=useState(0)


  return (
    <div className="tempCntrl">
      <button
        className={count > 0 ? `${"tempBtn IncrecolorChange "}` : count===0 ?  `${"tempBtn nuetralcolorChange "}` : count<0 &&  `${"tempBtn DecrecolorChange "}`}
      >
        {count} &#176; c{" "}
      </button>

      <button onClick={() => setCount(count + 1)} className="countBtn">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="countBtn">
        -
      </button>
    </div>
  );


}

export default Tempcntrl