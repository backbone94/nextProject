"use strict";
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 2966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MW": () => (/* binding */ tokenCheck),
/* harmony export */   "cn": () => (/* binding */ addUser),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "Zd": () => (/* binding */ withdrawal),
/* harmony export */   "co": () => (/* binding */ changeNickOrIntro),
/* harmony export */   "GW": () => (/* binding */ changePw),
/* harmony export */   "Kb": () => (/* binding */ userLike),
/* harmony export */   "yK": () => (/* binding */ setAlarm),
/* harmony export */   "GH": () => (/* binding */ cancelAlarm),
/* harmony export */   "M3": () => (/* binding */ userReducer)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



// 토큰 유효성 검증
const tokenCheck = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/verify", async ()=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/user/token`, {
        headers: {
            Authorization: token
        }
    });
    console.log("토큰 유효성 결과: ", res.data);
    return res.data;
});
// 회원가입
const addUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/addUser", async (user)=>{
    if (!user.profile) user.profile = "/defaultImage.png";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/user/signUp`, user);
    console.log("회원가입 결과: ", res.data);
    if (res.data.token) localStorage.setItem("token", res.data.token);
    return res.data.newUser;
});
// 로그인
const getUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/getUser", async (user)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/user/logIn`, user);
    console.log("회원 정보 불러오기 결과: ", res.data);
    if (res.data.token) localStorage.setItem("token", res.data.token);
    if (res.data.error) return res.data;
    return res.data.result;
});
// 회원 탈퇴
const withdrawal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/withdrawal", async (email, api)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${"http://localhost:7000"}/api/user`, {
        data: {
            email
        }
    });
    console.log("회원 삭제 결과: ", res.data);
    return res.data;
});
// 이미지 & 닉네임 & 자기소개 변경
const changeNickOrIntro = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/changeNickOrIntro", async (user)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/user/changeNickOrIntro`, {
        user,
        headers: {
            Authorization: token
        }
    });
    console.log("이미지 or 닉네임 or 자기소개 변경 결과: ", res.data);
    return res.data;
});
// 비밀번호 변경
const changePw = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/changePw", async (user)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${"http://localhost:7000"}/api/user/changePw`, {
        user,
        headers: {
            Authorization: token
        }
    });
    console.log("비밀번호 변경 결과: ", res.data);
    return res.data;
});
// 좋아요 누른 유저 정보 업데이트
const userLike = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/userLike", async (userLike1)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://localhost:7000"}/api/user/userLike`, {
        userLike: userLike1,
        headers: {
            Authorization: token
        }
    });
    console.log("유저 좋아요 업데이트 결과: ", res.data);
    return res.data;
});
// 개봉 알람 설정
const setAlarm = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/setAlarm", async (object)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://3.34.156.241/api/user/alarm`, {
        object,
        headers: {
            Authorization: token
        }
    });
    console.log("알람 설정 결과: ", res.data);
    return res.data;
});
// 개봉 알람 취소
const cancelAlarm = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/cancelAlarm", async (object)=>{
    let token = localStorage.getItem("token") || "";
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`http://3.34.156.241/api/user/alarm`, {
        data: {
            object,
            headers: {
                Authorization: token
            }
        }
    });
    console.log("알람 취소 결과: ", res.data);
    return res.data;
});
const initialState = {
    _id: "",
    email: "",
    password: "",
    profile: "",
    nickName: "",
    introduce: "",
    likeComments: [],
    alarm: [],
    alarmState: false
};
const userReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "user",
    initialState: {
        ...initialState,
        error: ""
    },
    reducers: {
        // 로그 아웃
        logOut: (state)=>{
            antd__WEBPACK_IMPORTED_MODULE_2__.message.success("로그아웃 하였습니다.");
            return {
                ...initialState,
                error: ""
            };
        },
        // 알림 설정 여부 체크
        alarm: (state, { payload  })=>{
            const existAlarm = state.alarm.find((a)=>a.title === payload
            );
            if (existAlarm) state.alarmState = true;
            else state.alarmState = false;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(tokenCheck.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                // 토큰이 유효하지 않은 경우
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error("로그아웃 하였습니다.");
                return {
                    ...initialState,
                    error: ""
                };
            }
        }).addCase(addUser.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                // 이미 존재하는 아이디이면
                antd__WEBPACK_IMPORTED_MODULE_2__.message.warning(payload.error);
            } else {
                //존재하지 않는 아이디이면
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success("회원가입 하였습니다.");
                return {
                    ...state,
                    ...payload
                };
            }
        }).addCase(getUser.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                // 아이디 또는 비밀번호가 틀리면
                antd__WEBPACK_IMPORTED_MODULE_2__.message.warning(payload.error);
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success("로그인 하였습니다.");
                return {
                    ...state,
                    ...payload
                };
            }
        }).addCase(withdrawal.fulfilled, (state, { payload  })=>{
            antd__WEBPACK_IMPORTED_MODULE_2__.message.success("회원을 탈퇴하였습니다.");
            return {
                ...initialState,
                error: ""
            };
        }).addCase(changeNickOrIntro.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(payload.error);
                return {
                    ...initialState,
                    error: ""
                };
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success("수정하였습니다.");
                return {
                    ...state,
                    ...payload
                };
            }
        }).addCase(changePw.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(payload.error);
                return {
                    ...initialState,
                    error: ""
                };
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success("수정하였습니다.");
                return {
                    ...state,
                    ...payload
                };
            }
        }).addCase(userLike.fulfilled, (state, { payload  })=>{
            state.likeComments = payload.likeComments;
        })// 알람 설정
        .addCase(setAlarm.fulfilled, (state, { payload  })=>{
            state.alarm = payload.alarm;
        }) //알람 취소
        .addCase(cancelAlarm.fulfilled, (state, { payload  })=>{
            // state.alarm = state.alarm.filter((a: {title, releaseDate}) => a.title !== payload)
            state.alarm.forEach((a, index)=>{
                if (a.title === payload) state.alarm.splice(index, 1);
            });
        });
    }
});


/***/ })

};
;