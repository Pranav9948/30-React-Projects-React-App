import React, { useState } from 'react'
import './alert.css'

function AlertMessage() {

const [hideAlert,setHideAlert]=useState(false)


  return (


   hideAlert ? '' :

    <div className="alerts">
      <div className="alertBox">
        <h4>This will hide automatically after 5 seconds</h4>
        <i class="fa-solid fa-delete-left" onClick={()=>setHideAlert(true)}></i>
      </div>
    </div>
  );

}




export default AlertMessage