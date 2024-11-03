import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountStatus: localStorage.getItem('travel-token') || false,
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    toogleAccStatus : {
        reducer: (state) => {
            state.accountStatus =!state.accountStatus;
            localStorage.setItem('travel-token', action.payload);
        },
    }
  },
});



export const { toogleMenu } = accountSlice.actions


export default accountSlice.reducer;