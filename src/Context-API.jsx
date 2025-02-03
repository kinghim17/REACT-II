import React, { createContext, useState, useContext } from "react";

// Create a Context
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Context API Counter</h1>
      {/* Provide count and setCount to the child components */}
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  // Access count from the context
  const { count } = useContext(CountContext);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <Buttons />
    </div>
  );
}

function Buttons() {
  // Access count and setCount from the context
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
