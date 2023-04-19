import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
};

const Web3slice = createSlice({
  name: "Web3",
  initialState,
  reducers: {
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { updateAddress } = Web3slice.actions;
export default Web3slice.reducer;
