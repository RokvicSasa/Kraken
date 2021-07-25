import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT, postData } from "../api/Api";

export const signupUser = createAsyncThunk("users/signupUser", async ({ name, email, password }, thunkAPI) => {
  try {
    const response = await fetch("https://mock-user-auth-server.herokuapp.com/api/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    let data = await response.json();
    console.log("data", data);

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      return { ...data, username: name, email: email };
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const loginUser = createAsyncThunk("auth/local", async ({email, password}, thunkAPI) => {
  try {
    postData.body = JSON.stringify({ identifier: email, password: password });
    const response = await fetch(`${API_ENDPOINT}auth/local`, postData);
    let data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("email", data.user.email);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    email: null,
    token: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      return state;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
    addUsername: (state, action) => {
      state.username = action.payload;
    },
    removeUsername: (state) => {
      state.username = null;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    removeEmail: (state) => {
      state.email = null;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.username;
      state.token = payload.jwt;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = "there is an error in logging you into this application. please try again later";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload.user.email;
      state.username = payload.user.username;
      state.token = payload.jwt;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload ? payload.error : "there is an error in logging you into this application. please try again later";
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState, addToken, removeToken, addUsername, removeUsername, addEmail, removeEmail } = userSlice.actions;

export const userSelector = (state) => state.user;
