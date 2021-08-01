import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT, getData } from "../helpers/Api";

export const getGamesData = createAsyncThunk("games", async (token ,thunkAPI) => {
  try {
    getData.headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(`${API_ENDPOINT}/games`, getData);
    let data = await response.json();
    if (response.status === 200) {
      console.log("We got games", data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: null,
    gamesCount: null,
    platinumCount: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: {
    [getGamesData.fulfilled]: (state, { payload }) => {
      state.games = payload;
      state.gamesCount = payload.length;
      state.platinumCount = payload.filter(x => x.Platinum ).length
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getGamesData.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload ? payload.error : "there is a problem getting data from server";
    },
    [getGamesData.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const userSelector = (state) => state.games;
