import React from 'react'
import { useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);

  function increment(){
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    console.log("Before:", count);
    setCount(count--);
    console.log("AFTER:", count);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
    <h1>The Counter App</h1>
    <br/>
    <p>Current Count is : {count}</p>
    <button onClick={increment}>➕Increment</button>
    <button onClick={decrement}>➖Decrement</button>
    <button onClick={reset}>0️⃣reset</button>
    </div>
  )
}

export default Counter