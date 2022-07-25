import React from "react";
import Rainbow from "./Rainbow";

const SimpleHOC = () => {
  return (
    <div style={{ textAlign: "center", fontWeight: "bold" }}>HOC example</div>
  );
};

export default Rainbow(SimpleHOC);
