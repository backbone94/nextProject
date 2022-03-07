import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clickMovie } from "../store/reducers/detailMovieReducer";
import { moviesReducer } from "../store/reducers/moviesReducer";
import styles from "../styles/visitedMovies.module.css";

const VisitedMovies = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const visitedMovies = useSelector(
    (state: RootState) => state.movies.visitedMovies
  );

  // 최근 클릭한 영화에서 제거
  const deleteVisit = () => {
    dispatch(moviesReducer.actions.deleteVisited());
  };

  // 선택한 영화로 바로 이동
  const move = (movie: { movies: string; title: string }) => {
    dispatch(clickMovie(movie.title));
    router.push(`/${movie.movies}/${movie.title}`);
  };

  return (
    <span className={styles.visitedMoviesContainer}>
      <div style={{ textAlign: "center", marginTop: 10 }}>
        최근 클릭한 영화
        <span className={styles.deleteButton} onClick={deleteVisit}>
          삭제
        </span>
      </div>
      <ul style={{ marginTop: 10 }}>
        {visitedMovies.map((movie, index) => (
          <li
            key={index}
            onClick={() => move(movie)}
            className={styles.movie}
            style={{ marginBottom: 10, cursor: "pointer" }}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </span>
  );
};

export default VisitedMovies;
