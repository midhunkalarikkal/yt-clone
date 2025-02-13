import stateSlice from "./stateSlice";
import searchSlice from './searchSlice';
import persistReducer from './videoSlice';
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    state: stateSlice,
    videos: persistReducer,
    search: searchSlice,
  },
});

export const persistor = persistStore(appStore)
export default appStore;
