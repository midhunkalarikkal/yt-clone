import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSideMenu, closeMenu } = stateSlice.actions;
export default stateSlice.reducer;
