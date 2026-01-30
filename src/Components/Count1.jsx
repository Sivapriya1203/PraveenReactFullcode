import React from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

function Count1() {
  const[count,setCount]=React.useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Counting</button>
    </div>
  )
}

export default Count1