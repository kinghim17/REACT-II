import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>React Counter App</h1>
      <button onClick={onClickHandler}>
        Counter {count}
      </button>
    </div>
  );
}

export default App;