import { useRouter } from "next/router";
import styles from "../../styles/movies.module.css";
import { Input, BackTop } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import NonPage from "../NonPage";
import Loading from "../../components/Loading";
import {
  searchFirstPage,
  moviesReducer,
} from "../../store/reducers/moviesReducer";
import { clickMovie } from "../../store/reducers/detailMovieReducer";
import InfinityLoading from "../../components/InfinityLoading";
import { searchNextPage } from "../../store/reducers/moviesReducer";
import { useInView } from "react-intersection-observer";
import VisitedMovies from "../../components/VisitedMovies";

const Movies = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const moviesParam = router.query.movies;
  const [movieTitle, setMovieTitle] = useState(moviesParam);
  const movies = useSelector((state: RootState) => state.movies);
  const {
    movieList,
    error,
    loading,
    lastPage,
    infinityLoading,
    visitedMovies,
  } = movies;

  // page의 값이 변하면 다음 페이지 검색
  useEffect(() => {
    console.log("현재 page: ", page);
    if (page !== 1) {
      dispatch(searchNextPage({ title: moviesParam, page }));
    }
  }, [page]);

  // 페이지의 끝 부분에 도달하면 page++
  useEffect(() => {
    if (inView && !loading && page !== lastPage) {
      setPage((page) => page + 1);
    }
  }, [inView, loading]);

  // 영화가 검색된 상태에서 새로운 영화를 검색하는 경우
  // ex) 뒤로 가기
  useEffect(() => {
    setPage(1);
    setMovieTitle(moviesParam);
    dispatch(searchFirstPage(moviesParam));
  }, [moviesParam]);

  // 영화 검색 엔터 키
  const enterMovies = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      dispatch(searchFirstPage(movieTitle));
      router.push(`/${movieTitle}`);
    }
  };

  // 영화 상세 페이지로 이동
  const detailMovie = (title: string) => {
    // dispatch(clickMovie(title));
    dispatch(moviesReducer.actions.visit({ movies: moviesParam, title }));
    router.push(`/${moviesParam}/${title}`);
  };

  console.log(movieList);

  return loading ? (
    <Loading />
  ) : !error ? (
    <div className={styles.moviesContainer}>
      {/* 최근 클릭한 영화 */}
      {visitedMovies.length ? <VisitedMovies /> : null}

      {/* 위로 가기 버튼 */}
      <BackTop>
        <span className={styles.top}>👆</span>
      </BackTop>

      {/* 영화 검색 input */}
      <div className={styles.searchInputContainer}>
        <Input
          autoFocus
          onKeyUp={enterMovies}
          placeholder="영화 제목을 입력하세요."
          className={styles.searchInput}
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </div>
      {/* 영화 리스트 */}
      <div className={styles.movies}>
        {movieList &&
          movieList.map((movie) => (
            <div
              onClick={() => detailMovie(movie.Title)}
              key={movie.imdbID}
              className={styles.movieCard}
            >
              <img
                className={styles.movieImage}
                src={movie.Poster}
                alt="poster"
              />
              <div className={styles.movieInfo}>
                <div className={styles.movieYear}>{movie.Year}</div>
                <div className={styles.movieTitle}>{movie.Title}</div>
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

export default Movies;
