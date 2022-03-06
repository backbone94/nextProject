import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 염화 검색
export const clickMovie = createAsyncThunk(
  "detailMovie/title",
  async (title: String) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&t=${title}`
    );
    console.log("클릭한 영화 결과: ", res.data);
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

export const detailMovieReducer = createSlice({
  name: "detailMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(clickMovie.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(clickMovie.fulfilled, (state, { payload }) => {
        if (payload.Error) return { ...initialState };
        return { ...state, ...payload, loading: false };
      });
  },
});
