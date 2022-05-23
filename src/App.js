import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("render!");

  return (
    <div>
      <p>El valor del contador es:</p>
      <h1>{counter}</h1>
      <button
        onClick={() =>
          setCounter((prevCounter) => {
            return prevCounter + 1;
          })
        }
      >
        Increment
      </button>
    </div>
  );
};

export default App;
