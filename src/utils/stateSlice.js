import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name : "state",
    initialState : {
        isMenuOpen : true,
    },
    reducers : {
        toggleSideMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { toggleSideMenu } = stateSlice.actions;
export default stateSlice.reducer;