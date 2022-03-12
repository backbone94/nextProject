"use strict";
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 6249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ searchblog),
/* harmony export */   "M": () => (/* binding */ blogReducer)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


// 블로그 글 검색
const searchblog = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("blog/search", async (title)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7000/api/naverBlog", {
        params: {
            title: title
        }
    });
    console.log("블로그 검색 결과: ", res.data);
    return res.data;
});
const initialState = {
    postList: []
};
const blogReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(searchblog.fulfilled, (state, { payload  })=>{
            payload.forEach((post)=>{
                const { postdate  } = post;
                post.postdate = postdate.slice(0, 4) + "." + postdate.slice(4, 6) + "." + postdate.slice(6, 8);
            });
            state.postList = payload;
        });
    }
});


/***/ }),

/***/ 6573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rw": () => (/* binding */ getCommentList),
/* harmony export */   "Ir": () => (/* binding */ addComment),
/* harmony export */   "ar": () => (/* binding */ commentLike),
/* harmony export */   "PN": () => (/* binding */ removeComment),
/* harmony export */   "dx": () => (/* binding */ commentReducer)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


// 리뷰 불러오기
const getCommentList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("comment/getCommentList", async (movie)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"http://localhost:7000"}/api/comment`, {
        params: {
            movie: movie
        }
    });
    console.log("리뷰 불러오기 결과: ", res.data);
    return res.data;
});
// 리뷰 쓰기
const addComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("comment/addComment", async (comment)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/comment`, {
        comment,
        headers: {
            Authorization: token
        }
    });
    console.log("리뷰 쓰기 결과: ", res.data);
    return res.data;
});
// 좋아요 수 변경
const commentLike = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("comment/commentLike", async (like)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/comment/commentLike`, like);
    console.log("좋아요 수 변경 결과: ", res.data);
    return res.data;
});
// 리뷰 삭제
const removeComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("comment/removeComment", async (comment)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${"http://localhost:7000"}/api/comment/removeComment`, {
        data: {
            comment: comment
        }
    });
    console.log("리뷰 삭제 결과: ", res.data);
    return comment._id;
});
const initialState = {
    commentList: [],
    error: false
};
const commentReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getCommentList.fulfilled, (state, { payload  })=>{
            state.commentList = payload;
        }).addCase(addComment.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                state.error = payload.error;
            } else state.commentList.push(payload);
        }).addCase(removeComment.fulfilled, (state, { payload  })=>{
            state.commentList = state.commentList.filter((c)=>c._id !== payload
            );
        });
    }
});


/***/ })

};
;