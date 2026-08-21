import React, { useState } from "react";

const App = () => {
  const [tital, setTital] = useState("")

  const submitHandling = (e) => {
    e.preventDefault();
    console.log(tital);
    setTital("")
  };

  return (
    <div>
      <form onSubmit={submitHandling}>
        <input type="text" placeholder="Enter your name" 
        value={tital}
        onChange={(e)=>{
          setTital(e.target.value)
        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;