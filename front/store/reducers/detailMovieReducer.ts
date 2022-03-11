import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { searchVideo } from "./videoReducer";
import translate from "../../util/translate";

// OMDB 염화 검색 (year 미포함)
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

// OMDB 영화 검색 (year 포함)
export const clickMovieWithYear = createAsyncThunk(
  "detailMovie/withYear",
  async (object: { title: string | string[]; year: string | string[] }) => {
    const { title, year } = object;
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&y=${year}&t=${title}&plot=full`
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

// TMDB 영화 detail
export const tmdbMovie = createAsyncThunk(
  "detailMovie/tmdbMovie",
  async (id: string | string[]) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=ko-KR`
    );
    console.log("클릭한 TMDB 영화 결과: ", res.data);
    return res.data;
  }
);

// 개봉 알람 메일 보내기
export const ringAlarm = createAsyncThunk(
  "detailMovie/ringAlarm",
  async (object: { email: string; alarm: [] }) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.post(`http://localhost:7000/api/email/alarm`, {
      object,
      headers: { Authorization: token },
    });
    console.log("알람 울림 결과: ", res.data);
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
  omdbWithYear: {
    Actors: "",
    Director: "",
    Genre: "",
    Plot: "",
    Poster: "",
    Released: "",
    Title: "",
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
      .addCase(clickMovieWithYear.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(clickMovieWithYear.fulfilled, (state, { payload }) => {
        if (payload.errorMessage) return { ...initialState };
        state.omdbWithYear = payload;
        state.loading = false;
      });
  },
});
