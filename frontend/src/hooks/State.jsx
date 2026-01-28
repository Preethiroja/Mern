import React, { useEffect, useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)

    //useEffect for both count and like 
    // useEffect(()=>{
    //   console.log("from useEffect")
    // })
    
    //for only like useEffect
    useEffect(()=>{
      console.log("from useEffect")
    },[like])
  return (
    <div>
        <h2>Count: {count}</h2>
        <h2>like: {like}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setLike(like+1)}>👍</button>
        <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State