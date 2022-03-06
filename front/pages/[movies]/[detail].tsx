import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "../../styles/moviePage.module.css";
import Loading from "../../components/Loading";
import Comment from "../../components/Comment";
import { useEffect } from "react";

const MoviePage = () => {
  const movie = useSelector((state: RootState) => state.detailMovie);
  const { loading, Title } = movie;

  return loading ? (
    <Loading />
  ) : Title ? (
    // 영화 상세 정보 페이지
    <div className={styles.moviePageContainer}>
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
        {/* 한줄 리뷰 */}
        <Comment />
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
