import { configureStore } from "@reduxjs/toolkit";
// Slices
import userSlice from "./userSlice";
import tokenSlice from "./tokenSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    token: tokenSlice,
  },
});
