import React, { useState } from 'react'

function StateExample() {
const[name,setName]=useState("adam")
 
const handleClick=()=>{
    setName("jhon")
}
// function handleClick(){
//     setName("smith")
// }


  return (
    <div>
       <h1>{name}</h1>
       <button onClick={handleClick}>Click</button>
       <button onClick={()=>setName("joe")}>CLICK1</button>

    </div>
  )
}

export default StateExample