import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { searchVideo } from "./videoReducer";
import translate from "../../util/translate";

// 염화 검색
export const clickMovie = createAsyncThunk(
  "detailMovie/title",
  async (title: string | string[]) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&t=${title}`
    );
    console.log("클릭한 영화 결과: ", res.data);
    const { Actors, Director, Genre, Plot } = res.data;
    const array = [Actors, Director, Genre, Plot];

    // 배우, 영화감독, 장르, 줄거리 번역하기
    res.data.Actors = await translate(Actors, "ko");
    res.data.Director = await translate(Director, "ko");
    res.data.Genre = await translate(Genre, "ko");
    res.data.Plot = await translate(Plot, "ko");
    return res.data;
  }
);

const initialState = {
  Actors: "",
  Director: "",
  Genre: "",
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
