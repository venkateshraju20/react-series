import React from "react";

function Rainbow(WrapppedComponent) {
  const colors = ["red", "green", "blue", "brown", "orange", "grey"];
  const index = Math.floor(Math.random() * colors.length);
  const color = colors[index];

  // Destructuring color variable below since the
  // names of both key and value has the same name

  return (props) => {
    return (
      <div style={{ color }}>
        <WrapppedComponent {...props} />
      </div>
    );
  };
}

export default Rainbow;
