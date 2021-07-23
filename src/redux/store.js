import { configureStore } from "@reduxjs/toolkit";
// Slices
import userSlice from "./userSlice";
import darkModeSlice from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    darkMode: darkModeSlice,
  },
});
