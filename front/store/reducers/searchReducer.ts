import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 염화 검색
export const searchMovie = createAsyncThunk(
  "search/title",
  async (title: String) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&t=${title}&page=2`
    );
    console.log("영화 검색 결과: ", res.data);
    return res.data;
  }
);

const initialState = {
  Actors: "",
  Director: "",
  Genre: "",
  Metascore: 0,
  Poster: "",
  Released: "",
  Title: "",
  Plot: "",
  loading: false,
};

export const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovie.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(searchMovie.fulfilled, (state, { payload }) => {
        if (payload.Error) return { ...initialState };
        return { ...state, ...payload, loading: false };
      });
  },
});
