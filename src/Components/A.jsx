import React, { useState,createContext } from 'react'
import B from './B'

export const usercontext=createContext()

function A() {
    const[user,setUser]=useState("priya")
  return (
    <div className='box'>
        COMPONENT A <br />
        {`Helllo ${user}`}
        <usercontext.Provider value={user}>
               <B/>

        </usercontext.Provider>



       
    </div>
  )
}

export default A