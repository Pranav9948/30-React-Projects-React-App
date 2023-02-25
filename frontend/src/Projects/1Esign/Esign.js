import React, { useState } from 'react'
import Title from '../../Component/Title'
import './Esign.css'

function Esign() {

    const [name,setName]=useState('')
    const [date,setDate]=useState('')

  return (
    <div className="Esignature">
      <input
        className="fieldz"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="fieldz"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <Title text={name} dates={date} />
    </div>
  );
}

export default Esign