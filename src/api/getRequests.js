import axios from "axios";
import {
  fetchedDestData,
  fetchedDestErr,
  fetchingDestData,
} from "../store/reducers/destSlice/destinationSlice";
import {
  fetchedOfferData,
  fetchedOfferErr,
  fetchingOfferData,
} from "../store/reducers/offerSlice/offerSlice";

export const getAllDestData = (url) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingDestData());
      const res = await axios.get(`${url}/destinations?lang=en`);
      await dispatch(fetchedDestData(res.data));
    } catch (err) {
      console.log(err);
      dispatch(fetchedDestErr(err.message));
    }
  };
};

export const getAllOfferData = (url) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingOfferData());
      const res = await axios.get(`${url}/offers?lang=en`);
      await dispatch(fetchedOfferData(res.data));
    } catch (err) {
      console.log(err);
      dispatch(fetchedOfferErr(err.message));
    }
  };
};
