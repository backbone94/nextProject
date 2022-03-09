import { detailMovieReducer } from "./reducers/detailMovieReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { verifyReducer } from "./reducers/verifyReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { videoReducer } from "./reducers/videoReducer";
import { translateReducer } from "./reducers/translateReducer";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { commentReducer } from "./reducers/commentReducer";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// 새로고침해도 store의 state 값 저장하기 위한 라이브러리
const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage: storage,
  // userReducer의 state를 localStorage에 저장
  whitelist: ["user", "verify", "comment", "detailMovie", "movies"],
};

const rootReducer = combineReducers({
  user: userReducer.reducer,
  verify: verifyReducer.reducer,
  comment: commentReducer.reducer,
  detailMovie: detailMovieReducer.reducer,
  movies: moviesReducer.reducer,
  video: videoReducer.reducer,
  translate: translateReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
