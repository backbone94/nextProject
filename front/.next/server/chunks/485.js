exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 8542:
/***/ ((module) => {

// Exports
module.exports = {
	"commentContainer": "comment_commentContainer__oEacJ",
	"commentRegister": "comment_commentRegister__g5yGH",
	"star": "comment_star__vN_xt",
	"commentInput": "comment_commentInput__XTxFt",
	"commentList": "comment_commentList__oyxlT",
	"commentCard": "comment_commentCard__JSAkn",
	"imageNickContainer": "comment_imageNickContainer__8h4in",
	"image": "comment_image__u8fdO",
	"date": "comment_date__IM2S1",
	"deleteComment": "comment_deleteComment__fK9V_",
	"commentStarContainer": "comment_commentStarContainer__Wf9Jn",
	"commentStar": "comment_commentStar__xKti4",
	"rateText": "comment_rateText__IaIxY",
	"like": "comment_like__wGvk0",
	"likeIcon": "comment_likeIcon__6W_UT",
	"myComment": "comment_myComment__yuNDH"
};


/***/ }),

/***/ 7478:
/***/ ((module) => {

// Exports
module.exports = {
	"moviePageContainer": "moviePage_moviePageContainer__eTMH8",
	"movieInfoAndComment": "moviePage_movieInfoAndComment__YpoLM",
	"movieInfoContainer": "moviePage_movieInfoContainer__OS_G6",
	"poster": "moviePage_poster__4I0TD",
	"movieInfo": "moviePage_movieInfo__G0eAP",
	"title": "moviePage_title__BsLIZ",
	"released": "moviePage_released__CMC9c",
	"director": "moviePage_director__AD8SS",
	"actors": "moviePage_actors__KTiew",
	"genre": "moviePage_genre__wwibF",
	"text": "moviePage_text__zA_8F",
	"video": "moviePage_video__ipnDx",
	"blog": "moviePage_blog__ZcI0a",
	"naverText": "moviePage_naverText__v0qV9",
	"postCard": "moviePage_postCard__0u0sW",
	"postTitle": "moviePage_postTitle__tPhlR",
	"date": "moviePage_date__vzw36",
	"back": "moviePage_back__WAknj",
	"bookmark": "moviePage_bookmark___RiVm"
};


/***/ }),

/***/ 5065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Comment)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/comment.module.css
var comment_module = __webpack_require__(8542);
var comment_module_default = /*#__PURE__*/__webpack_require__.n(comment_module);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/reducers/commentReducer.ts
var commentReducer = __webpack_require__(6573);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./store/reducers/userReducer.ts
var userReducer = __webpack_require__(2966);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/CommentCard.tsx









