import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
  isDestinationLoad: false,
  isDestinationErr: [],
};

const destinationSlice = createSlice({
  name: "destinationSlice",
  initialState,
  reducers: {
    fetchingDestData: (state, action) => {
      state.isDestinationLoad = true;
    },
    fetchedDestData: (state, action) => {
      state.isDestinationLoad = false;
      state.destinations = action.payload;
    },
    fetchedDestErr: (state, action) => {
      state.isDestinationLoad = false;
      state.isDestinationErr = action.payload;
    },
  },
});

export const { fetchingDestData, fetchedDestErr, fetchedDestData } =
  destinationSlice.actions;

export default destinationSlice.reducer;
