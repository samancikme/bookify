import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favTours: JSON.parse(localStorage.getItem("favTours")) || [],
  isMenuAct: false,
  isLangMenuAct: false,
  isModalAct: false,
  isRegModalAct: false,
  lang: "en",
  authType: "sign-up",
}

const pageSlice = createSlice({
  name: "pageSlice",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuAct = !state.isMenuAct
    },
    toggleLangMenu: (state) => {
      state.isLangMenuAct = !state.isLangMenuAct
    },
    toggleModal: (state) => {
      state.isModalAct = !state.isModalAct
    },
    toggleRegModal: (state) => {
      state.isRegModalAct = !state.isRegModalAct
    },
    changeLang: (state, action) => {
      state.lang = action.payload
    },
    toggleAuthType: (state, action) => {
      state.authType = action.payload
    },
    addToFavorites: (state, action) => {
      const tour = action.payload
      if (!state.favTours.find((item) => item.id === tour.id)) {
        state.favTours.push(tour)
        localStorage.setItem("favTours", JSON.stringify(state.favTours))
      }
    },
    removeFromFavorites: (state, action) => {
      const tourId = action.payload
      state.favTours = state.favTours.filter((item) => item.id !== tourId)
      localStorage.setItem("favTours", JSON.stringify(state.favTours))
    },
  },
})

export const {
  toggleMenu,
  toggleLangMenu,
  changeLang,
  toggleModal,
  addToFavorites,
  removeFromFavorites,
  toggleAuthType,
  toggleRegModal,
} = pageSlice.actions

export default pageSlice.reducer