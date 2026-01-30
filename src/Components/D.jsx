import React, { useContext } from 'react'
import { usercontext } from './A'

function D() {
const username=useContext(usercontext)

  return (
    <div className='box'>
        COMPONENT- D <br />
        {`BYE ${username}`}
    </div>
  )
}

export default D