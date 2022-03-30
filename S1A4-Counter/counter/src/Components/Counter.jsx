import React from 'react'

export const Counter = ({count,setCount}) => {
  return (
    <div>
        <h1>{count}</h1>
        <br/>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <button onClick={()=>setCount(count*2)}>Double</button>
    </div>
  )
}
