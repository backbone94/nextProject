import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 한글을 영어로 번역하기
export const translate = createAsyncThunk(
  "translate",
  async (korea: string | string[]) => {
    const res = await axios.get(
      `https://translation.googleapis.com/language/translate/v2?target=en&q=${korea}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`
    );
    console.log("번역 결과: ", res.data);
    return res.data;
  }
);

const initialState = {};

export const translateReducer = createSlice({
  name: "translate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(translate.fulfilled, (state, { payload }) => {});
  },
});
