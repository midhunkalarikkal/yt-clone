import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    isSidebarOpen: true,
    isSmallSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    openSmallSidebar: (state) => {
      state.isSmallSidebarOpen = true;
    },
    closeSmallSidebar: (state) => {
      state.isSmallSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSmallSidebar, closeSmallSidebar } = stateSlice.actions;
export default stateSlice.reducer;
