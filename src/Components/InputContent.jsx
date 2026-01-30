import React, { useState } from 'react'

function InputContent() {
    const[input,setInput]=useState("")
const handleClick=()=>{
   setInput(input)
}

  return (
    <div>
 <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
 <button onClick={handleClick}>CLICK</button>
  <h1>{input}</h1> 

    </div>
  )
}

export default InputContent