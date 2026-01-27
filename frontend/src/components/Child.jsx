import React from 'react'

const Child = ({send}) => {
  return (
    <div>
        <button onClick={()=>send("Hello from child")}>
            send Data
        </button>
    </div>
  )
}

export default Child