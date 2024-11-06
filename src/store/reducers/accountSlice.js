import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountStatus: localStorage.getItem('travel-token') ? true : false 
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    toogleAccStatus : (state) => {
      state.accountStatus = !state.accountStatus
    },
  },
});



export const { toogleMenu } = accountSlice.actions


export default accountSlice.reducer;