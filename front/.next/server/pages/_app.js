(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,841];
exports.modules = {

/***/ 5823:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__E_Uzl",
	"mailIcon": "footer_mailIcon__ZU2yR",
	"gitHubIcon": "footer_gitHubIcon__ZwLoq"
};


/***/ }),

/***/ 7975:
/***/ ((module) => {

// Exports
module.exports = {
	"homeContainer": "home_homeContainer__vC4eT",
	"mobileLogInSignUp": "home_mobileLogInSignUp__Zxiyw",
	"mobileLogIn": "home_mobileLogIn__Js3Gp",
	"mobileSignUp": "home_mobileSignUp___K6NW",
	"gifContainer": "home_gifContainer__8ngmo",
	"gif": "home_gif__v1P3a",
	"searchInputContainer": "home_searchInputContainer__j8Qqg",
	"searchInput": "home_searchInput__7m3b3"
};


/***/ }),

/***/ 4827:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "top_headerContainer__KX_Vp",
	"logInButton": "top_logInButton__QPksJ",
	"signUpButton": "top_signUpButton__58zJw",
	"userContainer": "top_userContainer__0Iv6l",
	"home": "top_home__jwAre",
	"profileContainer": "top_profileContainer__0CDWG",
	"img": "top_img__EoLZm"
};


/***/ }),

/***/ 7464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/top.module.css
var top_module = __webpack_require__(4827);
var top_module_default = /*#__PURE__*/__webpack_require__.n(top_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./store/reducers/userReducer.ts
var userReducer = __webpack_require__(2966);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Top.tsx







function Top() {
    const router = (0,router_.useRouter)();
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    // 로그아웃
    const logOut = ()=>{
        dispatch(userReducer/* userReducer.actions.logOut */.M3.actions.logOut());
    // router.push("/");
    };
    const move = (route)=>{
        router.push(route);
    };
    const menu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Menu, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/Profile",
                    children: "내 프로필"
                })
            }, "0"),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: logOut,
                    children: "로그아웃"
                })
            }, "1")
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (top_module_default()).headerContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: ()=>move("/")
                ,
                className: (top_module_default()).home,
                children: "MovieTalk"
            }),
            !user.email ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (top_module_default()).userContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        onClick: ()=>move("/LogIn")
                        ,
                        className: (top_module_default()).logInButton,
                        children: "로그인"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        style: {
                            marginLeft: 10
                        },
                        onClick: ()=>move("/SignUp")
                        ,
                        className: (top_module_default()).signUpButton,
                        children: "회원가입"
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (top_module_default()).profileContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Dropdown, {
                    overlay: menu,
                    trigger: [
                        "click"
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (top_module_default()).img,
                        src: user.profile
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/footer.module.css
var footer_module = __webpack_require__(5823);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./components/Footer.tsx




function Footer() {
    const year = new Date().getFullYear();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).IconContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "gray"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Popover, {
                            content: "backbone94@naver.com",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.MailOutlined, {
                                className: (footer_module_default()).mailIcon
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            color: "gray"
                        },
                        target: "_blank",
                        href: "https://github.com/backbone94/nextProject",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.GithubOutlined, {
                            className: (footer_module_default()).gitHubIcon
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    marginTop: 10
                },
                children: [
                    "\xa9 ",
                    year,
                    ". All rights reserved."
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./store/reducers/detailMovieReducer.ts
var detailMovieReducer = __webpack_require__(3540);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/reducers/verifyReducer.ts
var verifyReducer = __webpack_require__(4004);
// EXTERNAL MODULE: ./store/reducers/moviesReducer.ts
var moviesReducer = __webpack_require__(5045);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./store/reducers/videoReducer.ts


// 유튜브 영상 검색
const searchVideo = (0,toolkit_.createAsyncThunk)("video/search", async (title)=>{
    const res = await external_axios_default().get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${"AIzaSyCiTrOdvja9ZJk9aaykg9KOi65yRXxzWXU"}&q={${title} 공식 예고편}&maxResults=1&type=video&chart=mostPopular`);
    console.log("유튜브 검색 결과: ", res.data);
    return res.data;
});
const initialState = {
    video: ""
};
const videoReducer = (0,toolkit_.createSlice)({
    name: "video",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(searchVideo.fulfilled, (state, { payload  })=>{
            state.video = payload.items[0].id.videoId;
        });
    }
});

// EXTERNAL MODULE: ./store/reducers/blogReducer.ts
var blogReducer = __webpack_require__(6249);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage/createWebStorage"
const createWebStorage_namespaceObject = require("redux-persist/lib/storage/createWebStorage");
// EXTERNAL MODULE: ./store/reducers/commentReducer.ts
var commentReducer = __webpack_require__(6573);
;// CONCATENATED MODULE: ./store/index.ts











const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const storage =  false ? 0 : createNoopStorage();
// 새로고침해도 store의 state 값 저장하기 위한 라이브러리
const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage: storage,
    // userReducer의 state를 localStorage에 저장
    whitelist: [
        "user",
        "verify",
        "comment",
        "detailMovie",
        "movies"
    ]
};
const rootReducer = (0,toolkit_.combineReducers)({
    user: userReducer/* userReducer.reducer */.M3.reducer,
    verify: verifyReducer/* verifyReducer.reducer */.V.reducer,
    comment: commentReducer/* commentReducer.reducer */.dx.reducer,
    detailMovie: detailMovieReducer/* detailMovieReducer.reducer */.Lu.reducer,
    movies: moviesReducer/* moviesReducer.reducer */.ZN.reducer,
    video: videoReducer.reducer,
    blog: blogReducer/* blogReducer.reducer */.M.reducer
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_namespaceObject.FLUSH,
                    external_redux_persist_namespaceObject.REHYDRATE,
                    external_redux_persist_namespaceObject.PAUSE,
                    external_redux_persist_namespaceObject.PERSIST,
                    external_redux_persist_namespaceObject.PURGE,
                    external_redux_persist_namespaceObject.REGISTER
                ]
            }
        })
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);

;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: ./styles/home.module.css
var home_module = __webpack_require__(7975);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./pages/_app.tsx









function MyApp({ Component , pageProps: { ...pageProps }  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
                persistor: persistor,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (home_module_default()).homeContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Top, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ emailVerify),
/* harmony export */   "V": () => (/* binding */ verifyReducer)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



// 이메일 인증
const emailVerify = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("email/emailVerify", async (email)=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://3.34.156.241"}/api/email`, {
        email
    });
    console.log("이메일 인증 결과: ", res.data);
    return res.data;
});
const initialState = {
    verifyNum: null
};
const verifyReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "email",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(emailVerify.fulfilled, (state, { payload  })=>{
            if (payload.error) {
                // 이미 존재하는 아이디이면
                antd__WEBPACK_IMPORTED_MODULE_2__.message.warning(payload.error);
            } else {
                return {
                    ...state,
                    verifyNum: payload
                };
            }
        });
    }
});


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,122,966,66,540,118], () => (__webpack_exec__(7464)));
module.exports = __webpack_exports__;

})();