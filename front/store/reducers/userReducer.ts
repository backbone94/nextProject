import { User } from "../user";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 회원가입
export const addUser = createAsyncThunk("user/addUser", async (user: User) => {
  const res = await axios.post("http://localhost:7000/api/user", user);
  console.log("회원가입 결과: ", res.data);
  return res.data;
});

// 로그인
export const getUser = createAsyncThunk("user/getUser", async (user: any) => {
  const res = await axios.get("http://localhost:7000/api/user", {
    params: user,
  });
  console.log("회원 정보 불러오기 결과: ", res.data);
  return res.data;
});

const initialState: User = {
  name: "",
  email: "",
  password: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState: { ...initialState, error: "" },
  reducers: {
    logOut: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, { payload }) => {
        if (payload.error) {
          // 이미 존재하는 아이디이면
          message.warning(payload.error);
        } else {
          //존재하지 않는 아이디이면
          state.email = payload.email;
          state.name = payload.name;
          state.password = payload.password;
          message.success("회원가입을 완료하였습니다.");
        }
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        if (payload.error) {
          // 아이디 또는 비밀번호가 틀리면
          message.warning(payload.error);
        } else {
          state.email = payload.email;
          state.name = payload.name;
          state.password = payload.password;
          message.success("로그인 하였습니다.");
        }
      });
  },
});
