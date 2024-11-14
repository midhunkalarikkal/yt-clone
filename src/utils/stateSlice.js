import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    isSidebarOpen: true,
    isSmallSidebarOpen: true,
    isUserSideMenuOpen: false,
    isUserLoggedIn: false,
    user: null,
    limitReached: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleUserSideMenu: (state) => {
      state.isUserSideMenuOpen = !state.isUserSideMenuOpen;
    },
    openSmallSidebar: (state) => {
      state.isSmallSidebarOpen = true;
    },
    closeSmallSidebar: (state) => {
      state.isSmallSidebarOpen = false;
    },
    updateUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setYoutubeLimitReached: (state, action) => {
      state.limitReached = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  openSmallSidebar,
  closeSmallSidebar,
  updateUserLoggedIn,
  toggleUserSideMenu,
  setUser,
  setYoutubeLimitReached
} = stateSlice.actions;
export default stateSlice.reducer;
