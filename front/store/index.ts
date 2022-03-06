import { detailMovieReducer } from "./reducers/detailMovieReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { verifyReducer } from "./reducers/verifyReducer";
import { searchMoviesReducer } from "./reducers/searchMoviesReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { commentReducer } from "./reducers/commentReducer";

// 새로고침해도 store의 state 값 저장하기 위한 라이브러리
const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // userReducer의 state를 localStorage에 저장
  whitelist: ["user", "verify", "search", "comment"],
};

const rootReducer = combineReducers({
  user: userReducer.reducer,
  verify: verifyReducer.reducer,
  detailMovie: detailMovieReducer.reducer,
  comment: commentReducer.reducer,
  movies: searchMoviesReducer.reducer,
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
