import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
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