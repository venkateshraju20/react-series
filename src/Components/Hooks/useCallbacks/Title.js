import React from "react";

function Title() {
  console.log("title rendering");
  return <div>useCallback Example</div>;
}

export default React.memo(Title);
