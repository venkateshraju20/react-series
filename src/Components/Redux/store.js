import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { commentsReducer } from "./reducers";

// const reducers = combineReducers({ users: commentsReducer });

// const enhancedComposer = composeWithDevTools(applyMiddleware(thunk));

// export const store = createStore(reducers, enhancedComposer);

// configureStore combine all reducers (like combine reducers),
// automatically added Redux thunk and Redux DevTools Extension connection
export const store = configureStore({
  reducer: {
    users: commentsReducer,
  },
});
