import stateSlice from "./stateSlice";
import videoSlice from './videoSlice';
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    state: stateSlice,
    videos: videoSlice,
  },
});

export default appStore;
