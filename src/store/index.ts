import { configureStore } from "@reduxjs/toolkit";
import counterState from "./counter.state";

export const store = configureStore({
  reducer: {
    counter: counterState
  }
})