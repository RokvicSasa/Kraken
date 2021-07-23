import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: 'dark',
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = "dark";
    },
    setLightMode: (state) => {
      state.darkMode = "light";
    },
    setMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode, setLightMode, setMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
