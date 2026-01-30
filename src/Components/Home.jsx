import React, { useState } from 'react'

function Home() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>HOME PAGE</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cum distinctio atque, magnam dolorem illum doloremque quidem. Corporis sunt et veniam, ex atque ducimus molestias, deserunt possimus laudantium aut eius.</h1>

<button onClick={()=>setCount(count+1)}>CLICK</button>
<br />
{count}
    </div>
  )
}

export default Home