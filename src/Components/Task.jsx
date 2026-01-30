import React, { useState } from 'react'
import image from '../../src/assets/bird.jpg'
import  './Task.css'

function Task() {
    const[count,setCount]=useState(0)
    // const[count1,setCount1]=useState(20)

    const handleClick=()=>{
        setCount(count+1)
        console.log(count)
    }
    const handleClick1=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1 style={{color:'red',fontSize:"20px"}}>{count}</h1>
        
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleClick1}>Decrease</button>
        {/* <img src='https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg'/> */}
          {/* <img src={image}/> */}
      
    </div>
  )
}

export default Task