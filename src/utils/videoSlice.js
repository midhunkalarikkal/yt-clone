import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    items: null,
    channelData: [],
    comments: [],
    searchedItems: null
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.items = action.payload;
    },
    addChannelData: (state, action) => {
      const exist = state.channelData.some(
        (data) => data.id === action.payload.id
      );
      if (!exist) {
        state.channelData.push(action.payload);
      }
    },
    addComments: (state, action) => {
      const { videoId, items } = action.payload;
      const existingCommentsIndex = state.comments.findIndex(
        (comment) => comment.videoId === videoId
      );

      if (existingCommentsIndex !== -1) {
        state.comments[existingCommentsIndex] = { videoId, comments: items };
      } else {
        state.comments.push({ videoId, comments: items });
      }
    },
    addSearchedItems: (state, action) => {
      state.searchedItems = action.payload;
    },
    removeSearchedItems: (state,action) => {
      state.searchedItems = null
    }
  },
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["searchedItems"],
};

const persistedReducer = persistReducer(persistConfig, videoSlice.reducer);

export const { addPopularVideos, addChannelData, addComments, addSearchedItems, removeSearchedItems } =
  videoSlice.actions;
export default persistedReducer;
