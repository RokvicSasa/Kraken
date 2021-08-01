import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT, getData } from "../helpers/Api";

export const getGenresData = createAsyncThunk("genres", async (token, thunkAPI) => {
  try {
    getData.headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(`${API_ENDPOINT}/genres`, getData);
    let data = await response.json();
    if (response.status === 200) {
      console.log("We got genres", data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const genreSlice = createSlice({
  name: "genres",
  initialState: {
    genres: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: {
    [getGenresData.fulfilled]: (state, { payload }) => {
      state.genres = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getGenresData.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload ? payload.error : "there is a problem getting data from server";
    },
    [getGenresData.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const userSelector = (state) => state.genres;
