import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  src: "",
  IsPlaying: false,
};

const AudioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    updateSong(state, action) {
      state.src = action.payload;
    },
    setIsPlaying(state, action) {
      state.IsPlaying = !state.IsPlaying;
      // state.IsPlaying = action.payload;
    },
  },
});

export const { updateSong, setIsPlaying } = AudioSlice.actions;
export default AudioSlice.reducer;
