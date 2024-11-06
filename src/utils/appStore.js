import { configureStore } from "@reduxjs/toolkit";
import stateSlice from './stateSlice';

const appStore = configureStore({
   reducer : {
    state : stateSlice
   }
})

export default appStore;