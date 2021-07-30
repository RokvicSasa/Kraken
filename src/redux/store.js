import { configureStore } from "@reduxjs/toolkit";
// Slices
import { userSlice } from "./userSlice";
import darkModeSlice from "./darkModeSlice";
import sidebarSlice from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    darkMode: darkModeSlice,
    sidebar: sidebarSlice,
  },
});
