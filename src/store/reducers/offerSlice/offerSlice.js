import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  isOffersLoad: false,
  isOffersErr: [],
};

const offerSlice = createSlice({
  name: "offerSlice",
  initialState,
  reducers: {
    fetchingOfferData: (state) => {
      state.isOffersLoad = true; 
    },
    fetchedOfferData: (state, action) => {
      state.isOffersLoad = false; 
      state.offers = action.payload;
    },
    fetchedOfferErr: (state, action) => {
      state.isOffersLoad = false;
      state.isOffersErr = action.payload;
    },
  },
});

export const { fetchedOfferData, fetchedOfferErr, fetchingOfferData } =
  offerSlice.actions;

export default offerSlice.reducer;
