import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    isSidebarOpen: true,
    isSmallSidebarOpen: true,
    isUserSideMenuOpen: false,
    isUserLoggedIn: false,
    isAppearanceMenuOpen: false,
    user: null,
    limitReached: false,
    isDarkTheme: false,
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
    toggleAppearanceMenu: (state) => {
      state.isAppearanceMenuOpen = !state.isAppearanceMenuOpen;
    },
    makeDarkTheme: (state) => {
      state.isDarkTheme = true;
    }
    ,
    makeLightTheme: (state) => {
      state.isDarkTheme = false;
    }
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
  setYoutubeLimitReached,
  toggleAppearanceMenu,
  makeDarkTheme,
  makeLightTheme
} = stateSlice.actions;
export default stateSlice.reducer;
