import { useDispatch } from "react-redux";
import { searchMovies } from "../store/reducers/searchMoviesReducer";

let page = 2;

export default function infinityScroll(title: string | string[]) {
  const dispatch = useDispatch();
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  let scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  let clientHeight = document.documentElement.clientHeight;

  console.log(scrollTop, clientHeight, scrollHeight);

  if (scrollTop + clientHeight === scrollHeight - 150) {
    dispatch(searchMovies({ title, page }));
    page++;
  }
}
