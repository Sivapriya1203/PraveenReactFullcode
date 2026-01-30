import React from 'react'
import Praveen1 from './Praveen1'

 export const NameContext=React.createContext()
 export const AgeContext=React.createContext()
function Praveen() {

  
  return (
    <div>
      <NameContext.Provider value={"kumar"}>
        <AgeContext.Provider value={21}>
          <Praveen1/>
        </AgeContext.Provider>
      </NameContext.Provider>
  
    </div>
  )
}

export default Praveen