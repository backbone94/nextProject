import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

interface Search {
  title: string | string[];
  page: number;
}

// 염화 검색
export const searchMovies = createAsyncThunk(
  "search/movies",
  async (search: Search) => {
    const { title, page } = search;
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&s=${title}&page=${page}`
    );
    console.log("영화 검색 결과: ", res.data);
    return res.data;
  }
);

const initialState = {
  movieList: [],
  error: false,
  loading: false,
};

export const searchMoviesReducer = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, { payload }) => {
        if (payload.Error) {
          state.error = true;
          state.loading = false;
        } else {
          state.loading = false;
          state.error = false;
          state.movieList = payload.Search;
        }
      });
  },
});
