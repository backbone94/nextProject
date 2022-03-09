import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import translate from "../../util/translate";

// 영화 첫 페이지 검색
export const searchFirstPage = createAsyncThunk(
  "movies/firstPage",
  async (title: string | string[]) => {
    const translated = await translate(title);
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&s=${translated}&type=movie`
    );
    console.log("영화 첫 페이지 검색 결과: ", res.data);
    return res.data;
  }
);

// 다음 페이지 검색
export const searchNextPage = createAsyncThunk(
  "movies/nextPage",
  async (nextPage: { title: string | string[]; page: number }) => {
    const { title, page } = nextPage;
    const translated = await translate(title);
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API}&s=${translated}&page=${page}&type=movie`
    );
    console.log("추가로 가져온 영화 목록: ", res.data);
    return res.data;
  }
);

const initialState = {
  movieList: [],
  error: false,
  loading: false,
  infinityLoading: false,
  lastPage: 0,
  visitedMovies: [],
};

export const moviesReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    visit: (state, { payload }) => {
      // visitedMovies 배열 안에 이미 값이 존재하면 추가 X
      const isVisited = state.visitedMovies.find((visited) => {
        if (visited.title === payload.title) return true;
      });
      if (isVisited) return;
      else {
        state.visitedMovies.push(payload);
      }
    },
    deleteVisited: (state) => {
      state.visitedMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // 첫 페이지 검색 로딩
      .addCase(searchFirstPage.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      // 첫 페이지 검색 성공
      .addCase(searchFirstPage.fulfilled, (state, { payload }) => {
        // 검색 결과 없는 경우
        if (payload.Error) {
          state.error = true;
          state.loading = false;
          // 검색 결과 있는 경우
        } else {
          state.lastPage = Math.ceil(payload.totalResults / 10.0);
          state.movieList = payload.Search;
          state.loading = false;
          state.error = false;
        }
      })
      // 다음 페이지 로딩
      .addCase(searchNextPage.pending, (state, { payload }) => {
        state.infinityLoading = true;
      })
      // 다음 페이지 검색 성공
      .addCase(searchNextPage.fulfilled, (state, { payload }) => {
        // 다음 페이지 결과 있는 경우
        if (!payload.Error) {
          payload.Search.forEach((movie) => {
            state.movieList.push(movie);
          });
        }
        state.infinityLoading = false;
      });
  },
});
