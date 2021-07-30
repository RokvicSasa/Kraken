import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  mobileOpen: false,
  notificationOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    openMobile: (state) => {
      state.mobileOpen = true;
    },
    closeMobile: (state) => {
      state.mobileOpen = false;
    },
    openNotification: (state) => {
      state.notificationOpen = true;
    },
    closeNotification: (state) => {
      state.notificationOpen = false;
    },
  },
});

export const { toggleSidebar, openMobile, closeMobile, openNotification, closeNotification } = sidebarSlice.actions;

export default sidebarSlice.reducer;
