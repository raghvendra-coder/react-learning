import React, { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([])
  
  const getData = async() => {
    
    const response = await axios.get('https://picsum.photos/id/0/info')
    
    setData (response.data)
    useEffect
  
  }

  return(
    <div>
      <button onClick={getData}>click</button>
      <div>
        {data.map( (elem, idx) => {
          return <h1>hello, {elem.author} {idx} </h1>
        })}
      </div>
    </div>

  )
}

export default App;