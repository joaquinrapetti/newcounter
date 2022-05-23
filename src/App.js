import React, { useState } from "react";
// import Counter from "./components/Counter";
import WarningNotUsed from "./components/WarningNotUsed";
import ListOfClicks from "./components/ListOfClicks";
import "./App.css";

const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  clicks: 0,
  message: "counter state",
};

const App = () => {
  // const [counter, setCounter] = useState(0);
  // Separate States
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // Unique State
  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
    });
    setClicks((prevClicks) => {
      return [...prevClicks, "L"];
    });
  };

  const handleClickRight = () => {
    const newCounterState = {
      ...counters,
      right: counters.right + 1,
    };
    setCounters(newCounterState);
    setClicks((prevClicks) => {
      return [...prevClicks, "R"];
    });
  };

  console.log("render!");

  // // Helper Function
  // const handleClick = () => {
  //   setCounter((prevCounter) => {
  //     return prevCounter + 1;
  //   });
  // };

  // const handleClickReset = () => {
  //   setCounter(0);
  // };

  // const isEven = counter % 2 === 0;

  return (
    <div>
      {/* <p>El valor del contador es:</p>
      <Counter number={counter} /> */}
      {/* <button
        onClick={() =>
          setCounter((prevCounter) => {
            return prevCounter + 1;
          })
        } // Without helper function
      >Increment</button> */}
      {/* <p>{isEven ? "Is Even" : "Is Odd"}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickReset}>Reset</button> */}
      <div className="counterRow">
        <h1>{counters.left}</h1>
        <button onClick={handleClickLeft}>Left</button>
        <button onClick={handleClickRight}>Right</button>
        <h1>{counters.right}</h1>
      </div>
      <h1>Total Clicks: {clicks.length}</h1>
      <h1>{counters.message}</h1>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

export default App;
