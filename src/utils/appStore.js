import chatSlice from './chatSlice';
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
    chat: chatSlice,
  },
});

export const persistor = persistStore(appStore)
export default appStore;
