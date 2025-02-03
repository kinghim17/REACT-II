import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState("My name is Himanshu");

  function updateTitle() {
    setTitle(`My name is ${Math.random()}`);
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title="Title 1" />
      <Header title={title} />
    </div>
  );
}

// Header Component
function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  );
}

export default App;


/*

for re-rendering
useEffect(() => {
        console.log("App component re-rendered");
    })*/ 