import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        items : null
    },
    reducers : {
        addPopularVideos : (state,action) => {
            state.items = action.payload;
        }
    }
})

export const { addPopularVideos } = videoSlice.actions;
export default videoSlice.reducer;