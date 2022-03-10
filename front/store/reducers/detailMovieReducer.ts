import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { searchVideo } from "./videoReducer";
import translate from "../../util/translate";

// OMDB 염화 검색
export const clickMovie = createAsyncThunk(
  "detailMovie/title",
  async (title: string | string[]) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&t=${title}&plot=full`
    );
    console.log("클릭한 영화 결과: ", res.data);
    const { Actors, Director, Genre, Plot } = res.data;

    // 배우, 영화감독, 장르, 줄거리 번역하기
    res.data.Actors = await translate(Actors, "ko");
    res.data.Director = await translate(Director, "ko");
    res.data.Genre = await translate(Genre, "ko");
    res.data.Plot = await translate(Plot, "ko");
    return res.data;
  }
);

// IMDB 영화 검색 (주간 무비차트)
export const imdbSearch = createAsyncThunk(
  "detailMovie/imdbSearch",
  async (id: string | string[]) => {
    const res = await axios.get(
      `https://imdb-api.com/ko/API/Title/${process.env.NEXT_PUBLIC_IMDB_API}/${id}`
    );
    console.log("무비차트 클릭한 영화 결과: ", res.data);
    const { stars, directors, genres, plotLocal } = res.data;
    res.data.stars = await translate(stars, "ko");
    res.data.plotLocal = await translate(plotLocal, "ko");
    res.data.directors = await translate(directors, "ko");
    res.data.genres = await translate(genres, "ko");
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
  imdb: {
    title: "",
    stars: "",
    directors: "",
    genres: "",
    image: "",
    plotLocal: "",
    releaseDate: "",
  },
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
      })
      .addCase(imdbSearch.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(imdbSearch.fulfilled, (state, { payload }) => {
        if (payload.errorMessage) return { ...initialState };
        state.imdb = payload;
        state.loading = false;
      });
  },
});
