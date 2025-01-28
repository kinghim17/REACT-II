import React, { useState } from "react";

function App() {
  // State to store the count
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Counter App</h1>
      {/* Pass count and setCount as props to the Button component */}
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button(props) {
  // Function to handle button click
  function handleClick() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={handleClick}>
      Button Count: {props.count}
    </button>
  );
}

export default App;
