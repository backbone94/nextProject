"use strict";
exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 5045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RE": () => (/* binding */ searchFirstPage),
/* harmony export */   "m$": () => (/* binding */ searchNextPage),
/* harmony export */   "Sd": () => (/* binding */ topRated),
/* harmony export */   "VS": () => (/* binding */ topRatedNextPage),
/* harmony export */   "zO": () => (/* binding */ now),
/* harmony export */   "CH": () => (/* binding */ nowNextPage),
/* harmony export */   "AG": () => (/* binding */ upcoming),
/* harmony export */   "UG": () => (/* binding */ upcomingNextPage),
/* harmony export */   "ZN": () => (/* binding */ moviesReducer)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9594);




// 영화 첫 페이지 검색 (OMDB)
const searchFirstPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("movies/firstPage", async (title)=>{
    const translated = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(title);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://www.omdbapi.com/?apikey=${"fd93edc7"}&s=${translated}&type=movie`);
    console.log("영화 첫 페이지 검색 결과: ", res.data);
    return res.data;
});
// 다음 페이지 검색 (OMDB)
const searchNextPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("movies/nextPage", async (nextPage)=>{
    const { title , page  } = nextPage;
    const translated = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(title);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://www.omdbapi.com/?apikey=${"fd93edc7"}&s=${translated}&page=${page}&type=movie`);
    console.log("추가로 가져온 영화 목록: ", res.data);
    return res.data;
});
// 인기작 (TMDB)
const topRated = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(`movies/topRated`, async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/popular?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=ko-KR&page=1&region=KR`);
    // 개봉년도 뽑아내기
    res.data.results.forEach((movie)=>{
        movie.release_date = movie.release_date.slice(0, 4);
    });
    console.log(`인기작 목록: `, res.data);
    return res.data;
});
// 인기작 (TMDB) 다음 페이지
const topRatedNextPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(`movies/topRatedNextPage`, async (page)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/popular?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=ko-KR&page=${page}&region=KR`);
    // 개봉년도 뽑아내기
    res.data.results.forEach((movie)=>{
        movie.release_date = movie.release_date.slice(0, 4);
    });
    console.log(`인기작 추가 목록: `, res.data);
    return res.data;
});
// 현재 상영작 (TMDB)
const now = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(`movies/now`, async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=ko-KR&page=1&region=KR`);
    // 개봉년도 뽑아내기
    res.data.results.forEach((movie)=>{
        movie.release_date = movie.release_date.slice(0, 4);
    });
    console.log(`현재 상영작 목록: `, res.data);
    return res.data;
});
// 현재 상영작 (TMDB) 다음 페이지
const nowNextPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(`movies/nowNextPage`, async (page)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=ko-KR&page=${page}&region=KR`);
    // 개봉년도 뽑아내기
    res.data.results.forEach((movie)=>{
        movie.release_date = movie.release_date.slice(0, 4);
    });
    console.log(`현재 상영작 목록: `, res.data);
    return res.data;
});
// 개봉 예정작 (TMDB)
const upcoming = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(`movies/upcoming`, async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=en-US&page=1&region=US`);
    // 개봉년도 뽑아내기
    res.data.results.forEach((movie)=>{
        movie.release_date = movie.release_date.slice(0, 4);
    });
    console.log("개봉 예정작 목록", res.data);
    return res.data;
});
// 개봉 예정작 (TMDB) 다음 페이지
const upcomingNextPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(`movies/upcomingNextPage`, async (page)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=en-US&page=${page}&region=US`);
    // 개봉년도 뽑아내기
    res.data.results.forEach((movie)=>{
        movie.release_date = movie.release_date.slice(0, 4);
    });
    console.log(`현재 상영작 목록: `, res.data);
    return res.data;
});
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
    popularList: []
};
const moviesReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "movies",
    initialState,
    reducers: {
        visit: (state, { payload  })=>{
            // visitedMovies 배열 안에 이미 값이 존재하면 추가 X
            const isVisited = state.visitedMovies.find((visited)=>{
                if (visited.title === payload.title) return true;
            });
            if (isVisited) return;
            else {
                state.visitedMovies.push(payload);
            }
        },
        deleteVisited: (state)=>{
            state.visitedMovies = [];
        }
    },
    extraReducers: (builder)=>{
        builder// 첫 페이지 검색 로딩
        .addCase(searchFirstPage.pending, (state)=>{
            state.loading = true;
            state.error = false;
        })// 첫 페이지 검색 성공
        .addCase(searchFirstPage.fulfilled, (state, { payload  })=>{
            // 검색 결과 없는 경우
            if (payload.Error) {
                state.error = true;
                state.loading = false;
            // 검색 결과 있는 경우
            } else {
                state.lastPage = Math.ceil(payload.totalResults / 10);
                state.movieList = payload.Search;
                state.loading = false;
                state.error = false;
            }
        })// 다음 페이지 로딩
        .addCase(searchNextPage.pending, (state, { payload  })=>{
            state.infinityLoading = true;
        })// 다음 페이지 검색 성공
        .addCase(searchNextPage.fulfilled, (state, { payload  })=>{
            // 다음 페이지 결과 있는 경우
            if (!payload.Error) {
                payload.Search.forEach((movie)=>{
                    state.movieList.push(movie);
                });
            }
            state.infinityLoading = false;
        })// 인기작
        .addCase(topRated.pending, (state, { payload  })=>{
            state.loading = true;
        }).addCase(topRated.fulfilled, (state, { payload  })=>{
            if (!payload.total_results) {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(payload.errorMessage);
                state.error = true;
            } else {
                state.popularList = payload.results;
                state.popularLastPage = payload.total_pages;
                state.loading = false;
                state.error = false;
            }
        })// 인기작 다음 페이지
        .addCase(topRatedNextPage.pending, (state, { payload  })=>{
            state.infinityLoading = true;
        }).addCase(topRatedNextPage.fulfilled, (state, { payload  })=>{
            payload.results.forEach((movie)=>{
                state.popularList.push(movie);
            });
            state.infinityLoading = false;
        })// 현재 상영작
        .addCase(now.pending, (state, { payload  })=>{
            state.loading = true;
        }).addCase(now.fulfilled, (state, { payload  })=>{
            if (!payload.total_results) {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(payload.errorMessage);
                state.error = true;
            } else {
                state.nowList = payload.results;
                state.nowLastPage = payload.total_pages;
                state.loading = false;
                state.error = false;
            }
        })// 현재 상영작 다음 페이지
        .addCase(nowNextPage.pending, (state, { payload  })=>{
            state.infinityLoading = true;
        }).addCase(nowNextPage.fulfilled, (state, { payload  })=>{
            payload.results.forEach((movie)=>{
                state.nowList.push(movie);
            });
            state.infinityLoading = false;
        })// 개봉 예정작
        .addCase(upcoming.pending, (state, { payload  })=>{
            state.loading = true;
        }).addCase(upcoming.fulfilled, (state, { payload  })=>{
            if (!payload.total_results) {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(payload.errorMessage);
                state.error = true;
            } else {
                state.upcomingList = payload.results;
                state.upcomingLastPage = payload.total_pages;
                state.loading = false;
                state.error = false;
            }
        }) // 개봉 예정작 다음 페이지
        .addCase(upcomingNextPage.pending, (state, { payload  })=>{
            state.infinityLoading = true;
        }).addCase(upcomingNextPage.fulfilled, (state, { payload  })=>{
            payload.results.forEach((movie)=>{
                state.upcomingList.push(movie);
            });
            state.infinityLoading = false;
        });
    }
});


/***/ }),

/***/ 9594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 번역
const translate = async (korean, lan = "en")=>{
    const translated = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://translation.googleapis.com/language/translate/v2?target=${lan}&q=${korean}&key=${"AIzaSyCa2-fRZ6bWoLJAW-I8thYfTDvqqO89qNw"}`);
    return translated.data.data.translations[0].translatedText;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translate);


/***/ })

};
;