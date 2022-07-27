import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function ChildClass(props) {
  const context = useContext(CounterContext);

  const { handleIncrement, handleDecrement } = context;

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default ChildClass;
