import React, { useEffect, useState } from 'react';
const Effects = () => {
    const [count,setCount]=useState(0);
     const [user, setUser] = useState([]);
    useEffect(()=>{
        console.log('Component mount');
        return()=>{
            console.log('component unmount');
        }
    },[count]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>
            setUser(data)
        )
    });
  return (
    <div>
        <h1>Use Effect example</h1>
        <h3>count: {count}</h3>
        <button onClick={()=>setCount
            (prev=>prev+1)}>+</button>
            <h1>Users</h1>
            <ul>
                {user.map((user)=>(
                    <li>Name:{user.name},Email:{user.email}<hr/></li>
                ))}
            </ul>
    </div>
  )
}

export default Effects