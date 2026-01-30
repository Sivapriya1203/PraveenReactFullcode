import React, { useEffect, useState } from 'react'

function EffectExample() {
  const[user,setUser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res)=>res.json())
    .then((msg)=>setUser(msg))
    .catch((err)=>console.log(err))
    console.log("data fetched")
  },[])
  return (
    <div>
      {user.map((m)=>(
        <li key={m.id}>
          {m.id}--   {m.title}--    {m.body}
        </li>
      ))}

    </div>
  )
}

export default EffectExample