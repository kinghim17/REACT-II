// normal counter 
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Application</h1>
      <DisplayCount count={count} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}

function DisplayCount({ count }) {
  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
}

function CounterButtons({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrease</button>
    </div>
  );
}

// export default App;

// now what if i want the counter to be part of it 
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Application</h1>
      <DisplayCount count={count} setCount={setCount} />
    </div>
  );
}

function DisplayCount({ count, setCount }) {
  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
