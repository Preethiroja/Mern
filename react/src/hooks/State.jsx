import React from 'react'
import { useState } from 'react'
const State = () => {
    const [count,SetCount]=useState(0);
    const [likecount,SetlikeCount]=useState(0);
    const[dislikeCount,SetdislikeCount]=useState(0);
  return (
    <div>
        <h1>useState example</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>SetCount(count+1)}>Increase</button>
        <h2>Likes:{likecount}</h2>
        <button onClick={()=>SetlikeCount(likecount+1)}>❤️{likecount}</button>
        <h2>Dislikes: {dislikeCount}</h2>
        <button onClick={() => SetdislikeCount(dislikeCount + 1)}>👎{dislikeCount}</button>
    </div>
  )
}

export default State