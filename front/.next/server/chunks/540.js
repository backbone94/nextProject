"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 3540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ clickMovie),
/* harmony export */   "nv": () => (/* binding */ clickMovieWithYear),
/* harmony export */   "gm": () => (/* binding */ ringAlarm),
/* harmony export */   "Lu": () => (/* binding */ detailMovieReducer)
/* harmony export */ });
/* unused harmony export tmdbMovie */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9594);



// OMDB 염화 검색 (year 미포함)
const clickMovie = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("detailMovie/title", async (title)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://www.omdbapi.com/?apikey=${"fd93edc7"}&t=${title}&plot=full`);
    console.log("클릭한 영화 결과: ", res.data);
    const { Actors , Director , Genre , Plot  } = res.data;
    // 배우, 영화감독, 장르, 줄거리 번역하기
    res.data.Actors = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Actors, "ko");
    res.data.Director = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Director, "ko");
    res.data.Genre = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Genre, "ko");
    res.data.Plot = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Plot, "ko");
    return res.data;
});
// OMDB 영화 검색 (year 포함)
const clickMovieWithYear = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("detailMovie/withYear", async (object)=>{
    const { title , year  } = object;
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://www.omdbapi.com/?apikey=${"fd93edc7"}&y=${year}&t=${title}&plot=full`);
    console.log("클릭한 영화 결과: ", res.data);
    const { Actors , Director , Genre , Plot  } = res.data;
    // 배우, 영화감독, 장르, 줄거리 번역하기
    res.data.Actors = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Actors, "ko");
    res.data.Director = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Director, "ko");
    res.data.Genre = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Genre, "ko");
    res.data.Plot = await (0,_util_translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Plot, "ko");
    return res.data;
});
// TMDB 영화 detail
const tmdbMovie = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("detailMovie/tmdbMovie", async (id)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.themoviedb.org/3/movie/${id}?api_key=${"05eb9432d4254d60b7a89fb64a88fb11"}&language=ko-KR`);
    console.log("클릭한 TMDB 영화 결과: ", res.data);
    return res.data;
});
// 개봉 알람 메일 보내기
const ringAlarm = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("detailMovie/ringAlarm", async (object)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://localhost:7000/api/email/alarm`, {
        object,
        headers: {
            Authorization: token
        }
    });
    console.log("알람 울림 결과: ", res.data);
    return res.data;
});
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
        Title: ""
    }
};
const detailMovieReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "detailMovie",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(clickMovie.pending, (state, { payload  })=>{
            state.loading = true;
        }).addCase(clickMovie.fulfilled, (state, { payload  })=>{
            if (payload.Error) return {
                ...initialState
            };
            return {
                ...state,
                ...payload,
                loading: false
            };
        }).addCase(clickMovieWithYear.pending, (state, { payload  })=>{
            state.loading = true;
        }).addCase(clickMovieWithYear.fulfilled, (state, { payload  })=>{
            if (payload.errorMessage) return {
                ...initialState
            };
            state.omdbWithYear = payload;
            state.loading = false;
        });
    }
});


/***/ })

};
;