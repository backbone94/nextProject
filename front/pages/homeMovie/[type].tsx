import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import VisitedMovies from "../../components/VisitedMovies";
import { RootState } from "../../store";
import styles from "../../styles/movies.module.css";
import NonPage from "../NonPage";
import { BackTop } from "antd";
import InfinityLoading from "../../components/InfinityLoading";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  nowNextPage,
  topRatedNextPage,
  upcomingNextPage,
} from "../../store/reducers/moviesReducer";

const type = () => {
  const [ref, inView] = useInView();
  const router = useRouter();
  const dispatch = useDispatch();
  const type = router.query.type;
  const [page, setPage] = useState(1);
  const {
    popularList,
    nowList,
    upcomingList,
    loading,
    error,
    visitedMovies,
    infinityLoading,
    popularLastPage,
    nowLastPage,
    upcomingLastPage,
  } = useSelector((state: RootState) => state.movies);
  let lastPage = 0;
  let movieList = null;

  if (type === "인기작") {
    movieList = popularList;
    lastPage = popularLastPage;
  } else if (type === "현재 상영작") {
    movieList = nowList;
    lastPage = nowLastPage;
  } else {
    movieList = upcomingList;
    lastPage = upcomingLastPage;
  }

  // page의 값이 변하면 다음 페이지 검색
  useEffect(() => {
    console.log("현재 page: ", page);
    console.log("마지막 page: ", lastPage);
    if (page !== 1) {
      if (type === "인기작") dispatch(topRatedNextPage(page));
      else if (type === "현재 상영작") dispatch(nowNextPage(page));
      else dispatch(upcomingNextPage(page));
    }
  }, [page]);

  // 페이지의 끝 부분에 도달하면 page++
  useEffect(() => {
    if (inView && !loading && page !== lastPage) {
      setPage((page) => page + 1);
    }
  }, [inView, loading]);

  // 선택한 영화의 상세 페이지로 이동
  const moveToDetail = (title: string, year: string) => {
    router.push({ pathname: "/homeMovie", query: { title, year } });
  };

  return loading ? (
    <Loading />
  ) : !error ? (
    <div className={styles.moviesContainer}>
      {/* 최근 클릭한 영화 */}
      {/* {visitedMovies.length ? <VisitedMovies /> : null} */}

      {/* 위로 가기 버튼 */}
      <BackTop>
        <span className={styles.top}>👆</span>
      </BackTop>

      <div style={{ textAlign: "center", fontSize: 30, marginTop: 40 }}>
        {type}
      </div>

      {/* 영화 리스트 */}
      <div className={styles.movies}>
        {movieList &&
          movieList.map((movie) => (
            <div
              onClick={() =>
                moveToDetail(movie.original_title, movie.release_date)
              }
              key={movie.id}
              className={styles.movieCard}
            >
              <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster"
              />
              <div className={styles.movieInfo}>
                <div className={styles.movieYear}>{movie.release_date}</div>
                <div className={styles.movieTitle}>{movie.title}</div>
              </div>
            </div>
          ))}
      </div>
      {infinityLoading ? <InfinityLoading /> : <div ref={ref}></div>}
    </div>
  ) : (
    <NonPage />
  );
};

export default type;
