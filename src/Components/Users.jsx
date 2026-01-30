import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {

  const {id}=useParams()

  return (
    <div>

      <h1>Userid :{id}</h1>
    </div>
  )
}

export default Users