import React, { useEffect, useState } from "react";

const App = () =>{

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  const dataA = () => {
    console.log("A ki value change ho gai")
  }
  const dataB = () => {
    console.log("B ki value change ho gai")
  }

  useEffect(() => {
    dataA();
  },[a])
  
  useEffect(() => {
    dataB();
  },[b])
  

  return(
    <div>
      <h1>A is {a} </h1>
      <h1>B is {b} </h1>
      <button
      onClick={() => {
        seta(a+1)
      }}>A click</button>
      <button onClick={() => {
        setb(b+1)
      }}>B click</button>
    </div>
  )
}

export default App;