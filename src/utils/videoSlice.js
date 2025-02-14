import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    items: null,
    channelData: [],
    comments: [],
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
        state.comments[existingCommentsIndex] = { videoId, comments: items }; // Update them
      } else {
        state.comments.push({ videoId, comments: items });
      }
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, videoSlice.reducer);

export const { addPopularVideos, addChannelData, addComments } =
  videoSlice.actions;
export default persistedReducer;
