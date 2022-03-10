import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 유튜브 영상 검색
export const searchVideo = createAsyncThunk(
  "video/search",
  async (title: string | string[]) => {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_VIDEO_API}&q={${title} 공식 예고편}&maxResults=1&type=video&chart=mostPopular`
    );
    console.log("유튜브 검색 결과: ", res.data);
    return res.data;
  }
);

const initialState = {
  video: "",
};

export const videoReducer = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchVideo.fulfilled, (state, { payload }) => {
      state.video = payload.items[0].id.videoId;
    });
  },
});
