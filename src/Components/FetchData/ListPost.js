import axios from "axios";
import React from "react";
import useCustomAPI from "./useCustomAPI";

function ListPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [postApi] = useCustomAPI(url);

  return (
    <>
      {postApi &&
        postApi.map((item, index) => (
          <div style={{ textAlign: "center" }} key={index}>
            <p>{item.title}</p>
          </div>
        ))}
    </>
  );
}

export default ListPost;
