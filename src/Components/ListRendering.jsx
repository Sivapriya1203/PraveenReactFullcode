import React, { useState } from 'react'

function ListRendering() {
     const [list,setList]=useState([
        {name:"adam",id:123,city:"covai"},
        {name:"jhon",id:124,city:"salem"},
        {name:"joe",id:125,city:"erode"}


     ])
  return (
    <div>
        {list.map((x)=>(
            <h1>{x.name}{x.id}{x.city}</h1>))}
    </div>
  )
}

export default ListRendering