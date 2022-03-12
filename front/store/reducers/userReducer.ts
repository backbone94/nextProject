import { User } from "../type/user";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// 토큰 유효성 검증
export const tokenCheck = createAsyncThunk("user/verify", async () => {
  let token = localStorage.getItem("token") || "";
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/token`,
    {
      headers: { Authorization: token },
    }
  );
  console.log("토큰 유효성 결과: ", res.data);
  return res.data;
});

// 회원가입
export const addUser = createAsyncThunk("user/addUser", async (user: User) => {
  if (!user.profile) user.profile = "/defaultImage.png";
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/signUp`,
    user
  );
  console.log("회원가입 결과: ", res.data);
  if (res.data.token) localStorage.setItem("token", res.data.token);
  return res.data.newUser;
});

// 로그인
export const getUser = createAsyncThunk(
  "user/getUser",
  async (user: Object) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/logIn`,
      user
    );
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
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`,
      {
        data: { email },
      }
    );
    console.log("회원 삭제 결과: ", res.data);
    return res.data;
  }
);

// 이미지 & 닉네임 & 자기소개 변경
export const changeNickOrIntro = createAsyncThunk(
  "user/changeNickOrIntro",
  async (user: Object) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/changeNickOrIntro`,
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
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/changePw`,
      {
        user,
        headers: { Authorization: token },
      }
    );
    console.log("비밀번호 변경 결과: ", res.data);
    return res.data;
  }
);

// 좋아요 누른 유저 정보 업데이트
export const userLike = createAsyncThunk(
  "user/userLike",
  async (userLike: Object) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/userLike`,
      {
        userLike,
        headers: { Authorization: token },
      }
    );
    console.log("유저 좋아요 업데이트 결과: ", res.data);
    return res.data;
  }
);

// 개봉 알람 설정
export const setAlarm = createAsyncThunk(
  "user/setAlarm",
  async (object: { email: string; title: string; releaseDate: string }) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.post(`http://3.34.156.241/api/user/alarm`, {
      object,
      headers: { Authorization: token },
    });
    console.log("알람 설정 결과: ", res.data);
    return res.data;
  }
);

// 개봉 알람 취소
export const cancelAlarm = createAsyncThunk(
  "user/cancelAlarm",
  async (object: { email: string; title: string; releaseDate: string }) => {
    let token = localStorage.getItem("token") || "";
    const res = await axios.delete(`http://3.34.156.241/api/user/alarm`, {
      data: { object, headers: { Authorization: token } },
    });
    console.log("알람 취소 결과: ", res.data);
    return res.data;
  }
);

const initialState: User = {
  _id: "",
  email: "",
  password: "",
  profile: "",
  nickName: "",
  introduce: "",
  likeComments: [],
  alarm: [],
  alarmState: false,
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

    // 알림 설정 여부 체크
    alarm: (state, { payload }) => {
      const existAlarm = state.alarm.find(
        (a: { title }) => a.title === payload
      );

      if (existAlarm) state.alarmState = true;
      else state.alarmState = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(tokenCheck.fulfilled, (state, { payload }) => {
        if (payload.error) {
          // 토큰이 유효하지 않은 경우
          message.error("로그아웃 하였습니다.");
          return { ...initialState, error: "" };
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
      })
      .addCase(userLike.fulfilled, (state, { payload }) => {
        state.likeComments = payload.likeComments;
      })
      // 알람 설정
      .addCase(setAlarm.fulfilled, (state, { payload }) => {
        state.alarm = payload.alarm;
      }) //알람 취소
      .addCase(cancelAlarm.fulfilled, (state, { payload }) => {
        // state.alarm = state.alarm.filter((a: {title, releaseDate}) => a.title !== payload)
        state.alarm.forEach((a: { title; releaseDate }, index) => {
          if (a.title === payload) state.alarm.splice(index, 1);
        });
      });
  },
});
