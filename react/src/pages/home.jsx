import React from 'react'
import { Link } from 'react-router-dom' 
const home = () => {
  return (
    <div>
      <h1>home</h1>
      <ul>
        <li>
          <Link to='/state'>UseState</Link>
        </li>
      </ul>
      </div>
  )
}

export default home