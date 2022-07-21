import React, { useEffect } from "react";

import "../../../App.css";

function Child(props) {
  console.log("rendering child");

  useEffect(() => {
    props.fetchData("users");
  }, []);

  return <div>Child component!</div>;
}

export default React.memo(Child);
