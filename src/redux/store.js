import { configureStore } from "@reduxjs/toolkit";
// Slices
import { userSlice } from "./userSlice";
import darkModeSlice from "./darkModeSlice";
import sidebarSlice from "./sidebarSlice";
import { gameSlice } from "./gameSlice";
import { genreSlice } from "./genreSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    darkMode: darkModeSlice,
    sidebar: sidebarSlice,
    games: gameSlice.reducer,
    genres: genreSlice.reducer,
  },
});
