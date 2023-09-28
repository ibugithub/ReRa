import {configureStore} from "@reduxjs/toolkit";
import {greetingReducer} from "./reducers/greetSlice";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  }
});

export default store;