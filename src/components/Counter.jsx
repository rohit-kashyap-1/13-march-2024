import React from 'react'
import { useState } from 'react';
export default function Counter() {
    let [counter,setCounter] =  useState(1)

    const Increment = ()=>{
      counter++
      setCounter(counter)
    }
    const Decrement = ()=>{
      counter--
      setCounter(counter)
    }
    return (
     <div className='App'>
      <h1>{counter}</h1>
      <button onClick={Decrement}>Decrement</button> 
      <button onClick={Increment}>Increment</button>
     </div>
    );
}
