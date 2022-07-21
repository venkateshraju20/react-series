import React, { useCallback, useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Title from "./Title";

import "../../../App.css";

function UseCallbacks() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  //place below functions outside function component if empty dependency array inside useCallback
  const handleAge = useCallback(() => setAge(age + 1), [age]);
  const handleSalary = useCallback(() => setSalary(salary + 10000), [salary]);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Counter text="Age" count={age} />
        <Button handleClick={handleAge}>Increment Age</Button>
        <Counter text="Salary" count={salary} />
        <Button handleClick={handleSalary}>Increment Salary</Button>
      </header>
    </div>
  );
}

export default UseCallbacks;
