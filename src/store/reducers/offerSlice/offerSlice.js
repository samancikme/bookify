import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  isOfferLoad: true,
  isOffersErr: [],
};

const offerSlice = createSlice({
  name: "offerSlice",
  initialState,
  reducers: {
    fetchingOfferData: (state) => {
      state.isOfferLoad = true; 
    },
    fetchedOfferData: (state, action) => {
      state.isOfferLoad = false; 
      state.offers = action.payload;
    },
    fetchedOfferErr: (state, action) => {
      state.isOfferLoad = false;
      state.isOffersErr = action.payload;
    },
  },
});

export const { fetchedOfferData, fetchedOfferErr, fetchingOfferData } =
  offerSlice.actions;

export default offerSlice.reducer;
