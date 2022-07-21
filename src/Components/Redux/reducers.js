import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";

const initialValue = {
  isLoading: false,
  comments: [],
  error: "",
};

export const commentsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        comments: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        isLoading: false,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
