import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT, postData, getData } from "../helpers/Api";

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
    const response = await fetch(`${API_ENDPOINT}/auth/local`, postData);
    let data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token", data.jwt);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const getUserData = createAsyncThunk("user", async (token, thunkAPI) => {
  try {
    getData.headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(`${API_ENDPOINT}/users/me`, getData);
    let data = await response.json();
    if (response.status === 200) {
      console.log("We got data", data);
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
    token: null,
    username: null,
    email: null,
    avatar: null,
    city: null,
    country: null,
    popup: false,
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
    logout: (state) => {
      state.popup = false;
      localStorage.removeItem("token");
      state.email = null;
      state.username = null;
      state.city = null;
      state.country = null;
      state.avatar = null;
      state.token = null;
      return state;
    },
    togglePopup: (state, action) => {
      state.popup = action.payload;
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
      state.city = payload.user.city;
      state.country = payload.user.country;
      state.avatar = payload.user.avatar;
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
    [getUserData.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.username = payload.username;
      state.city = payload.city;
      state.country = payload.country;
      state.avatar = payload.avatar;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getUserData.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload ? payload.error : "there is a problem getting data from server";
    },
    [getUserData.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState, addToken, addUserInfo, logout, togglePopup } = userSlice.actions;

export const userSelector = (state) => state.user;
