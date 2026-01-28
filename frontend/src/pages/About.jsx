import React, { useEffect, useState } from 'react'

const About = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>Users</h2>    
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.username}</h4>
          <h5>{user.email}</h5>
        </div>
      ))}
    </div>
  )
}

export default About