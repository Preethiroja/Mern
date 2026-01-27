import React from 'react'
const Profile = ({name,age,skills }) => {
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