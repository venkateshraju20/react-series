import React from "react";
import Rainbow from "../HOC/Rainbow";

function About() {
  return <div style={{textAlign: "center", fontWeight: "bold"}}>HOC example</div>;
}

export default Rainbow(About);
