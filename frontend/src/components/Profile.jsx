import React, { useContext } from 'react'
import { userContext } from '../App'

const Profile = ({age,skills }) => {
  const name=useContext(userContext)
  return (
    <div>
        <h1>I am {name} {age} years old</h1>
        <ul>
        {skills.map((skills)=>(
            <li>{skills}</li>
        ))}
        </ul>
    </div>
  )
}

export default Profile