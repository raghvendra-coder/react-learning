// // import React from "react";

// // const App = () =>{
// //   // localStorage.clear();

// //   localStorage.setItem("name", "Raghvendra")
// //   localStorage.setItem("age", "20")
// //   localStorage.setItem("class", "4th")

// //   const name = localStorage.getItem("name");

// //   console.log(name); // Raghvendra

// //   localStorage.removeItem("name");



// //   return(
// //     <div>hello</div>
// //   )
// // }
// // export default App


// import React, { useState } from "react";

// function App() {

//   const user = () => {
//     username: "raghvendra",
//     age: 15,
//     city: Bhopal
//   } 


//   localStorage.setItem("name", JSON.stringify(user))
//   // const [name, setName] = useState("");

//   // const saveData = () => {
//   //   localStorage.setItem("username", name);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={saveData}>Save</button>
//     </div>
//   );
// }

// export default App;


import React from "react";

function App() {

  // Object
  const user = {
    username: "Raghvendra",
    age: 21,
    city: "Bhopal",
  };

  // 1. setItem()
  const saveData = () => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Data Saved");
  };

  // 2. getItem()
  const getData = () => {
    const data = localStorage.getItem("user");

    if (data) {
      const userData = JSON.parse(data);
      console.log(userData);
      alert(userData.username);
    } else {
      alert("No Data Found");
    }
  };

  // 3. removeItem()
  const removeData = () => {
    localStorage.removeItem("user");
    console.log("Data Removed");
  };

  // 4. clear()
  const clearData = () => {
    localStorage.clear();
    console.log("All Data Cleared");
  };

  // 5. key()
  const getKey = () => {
    console.log("First Key :", localStorage.key(0));
  };

  // 6. length
  const getLength = () => {
    console.log("Total Keys :", localStorage.length);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Local Storage Methods</h1>

      <button onClick={saveData}>1. Save Data</button>

      <br /><br />

      <button onClick={getData}>2. Get Data</button>

      <br /><br />

      <button onClick={removeData}>3. Remove Data</button>

      <br /><br />

      <button onClick={clearData}>4. Clear All Data</button>

      <br /><br />

      <button onClick={getKey}>5. Get First Key</button>

      <br /><br />

      <button onClick={getLength}>6. Total Keys</button>
    </div>
  );
}

export default App;