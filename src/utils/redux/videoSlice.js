import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: null,
  },
  reducers: {
    getVideos: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { getVideos } = videoSlice.actions;

export default videoSlice.reducer;
