import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducers/pageSlice";
import accountSlice from "./reducers/accountSlice";
import destinationSlice from "./reducers/destSlice/destinationSlice";
import offerSlice from "./reducers/offerSlice/offerSlice";

export const store = configureStore({
  reducer: {
    page: pageSlice,
    acc: accountSlice,
    destinations: destinationSlice,
    offers: offerSlice,
  },
});
