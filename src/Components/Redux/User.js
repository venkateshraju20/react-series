import React from "react";

function User({ comment }) {
  return <li>{comment.email}</li>;
}

export default User;
