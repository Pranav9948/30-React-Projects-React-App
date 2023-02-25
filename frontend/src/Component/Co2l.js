

import React from 'react'

function Co2l({sColor}) {
    console.log("xc",sColor);
  return (
    <div className="mb-5 mt-5">
      <h1 className="text-center"  style={{color:sColor}}>
        {" "}
        RANDOM COLOR GENERATOR
      </h1>
    </div>
  );
}

export default Co2l