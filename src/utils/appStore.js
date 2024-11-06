import stateSlice from "./stateSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    state: stateSlice,
  },
});

export default appStore;
