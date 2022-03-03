import { User } from "../user";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 이메일 인증
export const emailVerify = createAsyncThunk(
  "email/emailVerify",
  async (email: String) => {
    const res = await axios.post("http://localhost:7000/api/email", { email });
    console.log("이메일 인증 결과: ", res.data);
    return res.data;
  }
);

// 회원가입
export const addUser = createAsyncThunk("user/addUser", async (user: User) => {
  const res = await axios.post("http://localhost:7000/api/user/signUp", user);
  console.log("회원가입 결과: ", res.data);
  if (res.data.token) localStorage.setItem("token", res.data.token);
  return res.data.newUser;
});

// 로그인
export const getUser = createAsyncThunk(
  "user/getUser",
  async (user: Object) => {
    const res = await axios.post("http://localhost:7000/api/user/logIn", user);
    console.log("회원 정보 불러오기 결과: ", res.data);
    if (res.data.token) localStorage.setItem("token", res.data.token);
    if (res.data.error) return res.data;
    return res.data.result;
  }
);

// 회원 탈퇴
export const withdrawal = createAsyncThunk(
  "user/withdrawal",
  async (email: string, api) => {
    const res = await axios.delete("http://localhost:7000/api/user", {
      data: { email },
    });
    console.log("회원 삭제 결과: ", res.data);
    return res.data;
  }
);

// 이미지 & 닉네임 & 자기소개 변경
export const changeNickOrIntro = createAsyncThunk(
  "user/changeNickOrIntro",
  async (user: Object) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.put(
      "http://localhost:7000/api/user/changeNickOrIntro",
      {
        user,
        headers: { Authorization: token },
      }
    );
    console.log("이미지 or 닉네임 or 자기소개 변경 결과: ", res.data);
    return res.data;
  }
);

// 비밀번호 변경
export const changePw = createAsyncThunk(
  "user/changePw",
  async (user: Object) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.put("http://localhost:7000/api/user/changePw", {
      user,
      headers: { Authorization: token },
    });
    console.log("비밀번호 변경 결과: ", res.data);
    return res.data;
  }
);

const initialState: User = {
  name: "",
  email: "",
  password: "",
  profile: "",
  nickName: "",
  introduce: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState: { ...initialState, error: "" },
  reducers: {
    // 로그 아웃
    logOut: (state) => {
      message.success("로그아웃 하였습니다.");
      return { ...initialState, error: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailVerify.fulfilled, (state, { payload }) => {
        if (payload.error) {
          // 이미 존재하는 아이디이면
          message.warning(payload.error);
        } else {
          //존재하지 않는 아이디이면
          message.success("인증 하였습니다.");
          return {
            ...state,
            ...payload,
          };
        }
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        if (payload.error) {
          // 이미 존재하는 아이디이면
          message.warning(payload.error);
        } else {
          //존재하지 않는 아이디이면
          message.success("회원가입 하였습니다.");
          return {
            ...state,
            ...payload,
          };
        }
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        if (payload.error) {
          // 아이디 또는 비밀번호가 틀리면
          message.warning(payload.error);
        } else {
          message.success("로그인 하였습니다.");
          return {
            ...state,
            ...payload,
          };
        }
      })
      .addCase(withdrawal.fulfilled, (state, { payload }) => {
        message.success("회원을 탈퇴하였습니다.");
        return { ...initialState, error: "" };
      })
      .addCase(changeNickOrIntro.fulfilled, (state, { payload }) => {
        if (payload.error) {
          message.error(payload.error);
          return { ...initialState, error: "" };
        } else {
          message.success("수정하였습니다.");
          return {
            ...state,
            ...payload,
          };
        }
      })
      .addCase(changePw.fulfilled, (state, { payload }) => {
        if (payload.error) {
          message.error(payload.error);
          return { ...initialState, error: "" };
        } else {
          message.success("수정하였습니다.");
          return {
            ...state,
            ...payload,
          };
        }
      });
  },
});
