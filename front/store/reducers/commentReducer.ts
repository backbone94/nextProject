import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { Comment } from "../type/comment";

// 리뷰 불러오기
export const getCommentList = createAsyncThunk(
  "comment/getCommentList",
  async (movie: string | string[]) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/comment`,
      {
        params: { movie: movie },
      }
    );
    console.log("리뷰 불러오기 결과: ", res.data);

    return res.data;
  }
);

// 리뷰 쓰기
export const addComment = createAsyncThunk(
  "comment/addComment",
  async (comment: Object) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/comment`,
      {
        comment,
        headers: { Authorization: token },
      }
    );
    console.log("리뷰 쓰기 결과: ", res.data);
    return res.data;
  }
);

// 좋아요 수 변경
export const commentLike = createAsyncThunk(
  "comment/commentLike",
  async (like: Object) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/comment/commentLike`,
      like
    );
    console.log("좋아요 수 변경 결과: ", res.data);
    return res.data;
  }
);

// 리뷰 삭제
export const removeComment = createAsyncThunk(
  "comment/removeComment",
  async (comment: Comment) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/comment/removeComment`,
      {
        data: { comment: comment },
      }
    );
    console.log("리뷰 삭제 결과: ", res.data);
    return comment._id;
  }
);

const initialState = {
  commentList: [],
  error: false,
};

export const commentReducer = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentList.fulfilled, (state, { payload }) => {
        state.commentList = payload;
      })
      .addCase(addComment.fulfilled, (state, { payload }) => {
        if (payload.error) {
          state.error = payload.error;
        } else state.commentList.push(payload);
      })
      .addCase(removeComment.fulfilled, (state, { payload }) => {
        state.commentList = state.commentList.filter((c) => c._id !== payload);
      });
  },
});
