// import React, { useState} from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
  


//   function incrementNum() {
//     setNum(num + 1);
//   }

//   function decrementNum() {
//     setNum(num - 1);
//   }
  
//   return (
//     <div className="container">
//       <h1>{num}</h1>

//       <button onClick={incrementNum}>Increment</button>

//       <button onClick={decrementNum}>Decrement</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";

const App = () => {

  const [Num, setNum] = useState([10, 20, 30]);

  const clickNum = () => {
    const newNum = [...Num]

    setNum(prev => [...prev,40]);    
    // newNum.push(40)
    // setNum(newNum)
    // newNum.pop()
    
  };

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={clickNum}>
        Increase
      </button>
    </div>
  );
};

export default App;