import React, { useState } from "react";
import ChildClass from "./ChildClass";
import CounterContext from "./CounterContext";

function ParentClass() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <CounterContext.Provider value={{ handleIncrement, handleDecrement }}>
        <center>
          <h1>{counter}</h1>
          <ChildClass />
          {/* <ChildClass increment={handleIncrement} decrement={handleDecrement} /> */}
        </center>
      </CounterContext.Provider>
    </>
  );
}

export default ParentClass;
