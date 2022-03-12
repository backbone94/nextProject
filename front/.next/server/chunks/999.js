exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 610:
/***/ ((module) => {

// Exports
module.exports = {
	"imageContainer": "settingImage_imageContainer__szqIy",
	"fileInput": "settingImage_fileInput__Nyebx",
	"image": "settingImage_image__LLYpj",
	"defaultImage": "settingImage_defaultImage__Qn5dX"
};


/***/ }),

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SettingImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./styles/settingImage.module.css
var settingImage_module = __webpack_require__(610);
var settingImage_module_default = /*#__PURE__*/__webpack_require__.n(settingImage_module);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./util/requestImg.ts

// Folder 이미지를 s3에 저장하고 이미지 경로 가져오기
const requestImg = async (e)=>{
    try {
        const formData = new FormData();
        formData.append("upload", e.target.files[0]);
        const result = await external_axios_default().post(`${"http://localhost:7000"}/api/image`, formData);
        return result.data.url[0];
    } catch (e1) {
        console.log(e1);
        alert("server error");
    }
};
/* harmony default export */ const util_requestImg = (requestImg);

;// CONCATENATED MODULE: ./components/SettingImage.tsx




const SettingImage = ({ isSignUp , user , setUser , img , setImg  })=>{
    const defaultImage = "/defaultImage.png";
    // 이미지 url 요청
    const insertImg = async (e)=>{
        const url = await util_requestImg(e);
        setImg(url);
        // 회원가입 할 때만
        if (isSignUp) setUser({
            ...user,
            profile: url
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (settingImage_module_default()).imageContainer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Tooltip, {
                    title: "이미지 변경",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            id: "inputId",
                            onChange: (e)=>insertImg(e)
                            ,
                            accept: "image/*",
                            className: (settingImage_module_default()).fileInput,
                            type: "file"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "inputId",
                            children: img ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                width: "128",
                                height: "128",
                                className: (settingImage_module_default()).image,
                                src: img,
                                alt: "profile"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                width: "128",
                                height: "128",
                                className: (settingImage_module_default()).image,
                                src: defaultImage,
                                alt: "profile"
                            })
                        })
                    ]
                })
            }),
            img ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (settingImage_module_default()).defaultImage,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                    type: "text",
                    onClick: ()=>setImg(defaultImage)
                    ,
                    children: "기본 이미지로 설정"
                })
            }) : null
        ]
    }));
};
/* harmony default export */ const components_SettingImage = (SettingImage);


/***/ })

};
;