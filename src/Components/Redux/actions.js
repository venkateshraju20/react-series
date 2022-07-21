import axios from "axios";
import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from "./actionTypes";

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchData = (comments) => {
  return {
    type: FETCH_SUCCESS,
    payload: comments,
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const fetchAPI = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
      const res = await axios.get(url);
      dispatch(fetchData(res.data));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};
