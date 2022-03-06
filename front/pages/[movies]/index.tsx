import { useRouter } from "next/router";
import styles from "../../styles/movies.module.css";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import NonPage from "../NonPage";
import Loading from "../../components/Loading";
import { searchMovies } from "../../store/reducers/searchMoviesReducer";
import { clickMovie } from "../../store/reducers/detailMovieReducer";
import infinityScroll from "../../util/infinityScroll";

const Movies = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const moviesParam = router.query.movies;
  const [movieTitle, setMovieTitle] = useState(moviesParam);
  const movies = useSelector((state: RootState) => state.movies);
  const { movieList, error, loading } = movies;

  useEffect(() => {
    dispatch(searchMovies({ title: moviesParam, page: 1 }));
    setMovieTitle(moviesParam);
    window.addEventListener("scroll", () => infinityScroll(moviesParam), true);
  }, [moviesParam]);

  // 영화 검색 엔터 키
  const enterMovies = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovies({ title: moviesParam, page: 1 }));
      router.push(`/${movieTitle}`);
    }
  };

  // 영화 상세 페이지로 이동
  const detailMovie = (title: string) => {
    dispatch(clickMovie(title));
    router.push(`/${moviesParam}/${title}`);
  };

  return loading ? (
    <Loading />
  ) : !error ? (
    <div className={styles.moviesContainer}>
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
              key={movie.imbdID}
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
    </div>
  ) : (
    <NonPage />
  );
};

export default Movies;
