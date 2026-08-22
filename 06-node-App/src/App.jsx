
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    title,
    details,
  };

  const copyTask = [...task];
  copyTask.push(newTask);

  setTask(copyTask);

  setTitle("");
  setDetails("");
 };
 const deleteNote = (idx) =>{
  const copyTask = [...task];
  copyTask.splice(idx,1)

  setTask(copyTask)

 }



   
  return (
    <div className="h-screen lg:flex bg-black text-white">
      {/* Left Side Form */}
      <form
        onSubmit={submitHandler}
        className="flex gap-4 p-10 lg:w-1/2 flex-col items-start"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* Note Title */}
        <input
          type="text"
          placeholder="Enter Note Heading"
          className="px-5 py-2 w-full font-medium border-2 rounded-xl outline-none text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Note Details */}
        <textarea
          placeholder="Write Details"
          className="px-5 py-2 w-full h-32 font-medium border-2 rounded-xl outline-none text-white"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

       <button
          type="submit"
          className="bg-white text-black px-5 py-2 font-medium w-full rounded-xl
                     active:bg-gray-400 transition-colors duration-300"
          >
          Add Note
        </button>
      </form>

      {/* Right Side */}
      <div className="lg:w-1/2 bg-gray-800 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap gap-4 mt-5">

          {task.map((elem, idx) => {
  return (
    <div
      key={idx}
      className="h-52 relative w-52 rounded-2xl bg-white text-black bg-cover bg-[url('https://i.pinimg.com/736x/8a/6b/d8/8a6bd8d67c4f174e793afcf422bc268c.jpg')] p-4"
    >
      <h2 className="text-xl mt-4 leading-tight font-bold">{elem.title}</h2>
      <p className="mt-2 leading-tight text-yellow-900">{elem.details}</p>

      <button onClick={() => {
        deleteNote(idx)
      }} className="bg-red-600 absolute bottom-2 right-6 left-6  cursor-pointer active:scale-95 rounded mb- py-1 text-white font-bold text-xs ">delete</button>
    </div>
  );
})}
        </div>
      </div>
    </div>
  );
}

export default App;