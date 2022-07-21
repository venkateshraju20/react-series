import React from "react";

function Button({ handleClick, children }) {
  console.log(`${children} rendering`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
