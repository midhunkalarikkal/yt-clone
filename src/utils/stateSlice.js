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
    selectedItem: null,
    isDarkTheme: JSON.parse(localStorage.getItem("isDarkTheme")) || false,
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
    appearanceMenuOpen: (state) => {
      state.isAppearanceMenuOpen = true;
    },
    appearanceMenuClose: (state) => {
      state.isAppearanceMenuOpen = false;
    },
    makeDarkTheme: (state) => {
      state.isDarkTheme = true;
      localStorage.setItem("isDarkTheme", JSON.stringify(true));
    },
    makeLightTheme: (state) => {
      state.isDarkTheme = false;
      localStorage.setItem("isDarkTheme", JSON.stringify(false));
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    removeSelectedItem: (state,) => {
      state.selectedItem = null;
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
  appearanceMenuOpen,
  appearanceMenuClose,
  makeDarkTheme,
  makeLightTheme,
  setSelectedItem,
  removeSelectedItem
} = stateSlice.actions;
export default stateSlice.reducer;
