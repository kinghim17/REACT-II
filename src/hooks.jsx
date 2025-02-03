//use memo
import React, { useState, useMemo } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Using useMemo to memoize the computed value
  const expensiveComputation = useMemo(() => {
    console.log("Expensive computation running...");
    return count * 2; // Simulating an expensive calculation
  }, [count]);

  return (
    <div>
      <h1>Counter App with useMemo</h1>
      <p>Count: {count}</p>
      <p>Expensive Computation (Count * 2): {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <p>Other State: {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Increment Other State
      </button>
    </div>
  );
}

export default CounterApp;


// use effect

import React, { useState, useEffect } from "react";

function CounterApp(){
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Using useEffect to perform a side effect when 'count' changes
  useEffect(() => {
    console.log(`Count updated: ${count}`);
    document.title = `Count: ${count}`; // Update the document title
  }, [count]); // Dependency array: Only run when 'count' changes

  // Using useEffect to run on component mount
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted"); // Cleanup function
    };
  }, []); // Empty dependency array: Runs only once on mount/unmount

  return (
    <div>
      <h1>Counter App with useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <p>Other State: {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Increment Other State
      </button>
    </div>
  );
}

export default CounterApp;

//use-callback
import React, { useState, useCallback } from "react";

// Child component
const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function CounterApp() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Memoized callback for incrementing the count
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies: function reference never changes

  // Memoized callback for incrementing otherState
  const incrementOtherState = useCallback(() => {
    setOtherState((prevOtherState) => prevOtherState + 1);
  }, []); // No dependencies: function reference never changes

  return (
    <div>
      <h1>Counter App with useCallback</h1>
      <p>Count: {count}</p>
      <Button onClick={incrementCount} label="Increment Count" />

      <p>Other State: {otherState}</p>
      <Button onClick={incrementOtherState} label="Increment Other State" />
    </div>
  );
}

export default CounterApp;


use-ref

import React, { useRef, useState } from "react";

function UseRefExample() {
  const inputRef = useRef(null); // For DOM access
  const renderCount = useRef(1); // For mutable state
  const [value, setValue] = useState("");

  // Focus input field when button is clicked
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.border = "2px solid blue"; // Modify the DOM element
  };

  // Increment render count (note: this doesn't trigger a re-render)
  renderCount.current += 1;

  return (
    <div>
      <h1>useRef Example</h1>
      <p>Component render count: {renderCount.current}</p>
      <input
        ref={inputRef} // Attach the ref to the input element
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>Current Value: {value}</p>
    </div>
  );
}

export default UseRefExample;



//custom hooks
