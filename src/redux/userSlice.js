import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsername: (state, action) => {
      state.username = action.payload;
    },
    removeUsername: (state) => {
      state.username = null;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { addUsername, removeUsername, addToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
