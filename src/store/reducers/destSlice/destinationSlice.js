import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
  isDestLoad: true,
  isDestErr: [],
};

const destinationSlice = createSlice({
  name: "destinationSlice",
  initialState,
  reducers: {
    fetchingDestData: (state, action) => {
      state.isDestLoad = true;
    },
    fetchedDestData: (state, action) => {
      state.isDestLoad = false;
      state.destinations = action.payload;
    },
    fetchedDestErr: (state, action) => {
      state.isDestLoad = false;
      state.isDestErr = action.payload;
    },
  },
});

export const { fetchingDestData, fetchedDestErr, fetchedDestData } =
  destinationSlice.actions;

export default destinationSlice.reducer;
