import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuAct: false,
  isLangMenuAct: false,
  lang: "en",
};

const pageSlice = createSlice({
  name: "pageSlice",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuAct = !state.isMenuAct;
    },
    toggleLangMenu: (state) => {
      state.isLangMenuAct = !state.isLangMenuAct;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { toggleMenu, toggleLangMenu, changeLang } = pageSlice.actions;

export default pageSlice.reducer;
