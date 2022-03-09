import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 블로그 글 검색
export const searchblog = createAsyncThunk(
  "blog/search",
  async (title: string | string[]) => {
    const res = await axios.get("http://localhost:7000/api/naverBlog", {
      params: { title: title },
    });
    console.log("블로그 검색 결과: ", res.data);
    return res.data;
  }
);

const initialState = {
  postList: [],
};

export const blogReducer = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchblog.fulfilled, (state, { payload }) => {
      state.postList = payload;
    });
  },
});
