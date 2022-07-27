import React from "react";

function Counter({ text, count }) {
  console.log(`${text} : ${count}`);
  return (
    <div>
      {text} : {count}
    </div>
  );
}

export default React.memo(Counter);
