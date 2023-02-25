import React, { useEffect, useState } from 'react'
import './btnClickGetData.css'
import Button from "react-bootstrap/Button";
import axios from 'axios'



function BtnClickGetData() {

  const [datas,setDatas]=useState('')




  useEffect(()=>{

    try{

 axios.get(
      `https://jsonplaceholder.typicode.com/${datas}`
 ).then((x)=>{

   setDatas(x);

   console.log("cc",datas)
 })


}

catch(err){

  console.log(err)
}

  },[datas])



  return (
    <>
      <div className="getDataProject">
        <Button variant="primary" onClick={() => setDatas("comments")}>
          Comments
        </Button>{" "}
        <Button variant="primary" onClick={() => setDatas("posts")}>
          posts
        </Button>{" "}
        <Button variant="primary" onClick={() => setDatas("users")}>
          users
        </Button>{" "}
      </div>


       {
 
         datas && datas.map((x)=>{

            return (

              <h1>{x.name}</h1>
            )
          })

       }


    </>
  );
      }


export default BtnClickGetData