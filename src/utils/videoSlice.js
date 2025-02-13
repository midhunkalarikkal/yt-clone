import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        items : null,
        channelData: [],
    },
    reducers : {
        addPopularVideos : (state,action) => {
            state.items = action.payload;
        },
        addChannelData : (state, action) => {
            const exist = state.channelData.some(data => data.id === action.payload.id);
            if(!exist){
                state.channelData.push(action.payload)
            }
        }
    }
});

const persistConfig = {
    key : "root",
    storage,
};

const persistedReducer = persistReducer( persistConfig, videoSlice.reducer )

export const { addPopularVideos,addChannelData } = videoSlice.actions;
export default persistedReducer;