import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from "./actions";

import "../../App.css";
import User from "./User";

function FetchData() {
  const fetchUser = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  const fetchComments = () => {
    const users = fetchUser.comments;
    return (
      <ul>
        {users.length > 0 &&
          users.map((comment) => <User key={comment.id} comment={comment} />)}
      </ul>
    );
  };

  return (
    <div className="App-header">
      {fetchUser.isLoading
        ? "Loading..."
        : fetchUser.error.length > 0
        ? fetchUser.error
        : fetchComments()}
    </div>
  );
}

export default FetchData;
