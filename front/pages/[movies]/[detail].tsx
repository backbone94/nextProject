import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "../../styles/moviePage.module.css";
import Loading from "../../components/Loading";
import Comment from "../../components/Comment";
import VisitedMovies from "../../components/VisitedMovies";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { clickMovie } from "../../store/reducers/detailMovieReducer";
import { searchVideo } from "../../store/reducers/videoReducer";

const MoviePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const detail = router.query.detail;
  const movie = useSelector((state: RootState) => state.detailMovie);
  const videoId = useSelector((state: RootState) => state.video.video);
  const { loading, Title } = movie;
  const visitedMovies = useSelector(
    (state: RootState) => state.movies.visitedMovies
  );

  // 첫 방문 또는 뒤로 가기로 방문하는 경우
  useEffect(() => {
    dispatch(clickMovie(detail));
    dispatch(searchVideo(detail));
  }, [detail]);

  return loading ? (
    <Loading />
  ) : Title ? (
    // 영화 상세 정보 페이지
    <div className={styles.moviePageContainer}>
      {/* 최근 클릭한 영화 리스트 */}
      {visitedMovies.length ? <VisitedMovies /> : null}

      <div className={styles.movieInfoAndComment}>
        <div className={styles.movieInfoContainer}>
          <img className={styles.poster} src={`${movie.Poster}`} alt="이미지" />
          <div className={styles.movieInfo}>
            <div className={styles.title}>{movie.Title}</div>
            <div className={styles.released}>{movie.Released}</div>
            <div className={styles.text}>{movie.Plot}</div>
            <div className={styles.director}>Director</div>
            <div className={styles.text}>{movie.Director}</div>
            <div className={styles.actors}>Actors</div>
            <div className={styles.text}>{movie.Actors}</div>
            <div className={styles.genre}>Genre</div>
            <div className={styles.text}>{movie.Genre}</div>
          </div>
        </div>
      </div>
      {/* 한줄 리뷰 */}
      <Comment />

      {/* 영화 예고편 */}
      <div className={styles.video}>
        <iframe
          key={videoId}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; rel=0; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ) : (
    // 404 페이지
    <div style={{ minHeight: 736, display: "flex" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <div style={{ fontSize: 50 }}>💬</div>
        <div style={{ fontSize: 70 }}>404</div>
        <h2>영화를 찾을 수 없습니다.</h2>
      </div>
    </div>
  );
};

export default MoviePage;
