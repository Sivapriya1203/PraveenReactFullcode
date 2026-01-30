import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Landing() {
  return (
    <div>
        <h1>LANDING PAGE</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h1>
         <a href="/home">Go to Home</a> <br />
          <Link to="/about">Go to About</Link> <br />
          <NavLink to="/contact">Go to Contact</NavLink> <br />
          <Link to="/users">Users Page</Link> <br />
          <Link to="/crud">Crud Page</Link>
    </div>
  )
}

export default Landing