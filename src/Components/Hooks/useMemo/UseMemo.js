import React, { useMemo, useState } from "react";

import "../../../App.css";

function UseMemo() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const handleOne = () => setFirst(first + 1);
  const handleTwo = () => setSecond(second + 1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return first % 2 === 0;
  }, [first]);

  return (
    <div className="App-header">
      <p>useMemo Example</p>
      <button onClick={handleOne}>Count one - {first}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={handleTwo}>Count two - {second}</button>
    </div>
  );
}

export default UseMemo;
