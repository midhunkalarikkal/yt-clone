import stateSlice from "./stateSlice";
import videoSlice from './videoSlice';
import searchSlice from './searchSlice';
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    state: stateSlice,
    videos: videoSlice,
    search: searchSlice
  },
});

export default appStore;
