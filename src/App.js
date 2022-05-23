import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("render!");

  // Helper Function
  const handleClick = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  const handleClickReset = () => {
    setCounter(0);
  };

  const isEven = counter % 2 === 0;

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={counter} />
      {/* <button
        onClick={() =>
          setCounter((prevCounter) => {
            return prevCounter + 1;
          })
        } // Without helper function
      >Increment</button> */}
      <p>{isEven ? "Is Even" : "Is Odd"}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default App;
