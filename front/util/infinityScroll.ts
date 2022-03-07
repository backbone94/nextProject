import { Dispatch } from "react";
import { searchMovies } from "../store/reducers/searchMoviesReducer";
import { throttle } from "lodash";
import { infinity } from "../store/reducers/searchMoviesReducer";

export default function infinityScroll(
  dispatch: Dispatch<any>,
  title: string | string[],
  page: number,
  setPage
) {
  // scrollHeight
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  // scrollTop
  let scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  // clientHeight
  let clientHeight = document.documentElement.clientHeight;

  console.log("스크롤: ", scrollTop + clientHeight, " 총 길이: ", scrollHeight);
  console.log("다음 요청할 page: ", page);

  // 스크롤이 끝에 도달하면
  if (scrollTop + clientHeight === scrollHeight) {
    dispatch(infinity({ title, page }));
    setPage((page) => page + 1);
  }
}
