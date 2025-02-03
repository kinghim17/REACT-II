import React from "react";

function App() {
  return (
    <div>
      <Greeting name="John" age={25} />
      <Greeting name="Doe" age={30} />
    </div>
  );
}

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default App;

/*In React, props (short for properties) are used to pass data from one component to another. They are read-only and allow components to be dynamic by customizing their behavior or appearance based on the data passed to them.

*/