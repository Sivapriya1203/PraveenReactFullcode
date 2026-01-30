import React, { useContext } from 'react'
import { AgeContext, NameContext } from './Praveen'

function Praveen1() {
    const name=useContext(NameContext)
    const age=useContext(AgeContext)
  return (
    <div>
   <h1>{name} is {age} years old</h1>
   
    </div>
  )
}

export default Praveen1 