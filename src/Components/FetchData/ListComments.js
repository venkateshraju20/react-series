import React, { useEffect, useState } from "react";
import useCustomAPI from "./useCustomAPI";

function ListComments() {
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

  const [commentAPI] = useCustomAPI(url);

  return (
    <>
      {commentAPI &&
        commentAPI.map((comment, index) => (
          <div style={{ textAlign: "center" }} key={index}>
            <p>{comment.email}</p>
          </div>
        ))}
    </>
  );
}

export default ListComments;
