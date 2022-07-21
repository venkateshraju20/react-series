import React, { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";

import "../../../App.css";

const array = ["one", "two", "three"];

function Parent() {
  const [data, setData] = useState(0);

  const str = "this is checking";

  //   const fetchData = async (type) => {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/${type}`
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //     return json;
  //   };

  const fetchData = useCallback(async (type) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${type}`
    );
    const json = await response.json();
    return console.log(json);
  }, []); //place outside function component if empty dependency array inside useCallback

  useEffect(() => {
    fetchData("todos");
  }, []);

  //   const array = useMemo(() => {
  //     return ["one", "two", "three"];
  //   },[]); //place outside function component if empty dependency array inside useMemo

  return (
    <div className="App">
      <header className="App-header">
        <h2>Count: {data} </h2>
        <p>
          <button type="button" onClick={() => setData(data + 1)}>
            Add Counter
          </button>
        </p>
        <Child str={str} fetchData={fetchData} />
      </header>
    </div>
  );
}

export default Parent;
