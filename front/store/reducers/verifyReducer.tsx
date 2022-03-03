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

const initialState = {
  verifyNum: null,
};

export const verifyReducer = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(emailVerify.fulfilled, (state, { payload }) => {
      if (payload.error) {
        // 이미 존재하는 아이디이면
        message.warning(payload.error);
      } else {
        return { ...state, verifyNum: payload };
      }
    });
  },
});
