import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import translate from "../../util/translate";

// 영화 첫 페이지 검색 (OMDB)
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

// 다음 페이지 검색 (OMDB)
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

// 인기작 (TMDB)
export const topRated = createAsyncThunk(`movies/topRated`, async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=ko-KR&page=1&region=KR`
  );

  // 개봉년도 뽑아내기
  res.data.results.forEach((movie) => {
    movie.release_date = movie.release_date.slice(0, 4);
  });

  console.log(`인기작 목록: `, res.data);

  return res.data;
});

// 인기작 (TMDB) 다음 페이지
export const topRatedNextPage = createAsyncThunk(
  `movies/topRatedNextPage`,
  async (page: number) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=ko-KR&page=${page}&region=KR`
    );

    // 개봉년도 뽑아내기
    res.data.results.forEach((movie) => {
      movie.release_date = movie.release_date.slice(0, 4);
    });

    console.log(`인기작 추가 목록: `, res.data);

    return res.data;
  }
);

// 현재 상영작 (TMDB)
export const now = createAsyncThunk(`movies/now`, async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=ko-KR&page=1&region=KR`
  );

  // 개봉년도 뽑아내기
  res.data.results.forEach((movie) => {
    movie.release_date = movie.release_date.slice(0, 4);
  });

  console.log(`현재 상영작 목록: `, res.data);

  return res.data;
});

// 현재 상영작 (TMDB) 다음 페이지
export const nowNextPage = createAsyncThunk(
  `movies/nowNextPage`,
  async (page: number) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=ko-KR&page=${page}&region=KR`
    );

    // 개봉년도 뽑아내기
    res.data.results.forEach((movie) => {
      movie.release_date = movie.release_date.slice(0, 4);
    });

    console.log(`현재 상영작 목록: `, res.data);

    return res.data;
  }
);

// 개봉 예정작 (TMDB)
export const upcoming = createAsyncThunk(`movies/upcoming`, async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1&region=US`
  );

  // 개봉년도 뽑아내기
  res.data.results.forEach((movie) => {
    movie.release_date = movie.release_date.slice(0, 4);
  });

  console.log("개봉 예정작 목록", res.data);

  return res.data;
});

// 개봉 예정작 (TMDB) 다음 페이지
export const upcomingNextPage = createAsyncThunk(
  `movies/upcomingNextPage`,
  async (page: number) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=${page}&region=US`
    );

    // 개봉년도 뽑아내기
    res.data.results.forEach((movie) => {
      movie.release_date = movie.release_date.slice(0, 4);
    });

    console.log(`현재 상영작 목록: `, res.data);

    return res.data;
  }
);

const initialState = {
  movieList: [],
  error: false,
  loading: false,
  infinityLoading: false,
  lastPage: 0,
  popularLastPage: 0,
  nowLastPage: 0,
  upcomingLastPage: 0,
  visitedMovies: [],
  nowList: [],
  upcomingList: [],
  popularList: [],
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
      })
      // 인기작
      .addCase(topRated.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(topRated.fulfilled, (state, { payload }) => {
        if (!payload.total_results) {
          message.error(payload.errorMessage);
          state.error = true;
        } else {
          state.popularList = payload.results;
          state.popularLastPage = payload.total_pages;
          state.loading = false;
          state.error = false;
        }
      })
      // 인기작 다음 페이지
      .addCase(topRatedNextPage.pending, (state, { payload }) => {
        state.infinityLoading = true;
      })
      .addCase(topRatedNextPage.fulfilled, (state, { payload }) => {
        payload.results.forEach((movie) => {
          state.popularList.push(movie);
        });
        state.infinityLoading = false;
      })
      // 현재 상영작
      .addCase(now.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(now.fulfilled, (state, { payload }) => {
        if (!payload.total_results) {
          message.error(payload.errorMessage);
          state.error = true;
        } else {
          state.nowList = payload.results;
          state.nowLastPage = payload.total_pages;
          state.loading = false;
          state.error = false;
        }
      })
      // 현재 상영작 다음 페이지
      .addCase(nowNextPage.pending, (state, { payload }) => {
        state.infinityLoading = true;
      })
      .addCase(nowNextPage.fulfilled, (state, { payload }) => {
        payload.results.forEach((movie) => {
          state.nowList.push(movie);
        });
        state.infinityLoading = false;
      })
      // 개봉 예정작
      .addCase(upcoming.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(upcoming.fulfilled, (state, { payload }) => {
        if (!payload.total_results) {
          message.error(payload.errorMessage);
          state.error = true;
        } else {
          state.upcomingList = payload.results;
          state.upcomingLastPage = payload.total_pages;
          state.loading = false;
          state.error = false;
        }
      }) // 개봉 예정작 다음 페이지
      .addCase(upcomingNextPage.pending, (state, { payload }) => {
        state.infinityLoading = true;
      })
      .addCase(upcomingNextPage.fulfilled, (state, { payload }) => {
        payload.results.forEach((movie) => {
          state.upcomingList.push(movie);
        });
        state.infinityLoading = false;
      });
  },
});
