exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 7395:
/***/ ((module) => {

// Exports
module.exports = {
	"visitedMoviesContainer": "visitedMovies_visitedMoviesContainer__hg0FH",
	"deleteButton": "visitedMovies_deleteButton__GeJZX",
	"movie": "visitedMovies_movie__OXpTO"
};


/***/ }),

/***/ 4297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);


const Loading = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            minHeight: 736,
            display: "flex"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default()), {
            style: {
                margin: "auto"
            },
            color: "secondary"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 6644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_reducers_detailMovieReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3540);
/* harmony import */ var _store_reducers_moviesReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5045);
/* harmony import */ var _styles_visitedMovies_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7395);
/* harmony import */ var _styles_visitedMovies_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_visitedMovies_module_css__WEBPACK_IMPORTED_MODULE_5__);






const VisitedMovies = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const visitedMovies = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.movies.visitedMovies
    );
    // 최근 클릭한 영화에서 제거
    const deleteVisit = ()=>{
        dispatch(_store_reducers_moviesReducer__WEBPACK_IMPORTED_MODULE_4__/* .moviesReducer.actions.deleteVisited */ .ZN.actions.deleteVisited());
    };
    // 선택한 영화로 바로 이동
    const move = (movie)=>{
        dispatch((0,_store_reducers_detailMovieReducer__WEBPACK_IMPORTED_MODULE_3__/* .clickMovie */ .$F)(movie.title));
        router.push(`/${movie.movies}/${movie.title}`);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (_styles_visitedMovies_module_css__WEBPACK_IMPORTED_MODULE_5___default().visitedMoviesContainer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "center",
                    marginTop: 10
                },
                children: [
                    "최근 클릭한 영화",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_visitedMovies_module_css__WEBPACK_IMPORTED_MODULE_5___default().deleteButton),
                        onClick: deleteVisit,
                        children: "삭제"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                style: {
                    marginTop: 10
                },
                children: visitedMovies.map((movie, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>move(movie)
                        ,
                        className: (_styles_visitedMovies_module_css__WEBPACK_IMPORTED_MODULE_5___default().movie),
                        style: {
                            marginBottom: 10,
                            cursor: "pointer"
                        },
                        children: movie.title
                    }, index)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisitedMovies);


/***/ })

};
;