const CommentCard = ({ comment , desc  })=>{
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const { email  } = user;
    const { 0: likeCnt , 1: setLikeCnt  } = (0,external_react_.useState)(comment.like);
    const dispatch = (0,external_react_redux_.useDispatch)();
    // 리렌더링 될 때마다 좋아요 수 업데이트하기.
    // useState의 클로저 성질 때문에 useEffect로 업데이트 해주지 않으면
    // 계속 이전 값을 참조하게 된다. (두 번째 렌더링 이후부턴 새로운 값을 참조)
    (0,external_react_.useEffect)(()=>{
        setLikeCnt(comment.like);
    }, [
        comment.like
    ]);
    // 리뷰에 좋아요 눌렀을 때
    const incCnt = ()=>{
        if (!email) {
            external_antd_.message.error("로그인이 필요합니다.");
            return;
        }
        const liked = user.likeComments.find((c)=>c === comment._id
        );
        // 좋아요를 이미 누른 리뷰라면
        if (liked) {
            setLikeCnt(likeCnt - 1);
            dispatch((0,commentReducer/* commentLike */.ar)({
                _id: comment._id,
                like: likeCnt - 1
            }));
            dispatch((0,userReducer/* userLike */.Kb)({
                liked: true,
                email,
                _id: comment._id
            }));
        // 좋아요를 누른 적이 없는 리뷰라면
        } else {
            setLikeCnt(likeCnt + 1);
            dispatch((0,commentReducer/* commentLike */.ar)({
                _id: comment._id,
                like: likeCnt + 1
            }));
            dispatch((0,userReducer/* userLike */.Kb)({
                liked: false,
                email,
                _id: comment._id
            }));
        }
    };
    // 리뷰 삭제
    const deleteComment = ()=>{
        dispatch((0,commentReducer/* removeComment */.PN)(comment));
    };
    const date = external_moment_default()(comment.registerDate).format("YYYY.MM.DD HH:mm");
    return comment.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comment_module_default()).commentCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (comment_module_default()).imageNickContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (comment_module_default()).image,
                        src: comment.user.profile,
                        alt: "프로필"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: comment.user.nickName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (comment_module_default()).date,
                                children: [
                                    date,
                                    user.email === comment.user.email ? /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Popconfirm, {
                                        okText: "네",
                                        cancelText: "아니오",
                                        onConfirm: deleteComment,
                                        title: "정말 삭제하시겠습니까?",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.QuestionCircleOutlined, {
                                            style: {
                                                color: "red"
                                            }
                                        }),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (comment_module_default()).deleteComment,
                                            children: "삭제"
                                        })
                                    }) : null
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (comment_module_default()).commentStarContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Rate, {
                                className: (comment_module_default()).commentStar,
                                disabled: true,
                                value: comment.rate
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (comment_module_default()).rateText,
                                children: desc[comment.rate - 1]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            margin: 10
                        },
                        children: [
                            user.email === comment.user.email ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (comment_module_default()).myComment,
                                children: "MY평점"
                            }) : null,
                            comment.text
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            margin: 10
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: incCnt,
                            className: (comment_module_default()).like,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.LikeOutlined, {
                                        className: (comment_module_default()).likeIcon
                                    }),
                                    likeCnt
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }) : null;
};
/* harmony default export */ const components_CommentCard = (CommentCard);

;// CONCATENATED MODULE: ./components/Comment.tsx








const desc = [
    "2",
    "4",
    "6",
    "8",
    "10"
];
const Comment = ()=>{
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const comment1 = (0,external_react_redux_.useSelector)((state)=>state.comment
    );
    const { commentList  } = comment1;
    const router = (0,router_.useRouter)();
    const { title  } = router.query;
    const { 0: star , 1: setStar  } = (0,external_react_.useState)(0);
    const { 0: text , 1: setText  } = (0,external_react_.useState)("");
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        if (title) dispatch((0,commentReducer/* getCommentList */.Rw)(title));
    }, [
        title
    ]);
    const handleChange = (value)=>{
        setStar(value);
    };
    // 리뷰 달기
    const register = (e)=>{
        if (e.key === "Enter" || e._reactName === "onClick") {
            if (!text) return;
            if (!title) return;
            dispatch((0,commentReducer/* addComment */.Ir)({
                movie: title,
                rate: star,
                text,
                user: user._id,
                nickName: user.nickName,
                profile: user.profile
            }));
            setText("");
            setStar(0);
        }
    };
    const writeComment = (e)=>{
        setText(e.target.value);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comment_module_default()).commentContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (comment_module_default()).commentRegister,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (comment_module_default()).star,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "별점을 선택하세요."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Rate, {
                                    allowClear: false,
                                    disabled: user.email ? false : true,
                                    onChange: handleChange,
                                    value: star
                                }),
                                user.email && star ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    className: "ant-rate-text",
                                    children: desc[star - 1]
                                }) : ""
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (comment_module_default()).commentInput,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                onKeyDown: register,
                                disabled: user.email ? false : true,
                                placeholder: user.email ? "감상평을 등록해주세요." : "로그인이 필요합니다.",
                                value: text,
                                onChange: writeComment
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                onClick: register,
                                style: {
                                    height: 40
                                },
                                children: "등록"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (comment_module_default()).commentList,
                children: commentList && commentList.map((comment)=>/*#__PURE__*/ jsx_runtime_.jsx(components_CommentCard, {
                        comment: comment,
                        desc: desc
                    }, comment._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_Comment = (Comment);


/***/ })

};
;